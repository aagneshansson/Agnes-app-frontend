import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { user } from '../reducers/user.js'
import { Mainwrapper, Heading, Form, Button, Label, Input } from '../Styling/Globalstyling';

const ADDPROJECT_URL = 'http://localhost:8080/project';

export const Addproject = () => {
    const dispatch = useDispatch();
    const [projectname, setProjectname] = useState("");
    const accessToken = useSelector((store) => store.user.login.accessToken);

    const handleAddproject = (event) => {
        // event.preventDefault();
   
            fetch(ADDPROJECT_URL,
            {
                method: "POST",
                body: JSON.stringify({ projectname }),
                  // Include the accessToken to get the protected endpoint
                // headers: { Authorization: accessToken },
                headers: { Authorization: accessToken, 'Content-Type':'application/json' },
            })
            .then((res) => {
                if (!res.ok) {
                    throw 'Unable to add project';
                }
                return res.json();
            })
            .then((json) => {
                dispatch(user.actions.setNewProject({ projectname: json.projectname }));
            })
            .catch((err) => {
                dispatch(user.actions.setErrorMessage({ errorMessage: err }));
            })
    }
    // if (accessToken)
    return (
        <Mainwrapper>
            <Form>
                <Heading>Add project</Heading>
                <Label>
                    <Input
                    required
                    placeholder="Project name"
                    type="text"
                    value={projectname}
                    onChange={event => setProjectname(event.target.value)}
                    />
                    <Button type="submit" onClick={handleAddproject}>Add project!</Button>
                </Label>
            </Form>
        </Mainwrapper>
    )
}