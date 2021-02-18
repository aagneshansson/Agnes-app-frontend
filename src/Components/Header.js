import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import logo from '../Assets/logo.png';

const Nav = styled.nav`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
position: relative;
background: #51198C;
padding: 8px;  

@media (max-width: 800px){
    padding: 3px;
}
`;

const NavButtons = styled.div`
display: flex;
margin-right: 10px;
`;

export const LogoIMG = styled.img`
width: 65px;
height: 100%;
margin-left: 10px;

@media (max-width: 800px){
  
}
`;

const H2dark = styled.h2`
color: #51198C; 
text-decoration: none;
background-color: #E7D7F7;
padding: 10px;
border-radius: 8px;

@media (max-width: 800px){
    padding: 3px;
}
`;

const H2light = styled.h2`
color: #E7D7F7;
padding: 10px;
border-radius: 8px;
text-decoration: none;

@media (max-width: 800px){
    padding: 3px;
}
`;

export const Header = () => {
    const accessToken = useSelector((store) => store.user.login.accessToken);

    return (
        <Nav>
            <LogoIMG src={logo} alt="OrganizeIt logo"></LogoIMG>

            <NavButtons>
                {accessToken && (
                    <>
                        <Link to="/logout" style={{ textDecoration: 'none' }}>
                            <H2dark>Log out</H2dark>
                        </Link>
                    </>
                )}
                {!accessToken && (
                    <>
                        <Link to="/signin" style={{ textDecoration: 'none' }}>
                            <H2light>Sign in</H2light>
                        </Link>

                        <Link to="/signup" style={{ textDecoration: 'none' }}>
                            <H2dark>Sign up</H2dark>
                        </Link>
                    </>
                )}
            </NavButtons>
        </Nav>
    );
};