import { Signup } from '../Components/Signup.js';
import { user } from './user.js'
import { useDispatch, useSelector } from 'react-redux';

const SIGNUP_URL = 'http://localhost:8080/users';

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
              throw 'Unable to Sign Up, please check your name and password.';
            } else {
              return res.json();
            }
          })
          .then((json) => {
              dispatch(user.actions.setUserId({ userId: json.userId}));
              dispatch(user.actions.setAccessToken({ setAccessToken: json.accessToken }));
              dispatch(user.actions.setStatusmessage({ statusMessage: 'You failed unfortunately' }))
          })
          .catch((err) => {
              dispatch(user.actions.setErrorMessage({ errorMessage: err}))
          })
    };
}
