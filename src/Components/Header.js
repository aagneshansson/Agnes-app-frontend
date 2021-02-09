import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';

import { useSelector } from 'react-redux';

const Nav = styled.nav`
display: flex;
justify-content: flex-end;
position: relative;
background: #51198C; 
`;

const H2dark = styled.h2`
color: #51198C; 
text-decoration: none;
background-color: #E7D7F7;
padding: 15px;
border-radius: 8px;
margin-right: 15px;

`;

const H2light = styled.h2`
color: #E7D7F7;
padding: 10px;
border-radius: 12px;
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
                    <H2dark>Log out</H2dark>
                    </Link>
                </>
            )} 
            {!accessToken && (
                <>
            <Link to="/signin">
                <H2light>Sign in</H2light>
            </Link>
            
            <Link to="/signup">
                <H2dark>Sign up</H2dark>
            </Link>
            </>
              )}              
            
        </Nav>
        </div>
    )
}