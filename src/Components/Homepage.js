import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { Mainwrapper, Heading, Button, P } from '../Styling/Globalstyling';
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
        Welcome to the planning app!
      </Heading>
      <P>Let's organize your life.</P>

      <Signup />
      <Heading>Already a user?</Heading>
      <Link to="/signin">
        <Button>Sign in!</Button>
      </Link>

      </Mainwrapper>
  );
};
