import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { Mainwrapper, Heading, Button, P } from '../Styling/Globalstyling';
import { Signup } from './Signup.js';
import { Profile } from './Profile.js';

import styled from 'styled-components';
import Lottie from 'lottie-react-web';
import animationData from 'lotties/firstpagelottie.json';


const LeftColumn = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center; 
margin: 2rem;

@media (max-width: 800px){
  margin: 1rem;
}
`;


const RightColumn = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin: 2rem;

@media (max-width: 800px){
  margin: 1rem;
}
`;

export const Homepage = () => {
  const accessToken = useSelector((store) => store.user.login.accessToken);
 // const error = useSelector((store) => store.user.statusMessage);

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
      <P>Already a user?</P>
      <Link to="/signin">
        <Button>Sign in</Button>
      </Link>
      </LeftColumn>
      <RightColumn>
      <Lottie
      options={{animationData}}
      height={550}
      width={550}
      />
      </RightColumn>
      </Mainwrapper>
  );
};
