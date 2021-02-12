import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { signupfetch } from '../reducers/fetch';
import { Mainwrapper, LightHeading, Form, Label, Input, RegisterButton } from '../Styling/Globalstyling';

export const Signup = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    // const error = useSelector((store) => store.user.statusMessage);

    //Sign up a user 
    const handleSignup = (event) => {
        event.preventDefault();
        dispatch(signupfetch(name, password))
    };

    return (
        <Mainwrapper>
            <Form>
                <LightHeading>Let's get started</LightHeading>
                <Label>
                    <Input
                        required
                        placeholder="Username *"
                        type="text"
                        value={name}
                        onChange={event => setName(event.target.value)}
                    />

                </Label>

                <Label>
                    <Input
                        required
                        placeholder="Password *"
                        minLength="5"
                        type="password"
                        value={password}
                        onChange={event => setPassword(event.target.value)}
                    />
                </Label>
                <RegisterButton type="submit" onClick={handleSignup}>Start here</RegisterButton>
            </Form>
        </Mainwrapper>
    );
};