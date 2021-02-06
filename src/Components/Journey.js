import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import {Mainwrapper} from '../Styling/Globalstyling';
import { Signin } from './Signin.js';
import { Signup } from './Signup.js';
import { Profile } from './Profile.js'
import { SubmitButton } from './Button.js';

export const Journey = () => {
  const accessToken = useSelector((store) => store.user.login.accessToken);
  const [section, setSection] = useState("Signin")
  const error = useSelector((store) => store.user.statusMessage);

  // If accessToken exist
  if (accessToken) {
    return <Profile />
  };

  // If user is logged out, show the signup / login form
  return (
    <div>
      {section === "Signin" && (
        <Mainwrapper>
          <Signin />
        
            <h2>Not having an account yet?</h2>
            <SubmitButton type="submit" title="Sign up here" function={setSection} value={Signin}>Click here</SubmitButton>
         
        </Mainwrapper>
      )}
      {section === "Signup" && (
        <Mainwrapper>
          <Signup />

            {error && <h4>{`${error}`}</h4>}
            <h2>Already a user?</h2>
            <SubmitButton title="Log in" function={setSection} value={Signup}>Go to Login</SubmitButton>
    
        </Mainwrapper>
      )}
    </div>
  );
};
