import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { signupfetch } from '../reducers/fetch';
import { Mainwrapper, Button, H2, Form, Label, Input } from '../Styling/Globalstyling';

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
            <H2>Let's get started</H2>
            <Label>
                <Input
                required
                placeholder="Username"
                type="text"
                value={name}
                onChange={event => setName(event.target.value)} 
                />

            </Label>

            <Label>
                <Input
                required
                placeholder="Password"
                minLength="5"
                type="password"
                value={password}
                onChange={event => setPassword(event.target.value)} 
                />
            </Label>
            <Button type="submit" onClick={handleSignup}>Start here</Button>
            </Form>
        </Mainwrapper>
)
}