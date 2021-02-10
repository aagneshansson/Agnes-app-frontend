import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
background-color: #E7D7F7;
display: flex;
justify-content: space-evenly;
text-decoration: none; 
padding: 25px; 
`;

const H2 = styled.h2`
text-decoration: none;
color: #51198C
`;

export const Footer = () => {

    return (
        <>
            <Nav>
                <Link to="/contact">
                    <H2>Contact</H2>
                </Link>

                <Link to="/about">
                    <H2>About</H2>
                </Link>
            </Nav>
        </>
    );
};