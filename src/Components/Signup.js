import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { signupfetch } from '../reducers/fetch';
import {Mainwrapper} from '../Styling/Globalstyling';

export const Signup = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")

    //Sign up a user 
    const handleSignup = (event) => {
        event.preventDefault();
        dispatch(signupfetch(name, password))
        console.log("hej vad händer")
    };

    return (
        <Mainwrapper>
            <form>
            <h1>Sign up</h1>
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
            <button type="submit" onClick={handleSignup}>Sign Up!</button>
            </form>
        </Mainwrapper>
)
}