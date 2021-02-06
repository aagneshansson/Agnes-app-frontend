import React from 'react'
import { combineReducers } from "@reduxjs/toolkit";
//import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';

import { user } from 'reducers/user.js';
import { Signup } from './Components/Signup.js'
import { StatusMessage } from './Components/Statusmessage.js'
import { Signin } from 'Components/Signin.js';

// Use this in route later :) 

//const accessToken = useSelector((store) => store.user.login.accessToken);  --> take this back when implementing routes 

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({ user: user.reducer });
// const store = configureStore({ reducer });

// Store the code 
// 1) Retrieve the local storage and use it as out initial state
const persistedStateJSON = localStorage.getItem("reduxStates");

let persistedState = {};

if (persistedStateJSON) {
  persistedState = JSON.parse(persistedStateJSON);
}

// 2) Create the store using the initial state and retrieved state 

const store = createStore(
  reducer,
  persistedState,
  composeEnhancer(applyMiddleware(thunk))
);


// 3) Store the state in localstorage on ANY redux state change 
store.subscribe(() => {
  localStorage.setItem('reduxStates', JSON.stringify(store.getState()));
});

export const App = () => {
  return (
    <div>
      <Provider store={store}> 
      {/*path ="/" if statement 
      useEffect should be triggered value is changed
      add -> if 
      usehistory history.push 
      /}

        {/* <Journey /> */}
        <Signup />
        <Signin />
        <StatusMessage />
    </Provider>
    </div>
  )
}
