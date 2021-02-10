import React from 'react';
import { Mainwrapper, RegisterButton, BackButton, P } from '../Styling/Globalstyling';
import { useDispatch, useSelector } from 'react-redux';
import { logoutfetch } from '../reducers/fetch.js';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import backbutton from '../Assets/backbutton.svg';

const Logoutsection = styled.div`
margin: 15px;
padding: 15px; 
`;

export const Logout = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const accessToken = useSelector((store) => store.user.login.accessToken);

    const handleLogout=()=>{
        dispatch(logoutfetch(accessToken))
        history.push("/");
    }

    const handleGoBack = () => {
        history.push('/profile')
    }

    return (
        <Mainwrapper>
           <Logoutsection>  
        <P>Everything comes to an end... Click the button to logout!</P>
        <RegisterButton onClick={handleLogout}>Log out</RegisterButton>
            </Logoutsection>
            <BackButton src={backbutton} onClick={handleGoBack} alt="Go back button"></BackButton>
        </Mainwrapper>
    )
}