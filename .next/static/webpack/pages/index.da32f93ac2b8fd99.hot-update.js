"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var C_Users_Nic_Randazzo_Documents_Github_Repos_lobochat_1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_Nic_Randazzo_Documents_Github_Repos_lobochat_1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Nic_Randazzo_Documents_Github_Repos_lobochat_1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _aws_amplify_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @aws-amplify/ui-react */ \"./node_modules/@aws-amplify/ui-react/dist/esm/index.js\");\n/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! aws-amplify */ \"./node_modules/aws-amplify/lib-esm/index.js\");\n/* harmony import */ var _components_message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/message */ \"./components/message.js\");\n/* harmony import */ var _graphql_queries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../graphql/queries */ \"./graphql/queries.js\");\n/* harmony import */ var _graphql_mutations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../graphql/mutations */ \"./graphql/mutations.js\");\n/* harmony import */ var _graphql_subscriptions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../graphql/subscriptions */ \"./graphql/subscriptions.js\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Home(param1) {\n    var messages = param1.messages, signOut = param1.signOut;\n    _s();\n    var handleSubmit = function() {\n        var _ref = _asyncToGenerator(C_Users_Nic_Randazzo_Documents_Github_Repos_lobochat_1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(event) {\n            var input, userInput;\n            return C_Users_Nic_Randazzo_Documents_Github_Repos_lobochat_1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        // Prevent the page from reloading\n                        event.preventDefault();\n                        // clear the textbox\n                        setMessageText(\"\");\n                        input = {\n                            // id is auto populated by AWS Amplify\n                            message: messageText,\n                            owner: user.username\n                        };\n                        userInput = {\n                            name: user.username\n                        };\n                        _ctx.prev = 4;\n                        _ctx.next = 7;\n                        return aws_amplify__WEBPACK_IMPORTED_MODULE_7__.API.graphql({\n                            authMode: \"AMAZON_COGNITO_USER_POOLS\",\n                            query: _graphql_mutations__WEBPACK_IMPORTED_MODULE_5__.createUser,\n                            variables: {\n                                input: userInput\n                            }\n                        });\n                    case 7:\n                        _ctx.next = 12;\n                        break;\n                    case 9:\n                        _ctx.prev = 9;\n                        _ctx.t0 = _ctx[\"catch\"](4);\n                        console.error(_ctx.t0);\n                    case 12:\n                        _ctx.prev = 12;\n                        _ctx.next = 15;\n                        return aws_amplify__WEBPACK_IMPORTED_MODULE_7__.API.graphql({\n                            authMode: \"AMAZON_COGNITO_USER_POOLS\",\n                            query: _graphql_mutations__WEBPACK_IMPORTED_MODULE_5__.createMessage,\n                            variables: {\n                                input: input\n                            }\n                        });\n                    case 15:\n                        _ctx.next = 20;\n                        break;\n                    case 17:\n                        _ctx.prev = 17;\n                        _ctx.t1 = _ctx[\"catch\"](12);\n                        console.error(_ctx.t1);\n                    case 20:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    4,\n                    9\n                ],\n                [\n                    12,\n                    17\n                ]\n            ]);\n        }));\n        return function handleSubmit(event) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), user = ref[0], setUser = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var fetchUser = function() {\n            var _ref = _asyncToGenerator(C_Users_Nic_Randazzo_Documents_Github_Repos_lobochat_1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var amplifyUser;\n                return C_Users_Nic_Randazzo_Documents_Github_Repos_lobochat_1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.prev = 0;\n                            _ctx.next = 3;\n                            return aws_amplify__WEBPACK_IMPORTED_MODULE_7__.Auth.currentAuthenticatedUser();\n                        case 3:\n                            amplifyUser = _ctx.sent;\n                            setUser(amplifyUser);\n                            _ctx.next = 10;\n                            break;\n                        case 7:\n                            _ctx.prev = 7;\n                            _ctx.t0 = _ctx[\"catch\"](0);\n                            setUser(null);\n                        case 10:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee, null, [\n                    [\n                        0,\n                        7\n                    ]\n                ]);\n            }));\n            return function fetchUser() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        fetchUser();\n        // Subscribe to creation of message\n        var subscription = aws_amplify__WEBPACK_IMPORTED_MODULE_7__.API.graphql((0,aws_amplify__WEBPACK_IMPORTED_MODULE_7__.graphqlOperation)(_graphql_subscriptions__WEBPACK_IMPORTED_MODULE_6__.onCreateMessage)).subscribe({\n            next: function(param) {\n                var provider = param.provider, value = param.value;\n                setStateMessages(function(stateMessages) {\n                    return _toConsumableArray(stateMessages).concat([\n                        value.data.onCreateMessage, \n                    ]);\n                });\n            },\n            error: function(error) {\n                return console.warn(error);\n            }\n        });\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        function getMessages() {\n            return _getMessages.apply(this, arguments);\n        }\n        function _getMessages() {\n            _getMessages = _asyncToGenerator(C_Users_Nic_Randazzo_Documents_Github_Repos_lobochat_1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var messagesReq;\n                return C_Users_Nic_Randazzo_Documents_Github_Repos_lobochat_1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.prev = 0;\n                            _ctx.next = 3;\n                            return aws_amplify__WEBPACK_IMPORTED_MODULE_7__.API.graphql({\n                                query: _graphql_queries__WEBPACK_IMPORTED_MODULE_4__.listMessages,\n                                authMode: \"AMAZON_COGNITO_USER_POOLS\"\n                            });\n                        case 3:\n                            messagesReq = _ctx.sent;\n                            setStateMessages(_toConsumableArray(messagesReq.data.listMessages.items));\n                            _ctx.next = 10;\n                            break;\n                        case 7:\n                            _ctx.prev = 7;\n                            _ctx.t0 = _ctx[\"catch\"](0);\n                            console.error(_ctx.t0);\n                        case 10:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee, null, [\n                    [\n                        0,\n                        7\n                    ]\n                ]);\n            }));\n            return _getMessages.apply(this, arguments);\n        }\n        getMessages();\n    }, [\n        user\n    ]);\n    // Sets the stateMessages value to be initialized with whatever messages we\n    // returned from getServersideProps \n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(_toConsumableArray(messages)), stateMessages1 = ref1[0], setStateMessages = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), messageText = ref2[0], setMessageText = ref2[1];\n    if (user) {\n        var _this = this;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().background),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().container),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                        onClick: signOut,\n                        style: {\n                            marginRight: \"8px\"\n                        },\n                        children: \"Sign Out\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Nic Randazzo\\\\Documents\\\\Github Repos\\\\lobochat-1\\\\pages\\\\index.js\",\n                        lineNumber: 115,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().title),\n                        children: \"LoboChat\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Nic Randazzo\\\\Documents\\\\Github Repos\\\\lobochat-1\\\\pages\\\\index.js\",\n                        lineNumber: 116,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().chatbox),\n                        children: stateMessages1// sort messages oldest to newest client-side\n                        .sort(function(a, b) {\n                            return b.createdAt.localeCompare(a.createdAt);\n                        }).map(function(message) {\n                            return(// map each message into the message component with message as props\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_message__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                message: message,\n                                user: user,\n                                isMe: user.username === message.owner\n                            }, message.id, false, {\n                                fileName: \"C:\\\\Users\\\\Nic Randazzo\\\\Documents\\\\Github Repos\\\\lobochat-1\\\\pages\\\\index.js\",\n                                lineNumber: 123,\n                                columnNumber: 17\n                            }, _this));\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Nic Randazzo\\\\Documents\\\\Github Repos\\\\lobochat-1\\\\pages\\\\index.js\",\n                        lineNumber: 117,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().formContainer),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n                            onSubmit: handleSubmit,\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().formBase),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    id: \"message\",\n                                    name: \"message\",\n                                    autoFocus: true,\n                                    required: true,\n                                    value: messageText,\n                                    onChange: function(e) {\n                                        return setMessageText(e.target.value);\n                                    },\n                                    placeholder: \"\\uD83D\\uDCAC Send a message to the world \\uD83C\\uDF0E\",\n                                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().textBox)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Nic Randazzo\\\\Documents\\\\Github Repos\\\\lobochat-1\\\\pages\\\\index.js\",\n                                    lineNumber: 133,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                    style: {\n                                        marginLeft: \"8px\"\n                                    },\n                                    children: \"Send\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Nic Randazzo\\\\Documents\\\\Github Repos\\\\lobochat-1\\\\pages\\\\index.js\",\n                                    lineNumber: 144,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Nic Randazzo\\\\Documents\\\\Github Repos\\\\lobochat-1\\\\pages\\\\index.js\",\n                            lineNumber: 132,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Nic Randazzo\\\\Documents\\\\Github Repos\\\\lobochat-1\\\\pages\\\\index.js\",\n                        lineNumber: 131,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Nic Randazzo\\\\Documents\\\\Github Repos\\\\lobochat-1\\\\pages\\\\index.js\",\n                lineNumber: 114,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Nic Randazzo\\\\Documents\\\\Github Repos\\\\lobochat-1\\\\pages\\\\index.js\",\n            lineNumber: 113,\n            columnNumber: 7\n        }, this);\n    } else {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Nic Randazzo\\\\Documents\\\\Github Repos\\\\lobochat-1\\\\pages\\\\index.js\",\n            lineNumber: 151,\n            columnNumber: 12\n        }, this);\n    }\n}\n_s(Home, \"By3wXsY7xFRYOg8hjG5TIDSO+BI=\");\n_c = Home;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c1 = (0,_aws_amplify_ui_react__WEBPACK_IMPORTED_MODULE_9__.withAuthenticator)(Home, {\n    includeGreetings: true\n}));\nvar _c, _c1;\n$RefreshReg$(_c, \"Home\");\n$RefreshReg$(_c1, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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STs7Ozs7d0NBQVM7Ozs7OztnQ0FDOUM7Ozs7OzRCQUNIOzs7Ozs7b0JBQ0Y7Ozs7O2dCQUNGLENBQ047S0FDSCxNQUFNO1FBQ0wscUJBQU8sOERBQUNDLEdBQUM7c0JBQUMsWUFBVTs7Ozs7Z0JBQUksQ0FBQztLQUMxQjtDQUNGO0dBOUlRckUsSUFBSTtBQUFKQSxLQUFBQSxJQUFJOztBQWlMYiwrREFBZVQsTUFBQUEsd0VBQWlCLENBQUNTLElBQUksRUFBRTtJQUNyQ3NFLGdCQUFnQixFQUFFLElBQUk7Q0FDdkIsQ0FBQyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgeyB3aXRoQXV0aGVudGljYXRvciB9IGZyb20gXCJAYXdzLWFtcGxpZnkvdWktcmVhY3RcIjtcclxuaW1wb3J0IHsgQVBJLCBBdXRoLCB3aXRoU1NSQ29udGV4dCwgZ3JhcGhxbE9wZXJhdGlvbiB9IGZyb20gXCJhd3MtYW1wbGlmeVwiO1xyXG5pbXBvcnQgTWVzc2FnZSBmcm9tIFwiLi4vY29tcG9uZW50cy9tZXNzYWdlXCI7XHJcbmltcG9ydCB7IGxpc3RNZXNzYWdlcyB9IGZyb20gXCIuLi9ncmFwaHFsL3F1ZXJpZXNcIjtcclxuaW1wb3J0IHsgY3JlYXRlTWVzc2FnZSwgY3JlYXRlVXNlciB9IGZyb20gXCIuLi9ncmFwaHFsL211dGF0aW9uc1wiO1xyXG5pbXBvcnQgeyBvbkNyZWF0ZU1lc3NhZ2UgfSBmcm9tIFwiLi4vZ3JhcGhxbC9zdWJzY3JpcHRpb25zXCI7XHJcblxyXG5cclxuZnVuY3Rpb24gSG9tZSh7IG1lc3NhZ2VzLCBzaWduT3V0IH0pIHtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICAvLyBQcmV2ZW50IHRoZSBwYWdlIGZyb20gcmVsb2FkaW5nXHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIC8vIGNsZWFyIHRoZSB0ZXh0Ym94XHJcbiAgICBzZXRNZXNzYWdlVGV4dChcIlwiKTtcclxuXHJcbiAgICBjb25zdCBpbnB1dCA9IHtcclxuICAgICAgLy8gaWQgaXMgYXV0byBwb3B1bGF0ZWQgYnkgQVdTIEFtcGxpZnlcclxuICAgICAgbWVzc2FnZTogbWVzc2FnZVRleHQsIC8vIHRoZSBtZXNzYWdlIGNvbnRlbnQgdGhlIHVzZXIgc3VibWl0dGVkIChmcm9tIHN0YXRlKVxyXG4gICAgICBvd25lcjogdXNlci51c2VybmFtZSwgLy8gdGhpcyBpcyB0aGUgdXNlcm5hbWUgb2YgdGhlIGN1cnJlbnQgdXNlclxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCB1c2VySW5wdXQgPSB7XHJcbiAgICAgIG5hbWU6IHVzZXIudXNlcm5hbWVcclxuICAgIH07XHJcblxyXG4gICAgdHJ5e1xyXG4gICAgICBhd2FpdCBBUEkuZ3JhcGhxbCh7XHJcbiAgICAgICAgYXV0aE1vZGU6IFwiQU1BWk9OX0NPR05JVE9fVVNFUl9QT09MU1wiLFxyXG4gICAgICAgIHF1ZXJ5OiBjcmVhdGVVc2VyLFxyXG4gICAgICAgIHZhcmlhYmxlczoge1xyXG4gICAgICAgICAgaW5wdXQ6IHVzZXJJbnB1dCxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVHJ5IG1ha2UgdGhlIG11dGF0aW9uIHRvIGdyYXBocWwgQVBJXHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBBUEkuZ3JhcGhxbCh7XHJcbiAgICAgICAgYXV0aE1vZGU6IFwiQU1BWk9OX0NPR05JVE9fVVNFUl9QT09MU1wiLFxyXG4gICAgICAgIHF1ZXJ5OiBjcmVhdGVNZXNzYWdlLFxyXG4gICAgICAgIHZhcmlhYmxlczoge1xyXG4gICAgICAgICAgaW5wdXQ6IGlucHV0LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuXHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaFVzZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgYW1wbGlmeVVzZXIgPSBhd2FpdCBBdXRoLmN1cnJlbnRBdXRoZW50aWNhdGVkVXNlcigpO1xyXG4gICAgICAgIHNldFVzZXIoYW1wbGlmeVVzZXIpO1xyXG4gICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBzZXRVc2VyKG51bGwpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICBmZXRjaFVzZXIoKTtcclxuXHJcbiAgICAvLyBTdWJzY3JpYmUgdG8gY3JlYXRpb24gb2YgbWVzc2FnZVxyXG4gICAgY29uc3Qgc3Vic2NyaXB0aW9uID0gQVBJLmdyYXBocWwoXHJcbiAgICAgIGdyYXBocWxPcGVyYXRpb24ob25DcmVhdGVNZXNzYWdlKVxyXG4gICAgKS5zdWJzY3JpYmUoe1xyXG4gICAgICBuZXh0OiAoeyBwcm92aWRlciwgdmFsdWUgfSkgPT4ge1xyXG4gICAgICAgIHNldFN0YXRlTWVzc2FnZXMoKHN0YXRlTWVzc2FnZXMpID0+IFtcclxuICAgICAgICAgIC4uLnN0YXRlTWVzc2FnZXMsXHJcbiAgICAgICAgICB2YWx1ZS5kYXRhLm9uQ3JlYXRlTWVzc2FnZSxcclxuICAgICAgICBdKTtcclxuICAgICAgfSxcclxuICAgICAgZXJyb3I6IChlcnJvcikgPT4gY29uc29sZS53YXJuKGVycm9yKSxcclxuICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldE1lc3NhZ2VzKCkge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG1lc3NhZ2VzUmVxID0gYXdhaXQgQVBJLmdyYXBocWwoe1xyXG4gICAgICAgICAgcXVlcnk6IGxpc3RNZXNzYWdlcyxcclxuICAgICAgICAgIGF1dGhNb2RlOiBcIkFNQVpPTl9DT0dOSVRPX1VTRVJfUE9PTFNcIixcclxuICAgICAgICB9KTtcclxuICAgICAgICBzZXRTdGF0ZU1lc3NhZ2VzKFsuLi5tZXNzYWdlc1JlcS5kYXRhLmxpc3RNZXNzYWdlcy5pdGVtc10pO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXRNZXNzYWdlcygpO1xyXG4gIH0sIFt1c2VyXSk7XHJcblxyXG5cclxuXHJcbiAgLy8gU2V0cyB0aGUgc3RhdGVNZXNzYWdlcyB2YWx1ZSB0byBiZSBpbml0aWFsaXplZCB3aXRoIHdoYXRldmVyIG1lc3NhZ2VzIHdlXHJcbiAgLy8gcmV0dXJuZWQgZnJvbSBnZXRTZXJ2ZXJzaWRlUHJvcHMgXHJcbiAgY29uc3QgW3N0YXRlTWVzc2FnZXMsIHNldFN0YXRlTWVzc2FnZXNdID0gdXNlU3RhdGUoWy4uLm1lc3NhZ2VzXSk7XHJcblxyXG4gIGNvbnN0IFttZXNzYWdlVGV4dCwgc2V0TWVzc2FnZVRleHRdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG5cclxuXHJcbiAgaWYgKHVzZXIpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmFja2dyb3VuZH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzaWduT3V0fSBzdHlsZT17eyBtYXJnaW5SaWdodDogXCI4cHhcIiB9fT5TaWduIE91dDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5Mb2JvQ2hhdDwvaDE+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNoYXRib3h9PlxyXG4gICAgICAgICAgICB7c3RhdGVNZXNzYWdlc1xyXG4gICAgICAgICAgICAgIC8vIHNvcnQgbWVzc2FnZXMgb2xkZXN0IHRvIG5ld2VzdCBjbGllbnQtc2lkZVxyXG4gICAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiBiLmNyZWF0ZWRBdC5sb2NhbGVDb21wYXJlKGEuY3JlYXRlZEF0KSlcclxuICAgICAgICAgICAgICAubWFwKChtZXNzYWdlKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAvLyBtYXAgZWFjaCBtZXNzYWdlIGludG8gdGhlIG1lc3NhZ2UgY29tcG9uZW50IHdpdGggbWVzc2FnZSBhcyBwcm9wc1xyXG4gICAgICAgICAgICAgICAgPE1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgbWVzc2FnZT17bWVzc2FnZX1cclxuICAgICAgICAgICAgICAgICAgdXNlcj17dXNlcn1cclxuICAgICAgICAgICAgICAgICAgaXNNZT17dXNlci51c2VybmFtZSA9PT0gbWVzc2FnZS5vd25lcn1cclxuICAgICAgICAgICAgICAgICAga2V5PXttZXNzYWdlLmlkfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb3JtQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPXtzdHlsZXMuZm9ybUJhc2V9PlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgaWQ9XCJtZXNzYWdlXCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJtZXNzYWdlXCJcclxuICAgICAgICAgICAgICAgIGF1dG9Gb2N1c1xyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIHZhbHVlPXttZXNzYWdlVGV4dH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TWVzc2FnZVRleHQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLwn5KsIFNlbmQgYSBtZXNzYWdlIHRvIHRoZSB3b3JsZCDwn4yOXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnRleHRCb3h9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8YnV0dG9uIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IFwiOHB4XCIgfX0+U2VuZDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKHsgcmVxIH0pIHtcclxuICAvLyB3cmFwIHRoZSByZXF1ZXN0IGluIGEgd2l0aFNTUkNvbnRleHQgdG8gdXNlIEFtcGxpZnkgZnVuY3Rpb25hbGl0eSBzZXJ2ZXJzaWRlLlxyXG4gIGNvbnN0IFNTUiA9IHdpdGhTU1JDb250ZXh0KHsgcmVxIH0pO1xyXG5cclxuICB0cnkge1xyXG4gICAgLy8gY3VycmVudEF1dGhlbnRpY2F0ZWRVc2VyKCkgd2lsbCB0aHJvdyBhbiBlcnJvciBpZiB0aGUgdXNlciBpcyBub3Qgc2lnbmVkIGluLlxyXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IFNTUi5BdXRoLmN1cnJlbnRBdXRoZW50aWNhdGVkVXNlcigpO1xyXG5cclxuICAgIC8vIElmIHdlIG1ha2UgaXQgcGFzc2VkIHRoZSBhYm92ZSBsaW5lLCB0aGF0IG1lYW5zIHRoZSB1c2VyIGlzIHNpZ25lZCBpbi5cclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgU1NSLkFQSS5ncmFwaHFsKHtcclxuICAgICAgcXVlcnk6IGxpc3RNZXNzYWdlcyxcclxuICAgICAgLy8gdXNlIGF1dGhNb2RlOiBBTUFaT05fQ09HTklUT19VU0VSX1BPT0xTIHRvIG1ha2UgYSByZXF1ZXN0IG9uIHRoZSBjdXJyZW50IHVzZXIncyBiZWhhbGZcclxuICAgICAgYXV0aE1vZGU6IFwiQU1BWk9OX0NPR05JVE9fVVNFUl9QT09MU1wiLFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gcmV0dXJuIGFsbCB0aGUgbWVzc2FnZXMgZnJvbSB0aGUgZHluYW1vREJcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgbWVzc2FnZXM6IHJlc3BvbnNlLmRhdGEubGlzdE1lc3NhZ2VzLml0ZW1zLFxyXG4gICAgICB9LFxyXG4gICAgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgLy8gV2Ugd2lsbCBlbmQgdXAgaGVyZSBpZiB0aGVyZSBpcyBubyB1c2VyIHNpZ25lZCBpbi5cclxuICAgIC8vIFdlJ2xsIGp1c3QgcmV0dXJuIGEgbGlzdCBvZiBlbXB0eSBtZXNzYWdlcy5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgbWVzc2FnZXM6IFtdLFxyXG4gICAgICB9LFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoQXV0aGVudGljYXRvcihIb21lLCB7XHJcbiAgaW5jbHVkZUdyZWV0aW5nczogdHJ1ZVxyXG59KTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJzdHlsZXMiLCJ3aXRoQXV0aGVudGljYXRvciIsIkFQSSIsIkF1dGgiLCJncmFwaHFsT3BlcmF0aW9uIiwiTWVzc2FnZSIsImxpc3RNZXNzYWdlcyIsImNyZWF0ZU1lc3NhZ2UiLCJjcmVhdGVVc2VyIiwib25DcmVhdGVNZXNzYWdlIiwiSG9tZSIsIm1lc3NhZ2VzIiwic2lnbk91dCIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwiaW5wdXQiLCJ1c2VySW5wdXQiLCJwcmV2ZW50RGVmYXVsdCIsInNldE1lc3NhZ2VUZXh0IiwibWVzc2FnZSIsIm1lc3NhZ2VUZXh0Iiwib3duZXIiLCJ1c2VyIiwidXNlcm5hbWUiLCJuYW1lIiwiZ3JhcGhxbCIsImF1dGhNb2RlIiwicXVlcnkiLCJ2YXJpYWJsZXMiLCJjb25zb2xlIiwiZXJyb3IiLCJzZXRVc2VyIiwiZmV0Y2hVc2VyIiwiYW1wbGlmeVVzZXIiLCJjdXJyZW50QXV0aGVudGljYXRlZFVzZXIiLCJzdWJzY3JpcHRpb24iLCJzdWJzY3JpYmUiLCJuZXh0IiwicHJvdmlkZXIiLCJ2YWx1ZSIsInNldFN0YXRlTWVzc2FnZXMiLCJzdGF0ZU1lc3NhZ2VzIiwiZGF0YSIsIndhcm4iLCJnZXRNZXNzYWdlcyIsIm1lc3NhZ2VzUmVxIiwiaXRlbXMiLCJkaXYiLCJjbGFzc05hbWUiLCJiYWNrZ3JvdW5kIiwiY29udGFpbmVyIiwiYnV0dG9uIiwib25DbGljayIsInN0eWxlIiwibWFyZ2luUmlnaHQiLCJoMSIsInRpdGxlIiwiY2hhdGJveCIsInNvcnQiLCJhIiwiYiIsImNyZWF0ZWRBdCIsImxvY2FsZUNvbXBhcmUiLCJtYXAiLCJpc01lIiwiaWQiLCJmb3JtQ29udGFpbmVyIiwiZm9ybSIsIm9uU3VibWl0IiwiZm9ybUJhc2UiLCJ0eXBlIiwiYXV0b0ZvY3VzIiwicmVxdWlyZWQiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJwbGFjZWhvbGRlciIsInRleHRCb3giLCJtYXJnaW5MZWZ0IiwicCIsImluY2x1ZGVHcmVldGluZ3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});