import React from 'react'
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import { user } from 'reducers/user.js';
//import styled from 'styled-components';

import { Signup } from './Components/Signup.js'
import { StatusMessage } from './Components/Statusmessage.js'
import { Signin } from 'Components/Signin.js';
import { Journey } from 'Components/Journey.js';


const reducer = combineReducers({ user: user.reducer })
const store = configureStore({ reducer })

export const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Signup />
        <Signin />
        <StatusMessage />
    </Provider>
    </div>
  )
}
