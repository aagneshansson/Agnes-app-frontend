import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { Mainwrapper, Heading, Button, H2 } from '../Styling/Globalstyling';
import { Signup } from './Signup.js';
import { Profile } from './Profile.js'

export const Homepage = () => {
  const accessToken = useSelector((store) => store.user.login.accessToken);
 // const error = useSelector((store) => store.user.statusMessage);

  // If accessToken exist
  if (accessToken) {
    return <Profile />
  };

  return (
    <Mainwrapper>
      <Heading>
        Organizing your life is just a click away!
      </Heading>

      <Signup />
      <H2>Already a user?</H2>
      <Link to="/signin">
        <Button>Sign in</Button>
      </Link>

      </Mainwrapper>
  );
};
