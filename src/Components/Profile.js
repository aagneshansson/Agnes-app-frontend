import React from 'react';
import { Addproject } from './Project.js';
import { Logout } from './Logout';
import { Projectlist } from './Projectlist.js'
import { Mainwrapper, Heading, P } from '../Styling/Globalstyling';
import { Memberprojectlist } from './Memberprojectlist.js';
import styled from 'styled-components';

const ProfileWrapper = styled.section`
display: flex;
`;

const Column = styled.div`
display: flex;
flex-direction: column;
`;

export const Profile = () => {
    return (
        <Mainwrapper>
            <ProfileWrapper>
            <Column>
                <Heading>Create a project</Heading>
                <P>Welcome to your site, let's create some projects!</P>
                    <Addproject />
            </Column>

            <Column>
                <Projectlist />
                <Memberprojectlist />
            </Column>
            
            </ProfileWrapper>
            <Logout />
        </Mainwrapper>
    )
}