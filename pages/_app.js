import "../styles/globals.css";
import Amplify from "aws-amplify";
import awsconfig from "../aws-exports";

import { AmplifyTheme } from 'aws-amplify-react-native';

Amplify.configure({ ...awsconfig, ssr: true });

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}


export default MyApp;