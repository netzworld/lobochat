import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { API, Auth, withSSRContext, graphqlOperation } from "aws-amplify";
import Message from "../components/message";
import * as queries from "../graphql/queries";
import * as mutations from "../graphql/mutations";
import { onCreateMessage } from "../graphql/subscriptions";

async function checkUSer(user){
  const userInput = {
    name: user.username,
    friends: [],
  };

  try {
    const users = await API.graphql({
      authMode: "AMAZON_COGNITO_USER_POOLS",
      query: queries.listUsers,
    });
    console.log(users); // not necessary

    let a = false;

    for (let x in users.data?.listUsers.items) {
      if (users.data.listUsers.items[x].name === user.username) {
        a = true;
      }
    }

    if (!a) {
      try {
        await API.graphql(graphqlOperation(mutations.createUser, { input: userInput }));
        console.log("Created the user ", userInput.name);
      } catch (err) {
        console.error(err);
      }
    }
  } catch (error) {
    console.error(err);
  }

  
}

// async function deleteUser(){
//   const delOne = {
//     id: "89bf5c55-0629-4fc0-8a88-74c6e182f8ec"
//   };
//   const delTwo = {
//    id: "df0d529d-0abf-47e5-895e-5c49076f4362" 
//   };
//   const delThree = {
//     id: "63e36995-21ed-48f8-ad64-efc830e07b7c"
//   };
//   const delFour = {
//     id: "fe57231a-52ee-4f1d-8506-60fbc2ae4d88"
//   };

  
  

//   const deletedTodo = await API.graphql({ query: mutations.deleteUser, variables: { input: delOne } });
//   const deletedtwo = await API.graphql({ query: mutations.deleteUser, variables: { input: delTwo } });
//   const deletedThree = await API.graphql({ query: mutations.deleteUser, variables: { input: delThree } });
//   const deletedFour = await API.graphql({ query: mutations.deleteUser, variables: { input: delFour } });

// }

// const populatePersonArray = async () => {
//   try {
//     let people = new Array();

//     const usersAPI = await API.graphql({
//       authMode: "AMAZON_COGNITO_USER_POOLS",
//       query: queries.listUsers,
//     }); // NOT A PROMISE
//     const users = usersAPI.data?.listUsers.items;
    
//     for (let x in users) {
//       people.push(users[x]);
//     }
//     let peopleArr = new Array();

//     await Promise.all(people.map(async person => {
//       if(person.name){
//         peopleArr.push(person.name);
//       }
//     }));

//     return (
//       <>
//         {peopleArr.map(i => {
//           <p> {peopleArr.at(i)} </p>
//         })}
//       </>
//     );

//     // for(let a in people){
//     //   console.log(people[a]); // each index of people is an object. people[0] = {id, name, etc}
//     // }

  
//     // const getArray = async () => {
//     //   Promise.all(people).then( () => {
//     //     return (
//     //       <>
//     //         {people.map( (person, i) => {
//     //           <p key={i}>{person}</p>
//     //         })}
//     //       </>
//     //     );
//     //   })
//     //   //console.log(promiseValues);
//     // }

//     // return await getArray();
  
//   } catch (error) {
//     console.error(error);
//     return [];
//   }
  
// }


function Home({ messages, signOut }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const amplifyUser = await Auth.currentAuthenticatedUser();
        setUser(amplifyUser);
      } catch (err) {
        setUser(null);
      }
    };


    fetchUser();

    // Subscribe to creation of message
    const subscription = API.graphql(
      graphqlOperation(onCreateMessage)
    ).subscribe({
      next: ({ provider, value }) => {
        setStateMessages((stateMessages) => [
          ...stateMessages,
          value.data.onCreateMessage,
        ]);
      },
      error: (error) => console.warn(error),
    });
  }, []);

  // Sets the stateMessages value to be initialized with whatever messages we
  // returned from getServersideProps 
  const [stateMessages, setStateMessages] = useState([...messages]);

  const [messageText, setMessageText] = useState("");

  useEffect(() => {
    async function getMessages() {
      try {
        const messagesReq = await API.graphql({
          query: queries.listMessages,
          authMode: "AMAZON_COGNITO_USER_POOLS",
        });
        setStateMessages([...messagesReq.data.listMessages.items]);
      } catch (error) {
        console.error(error);
      }
    }
    getMessages();
  }, [user]);

  const handleSubmit = async (event) => {
    // Prevent the page from reloading
    event.preventDefault();

    // clear the textbox
    setMessageText("");

    const input = {
      // id is auto populated by AWS Amplify
      message: messageText, // the message content the user submitted (from state)
      owner: user.username, // this is the username of the current user
    };

    //checkUSer(user); // Checks if the user already exists or not, no return
    
    

  
    

    // Try make the mutation to graphql API
    try {
      await API.graphql({
        authMode: "AMAZON_COGNITO_USER_POOLS",
        query: mutations.createMessage,
        variables: {
          input: input,
        },
      });
    } catch (err) {
      console.error(err);
    }
  };



  
 

  



 



  if (user) {
    return (
      <div className={styles.background}>
        <div className={styles.sidebar}>
          

        </div>
        <div className={styles.container}>
          <button onClick={signOut} style={{ marginRight: "8px" }}>Sign Out</button>
          <h1 className={styles.title}>LoboChat</h1>

          <div className={styles.chatbox}>
            {stateMessages
              // sort messages oldest to newest client-side
              .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
              .map((message) => (
                // map each message into the message component with message as props
                <Message
                  message={message}
                  user={user}
                  isMe={user.username === message.owner}
                  key={message.id}
                />
              ))}
          </div>
          <div className={styles.formContainer}>
            <form onSubmit={handleSubmit} className={styles.formBase}>
              <input
                type="text"
                id="message"
                name="message"
                autoFocus
                required
                value={messageText}
                onChange={(e) => setMessageText(e.target.value)}
                placeholder="💬 Send a message to the world 🌎"
                className={styles.textBox}
              />
              <button style={{ marginLeft: "8px" }}>Send</button>
            </form>
          </div>
        </div>
      </div>
    );
  } else {
    return <p>Loading...</p>;
  }
}

export async function getServerSideProps({ req }) {
  // wrap the request in a withSSRContext to use Amplify functionality serverside.
  const SSR = withSSRContext({ req });

  try {
    // currentAuthenticatedUser() will throw an error if the user is not signed in.
    const user = await SSR.Auth.currentAuthenticatedUser();

    // If we make it passed the above line, that means the user is signed in.
    const response = await SSR.API.graphql({
      query: listMessages,
      // use authMode: AMAZON_COGNITO_USER_POOLS to make a request on the current user's behalf
      authMode: "AMAZON_COGNITO_USER_POOLS",
    });

    // return all the messages from the dynamoDB
    return {
      props: {
        messages: response.data.listMessages.items,
      },
    };
  } catch (error) {
    // We will end up here if there is no user signed in.
    // We'll just return a list of empty messages.
    return {
      props: {
        messages: [],
      },
    };
  }
}


export default withAuthenticator(Home, {
  includeGreetings: true
});
