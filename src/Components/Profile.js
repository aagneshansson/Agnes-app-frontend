import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import { Projectlist } from './Projectlist.js';
import { Memberprojectlist } from './Memberprojectlist.js';
import { MainProfile, Heading, H2 } from '../Styling/Globalstyling';

const WelcomeColumn = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 1rem;
padding: 1rem;

    @media (max-width: 800px){
    text-align: center;
    }
`;

const OneColumn = styled.div`
margin: 1rem;
display: flex;
justify-content: center; 
`;

const ProjectColumn = styled.div`
display: flex;
flex-direction: column;
// flex-flow: row wrap;
justify-content: flex-start;
align-items: center;
width: 40%;

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
    };

    return (
        <MainProfile>
            <WelcomeColumn>
                <H2>Welcome to your site, let's create some projects!</H2>
                <AddProjectButton
                    onClick={Addprojects}>Create a new project
                </AddProjectButton>
            </WelcomeColumn>

            <OneColumn>
                {/* Column left */}
                <ProjectColumn>
                    <Heading>
                        Personal projects
                        </Heading>
                    <Projectlist />
                </ProjectColumn>

                {/* Column right */}
                <ProjectColumn>
                    <Heading>
                        Collaborative projects
                    </Heading>
                    <Memberprojectlist />
                </ProjectColumn>
            </OneColumn>
        </MainProfile>
    );
};