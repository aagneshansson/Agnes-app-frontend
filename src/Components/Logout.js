import React from 'react';
import { Mainwrapper, Button, P } from '../Styling/Globalstyling';
import { useDispatch, useSelector } from 'react-redux';
import { logoutfetch } from '../reducers/fetch.js';
import { useHistory } from 'react-router-dom';

export const Logout = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const accessToken = useSelector((store) => store.user.login.accessToken);

    const handleLogout=()=>{
        dispatch(logoutfetch(accessToken))
        history.push("/");
    }
    return (
        <Mainwrapper> 
        <P>Everything comes to an end... Click the button to logout!</P>
        <Button onClick={handleLogout}>Log out!</Button>
        </Mainwrapper>
    )
}