import React from 'react';
import { Addproject } from './Project.js';
import { Logout } from './Logout';
import { Projectlist } from './Projectlist.js'
import { Mainwrapper, Heading } from '../Styling/Globalstyling';
import { Memberprojectlist } from './Memberprojectlist.js';

export const Profile = () => {
    return (
        <Mainwrapper>
            <Heading>Create a project</Heading>
            <p>Welcome to your site, let's create some projects!</p>
            <Addproject />
            <Projectlist />
            <Memberprojectlist />
            <Logout />
        </Mainwrapper>
    )
}