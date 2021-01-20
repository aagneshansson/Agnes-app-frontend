import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../reducers/fetch';


export const Signup = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [password, setPassword ] = useState("");

    //Sign up a user 
    const handleSignup = (event) => {
        event.preventDefault();
        dispatch(signup(name, password))
    };

    return (
        <div>
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
            <button type="submit" onClick={handleSignup}>Sign up!</button>
            </form>
        </div>
);
};