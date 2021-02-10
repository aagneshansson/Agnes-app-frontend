import React from 'react';
import { Projectlist } from './Projectlist.js'
import { MainProfile, Heading, H2 } from '../Styling/Globalstyling';
import { Memberprojectlist } from './Memberprojectlist.js';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const WelcomeColumn = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 1rem;

@media (max-width: 800px){
text-align: center;
}
`;

const ProjectColumn = styled.div`
display: flex;
flex-flow: row wrap;
justify-content: center;
align-items: center;

@media (max-width: 800px){

}
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
width: 75%;
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
            <WelcomeColumn>
                <H2>Welcome to your site, let's create some projects!</H2>
            <AddProjectButton 
                onClick={Addprojects}>Start to create a project
                </AddProjectButton>
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