import { user } from './user.js'

const SIGNUP_URL = 'https://organizeit-app.herokuapp.com/users';
const SIGNIN_URL = 'https://organizeit-app.herokuapp.com/sessions';
const LOGOUT_URL = 'https://organizeit-app.herokuapp.com/logout';

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
              throw new Error ('Unable to Sign Up.');
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
                throw new Error ('Login failed');
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

export const logoutfetch = (accessToken) => {
    return (dispatch) => {
        fetch(LOGOUT_URL, 
            {
                method: 'POST',
                headers: { Authorization: accessToken },
            })
            .then((res) => {
                if (!res.ok) {
                    throw new Error ('Failed to logout');
                }
                return res.json();
            })
            .then((json) => {
                dispatch(user.actions.setStatusMessage({ statusMessage: 'Successful Log out!' }));
                dispatch(user.actions.logout());
            })
            .catch((err) => {
                dispatch(user.actions.setErrorMessage({ errorMessage: err }));
            })
        }
    }

// export const addprojectfetch = ( projectname, accessToken ) => {

//     return (dispatch) => {
//         fetch(ADDPROJECT_URL,
//         {
//             method: "POST",
//             body: JSON.stringify({ projectname }),
//               // Include the accessToken to get the protected endpoint
//             headers: { Authorization: accessToken },
//         })
//         .then((res) => {
//             if (!res.ok) {
//                 throw 'Unable to add project';
//             }
//             return res.json();
//         })
//         .then((json) => {
//             dispatch(user.actions.setNewProject({ projectname: json.projectname }));
//         })
//         .catch((err) => {
//             dispatch(user.actions.setErrorMessage({ errorMessage: err }));
//         })
//     }
// }
