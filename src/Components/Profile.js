import React from 'react';
import { Addproject } from './Project.js';
import { Logout } from './Logout';
import { Projectlist } from './Projectlist.js'
import { Mainwrapper, Heading } from '../Styling/Globalstyling';
export const Profile = () => {
    return (
        <Mainwrapper>
        <Heading>Create a project</Heading>
        <p>Welcome to your site, let's create some projects!</p>
        <Addproject />
        <Projectlist />
        <Logout />
        </Mainwrapper>
    )
}