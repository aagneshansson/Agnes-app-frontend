import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Mainwrapper, Heading, SigninButton } from '../Styling/Globalstyling';
import { Signup } from './Signup.js';
import { Profile } from './Profile.js';

import styled from 'styled-components';
import Lottie from 'lottie-react-web';
import animationData from 'lotties/firstpagelottie.json';
import { StatusMessage } from 'Components/Statusmessage';

const LeftColumn = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center; 
margin: 1rem;
padding: 1.5rem;

  @media (max-width: 800px){
    margin: 1rem;
  }

  @media (max-width: 1366) {
    margin: 0;
  }
`;

const RightColumn = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin: 1rem;
padding: 1.5rem;

  @media (max-width: 800px){
    margin: 1rem;
    visibility: hidden;
  }

  @media (max-width: 1366px) {
    margin: 0;
  }
`;

export const Homepage = () => {
  const accessToken = useSelector((store) => store.user.login.accessToken);

  // If accessToken exist
  if (accessToken) {
    return <Profile />
  };

  return (
    <Mainwrapper>
      <LeftColumn>
        <Heading>
          Organizing your life is just a click away!
      </Heading>
        <Signup />
        <StatusMessage />
        <Heading>Already a user?</Heading>
        <Link to="/signin">
          <SigninButton>Sign in</SigninButton>
        </Link>
      </LeftColumn>

      <RightColumn>
        
        <Lottie
          options={{ animationData }}
          width={550}
          height={550}
        />
      </RightColumn>
    </Mainwrapper>
  );
};