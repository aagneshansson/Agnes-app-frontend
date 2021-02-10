import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { signinfetch } from '../reducers/fetch';
import { Mainwrapper, RegisterButton, LightHeading, Form, Label, Input } from '../Styling/Globalstyling';
import { useHistory } from "react-router-dom";

export const Signin = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const accessToken = useSelector((store) => store.user.login.accessToken);
    // const error = useSelector((store) => store.user.statusMessage);

    // Sign in user 
    const handleSignin = (event) => {
        event.preventDefault();
        dispatch(signinfetch(name, password))

        if (accessToken) {
            history.push("/profile");
        }
    };

    return (
        <Mainwrapper>
            <Form>
                <LightHeading>Sign in</LightHeading>
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
                <RegisterButton
                    type="submit"
                    onClick={handleSignin}>
                    Sign in!
                </RegisterButton>
            </Form>
        </Mainwrapper>
    );
};