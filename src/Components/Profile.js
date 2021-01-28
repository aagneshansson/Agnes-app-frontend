import React from 'react';
import { Addproject } from './Project.js';
import { Logout } from './Logout';

export const Profile = () => {
    return (
        <div>
        <h1>Create a project</h1>
        <p>Welcome to your site, let's create some projects!</p>
        <Addproject />
        <Logout />
        </div>
    )
}