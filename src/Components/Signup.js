import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { signupfetch } from '../reducers/fetch';
import { Mainwrapper, Button, Heading, Form, Label, Input } from '../Styling/Globalstyling';

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
            <Form>
            <Heading>Sign up</Heading>
            <Label>
                <Input
                required
                placeholder="Name"
                type="text"
                value={name}
                onChange={event => setName(event.target.value)} 
                />

            </Label>

            <Label>
                <Input
                required
                minLength="5"
                type="password"
                value={password}
                onChange={event => setPassword(event.target.value)} 
                />
            </Label>
            <Button type="submit" onClick={handleSignup}>Sign Up!</Button>
            </Form>
        </Mainwrapper>
)
}