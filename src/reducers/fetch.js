import { user } from './user.js'
import { useDispatch } from 'react-redux';

const SIGNUP_URL = 'http://localhost:8080/users';
const SIGNIN_URL = 'http://localhost:8080/sessions';
const ADDPROJECT_URL = '';

export const signupfetch = ( name, password ) => { 

    return (dispatch) => {
        fetch(SIGNUP_URL, 
        {
            method: "POST",
            body: JSON.stringify({ name, password }),
            headers: { "Content-Type": "application/json" }
        })
        .then((res) => {
            if (!res.ok) {
              throw 'Unable to Sign Up.';
            }
            return res.json();
            })
            .then((json) => {
                dispatch(user.actions.setUserId({ userId: json.userId }));
                dispatch(user.actions.setAccessToken({ accessToken: json.accessToken }));
                dispatch(user.actions.setStatusMessage({ statusMessage: 'Successful Sign Up' }));
              })
              .catch((err) => {
                dispatch(user.actions.setErrorMessage({ errorMessage: err }));
              });
    };
}

export const signinfetch = (name, password) => {
    return (dispatch) => {
        fetch(SIGNIN_URL, 
        {
            method: "POST",
            body: JSON.stringify({ name, password }),
            headers: { "Content-Type": "application/json" }
        })
        .then((res) => {
            if (!res.ok) {
                throw 'Login failed'
            }
                return res.json();
        })
        .then((json) => {
            // Save the login info
            dispatch(user.actions.setUserId({ userId: json.userId }));
            dispatch(user.actions.setAccessToken({ accessToken: json.accessToken }));
            dispatch(user.actions.setStatusMessage({ statusMessage: 'Successful Log In!' }));
          })
          .catch((err) => {
            dispatch(user.actions.logout());
            dispatch(user.actions.setAccessToken({ accessToken: null }));
            dispatch(user.actions.setErrorMessage({ errorMessage: err }));
          });
    }
}

export const addprojectfetch = ( projectname ) => {

    return (dispatch) => {
        fetch(ADDPROJECT_URL,
        {
            method: "POST",
            body: JSON.stringify({ projectname }),
            headers: { "Content-Type": "application/json" }
        })
        .then((res) => {
            if (!res.ok) {
                throw 'Unable to add project';
            }
            return res.json();
        })
        .then((json) => {
            dispatch()
        })
        .catch((err) => {
            dispatch()
        })
    }
}
