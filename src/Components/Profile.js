import React from 'react';
import { Addproject } from './Project.js';
import { Logout } from './Logout';
import { Projectlist } from './Projectlist.js'
import { MainProfile, Heading, H2 } from '../Styling/Globalstyling';
import { Memberprojectlist } from './Memberprojectlist.js';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

// const ProfileWrapper = styled.section`
// display: flex;
// `;

const WelcomeColumn = styled.div`
display: flex;
flex-direction: column;
width: 40%;
`;

const ProjectColumn = styled.div`
display: flex;
flex-flow: row wrap;
`;

const AddProjectButton = styled.button`
border-radius: 8px;
background: #51198C;
color: #E7D7F7;
cursor: pointer;
outline:none;
border:none;
margin: 1rem;
padding: 1rem;
width: 89%;
font-weight: bolder;
font-size: 1.6rem;

box-shadow: 0 2px 2px #e2e4e6;


&:hover {
  background: #D1B3F2;
  transform: scale(1.1); 
  transition: background 0.6s ease;
  box-shadow: none;
}
`;

export const Profile = () => {
    const history = useHistory();

    const Addprojects = () => {
        history.push('/project')
    }
    return (
        <MainProfile>
            {/* <ProfileWrapper> */}
            <WelcomeColumn>
                <H2>Welcome to your site, let's create some projects!</H2>
                    {/* <Addproject /> */}
            <AddProjectButton onClick={Addprojects}>Start to create a project</AddProjectButton>
            </WelcomeColumn>
            <Heading>Personal projects</Heading>
            <ProjectColumn>
                <Projectlist />
            </ProjectColumn>

            <Heading>Collaborations</Heading>
            <ProjectColumn>
            <Memberprojectlist />
            </ProjectColumn>

            
            {/* </ProfileWrapper> */}
        </MainProfile>
    )
}