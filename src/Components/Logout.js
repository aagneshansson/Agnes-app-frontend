import React from 'react';
import { Mainwrapper } from '../Styling/Globalstyling';
import { useDispatch, useSelector } from 'react-redux';
import { logoutfetch } from '../reducers/fetch.js';

export const Logout = () => {
    const dispatch = useDispatch();
    const accessToken = useSelector((store) => store.user.login.accessToken);

    const handleLogout=()=>{
        dispatch(logoutfetch(accessToken))
    }
    return (
        <Mainwrapper> 
        <p>Everything comes to an end... Click the button to logout!</p>
        <button onClick={handleLogout}>Log out!</button>
        </Mainwrapper>
    )
}