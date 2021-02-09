import React from 'react';
import { Addproject } from './Project.js';
import { Logout } from './Logout';
import { Projectlist } from './Projectlist.js'
import { MainProfile, Heading, P } from '../Styling/Globalstyling';
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

export const Profile = () => {
    const history = useHistory();

    const Addprojects = () => {
        history.push('/project')
    }
    return (
        <MainProfile>
            {/* <ProfileWrapper> */}
            <WelcomeColumn>
                <Heading>Create a project</Heading>
                <P>Welcome to your site, let's create some projects!</P>
                    <Addproject />

            <button onClick={Addprojects}>Start to create a project</button>
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