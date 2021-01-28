import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { user } from '../reducers/user.js'

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
        <div>
            <form>
                <h1>Add project</h1>
                <label>
                    <input
                    required
                    placeholder="Project name"
                    type="text"
                    value={projectname}
                    onChange={event => setProjectname(event.target.value)}
                    />
                    <button type="submit" onClick={handleAddproject}>Add project!</button>
                </label>
            </form>
        </div>
    )
}