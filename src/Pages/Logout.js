import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import { logoutfetch } from '../reducers/fetch.js';
import backbutton from '../Assets/backbutton.svg';
import { SignoutWrapper, RegisterButton, BackButton, P } from '../Styling/Globalstyling';

const Logoutsection = styled.div`
margin: 15px;
padding: 15px; 
`;

export const Logout = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const accessToken = useSelector((store) => store.user.login.accessToken);

    const handleLogout = () => {
        dispatch(logoutfetch(accessToken))
        history.push("/");
    };

    const handleGoBack = () => {
        history.push('/profile')
    };

    return (
        <SignoutWrapper>
            <Logoutsection>
                <P>It was a pleasure, welcome back!</P>
                <RegisterButton
                    onClick={handleLogout}>
                    Log out
                </RegisterButton>
            </Logoutsection>
            <BackButton
                src={backbutton}
                onClick={handleGoBack}
                alt="Go back button" 
                />
        </SignoutWrapper>
    );
};