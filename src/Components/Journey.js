import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import {Mainwrapper} from '../Styling/Globalstyling';
import { Signin } from './Signin.js';
import { Signup } from './Signup.js';
import { Profile } from './Profile.js'

export const Journey = () => {
  const accessToken = useSelector((store) => store.user.login.accessToken);
  const [section, setSection] = useState("LogIn")
  const error = useSelector((store) => store.user.statusMessage);

  // If accessToken exist
  if (accessToken) {
    return <Profile />
  };

  // If user is logged out, show the signup / login form
  return (
    <div>
      {section === "LogIn" && (
        <Mainwrapper>
          <Signin />
        
            <h2>Not having an account yet?</h2>
            <button title="Sign up here" function={setSection} value="SignUp">Click here</button>
         
        </Mainwrapper>
      )}

      {section === "SignUp" && (
        <Mainwrapper>
          <Signup />

            {error && <h4>{`${error}`}</h4>}
            <h2>Already a user?</h2>
            <button title="Log in" function={setSection} value="LogIn">Go to Login</button>
    
        </Mainwrapper>
      )}
    </div>
  );
};