import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { signinfetch } from '../reducers/fetch';
import { Profile } from './Profile.js';

export const Signin = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const accessToken = useSelector((store) => store.user.login.accessToken);

    // Sign in user 
    const handleSignin = (event) => {
        event.preventDefault();
        dispatch(signinfetch(name, password))
    };

    if (!accessToken) {
    return (
            <div>
            <form>
            <h1>Sign in</h1>
            <label>
                <input
                required
                placeholder="Name"
                type="text"
                value={name}
                onChange={event => setName(event.target.value)} 
                
                />

            </label>

            <label>
                <input
                required
                minLength="5"
                type="password"
                value={password}
                onChange={event => setPassword(event.target.value)} 
                />
            </label>
            <button type="submit" onClick={handleSignin}>Sign in!</button>
            </form>
            </div>
    );
} else {
    return <Profile />
    
}

}