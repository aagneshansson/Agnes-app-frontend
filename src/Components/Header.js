import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';

import { useSelector } from 'react-redux';

const Nav = styled.nav`
display: flex;
justify-content: space-evenly;
text-decoration: none; 
padding: 10px;
background-color: #E7D7F7;
`;

const H2 = styled.h2`
color: #51198C; 
text-decoration: none;
`;

export const Header = () => {
    const accessToken = useSelector((store) => store.user.login.accessToken);

    return (
        <div>
        <Nav>
            {accessToken && (
                <>
                    <Link to="/logout">
                    <H2>Log out</H2>
                    </Link>
                </>
            )} 
            {!accessToken && (
                <>
             <Link to="/">
                <H2>Home</H2>
            </Link>

            <Link to="/signin">
                <H2>Sign in</H2>
            </Link>
            
            <Link to="/signup">
                <H2>Sign up</H2>
            </Link>
            </>
              )}              
            
        </Nav>
        </div>
    )
}