import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { combineReducers } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import styled from 'styled-components';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { user } from 'reducers/user.js';
import { Signup } from './Pages/Signup.js'
import { Signin } from 'Pages/Signin.js';
import { Homepage } from 'Pages/Homepage.js';
import { Profile } from 'Pages/Profile.js';
import { Header } from 'Components/Header.js';
import { Addproject } from 'Pages/Project.js';
import { EachProject } from 'Components/EachProject.js';
import { Logout } from 'Pages/Logout.js';

const AppWrapper = styled.section`
  background: #51198C;
  height: 100vh;
}
`;

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const reducer = combineReducers({ user: user.reducer });

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
    <AppWrapper>
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/" exact>
              <Homepage />
            </Route>

            <Route path="/signin" exact>
              <Signin />
            </Route>

            <Route path="/signup" exact>
              <Signup />
            </Route>

            <Route path="/project" exact>
              <Addproject />
            </Route>

            <Route path="/profile" exact>
              <Profile />
            </Route>

            <Route path="/logout" exact>
              <Logout />
            </Route>

            <Route path="/projectpage" exact>
              <EachProject />
            </Route>
            <Signup />
            <Signin />
          </Switch>
        </BrowserRouter>
      </Provider>
    </AppWrapper>
  );
};
