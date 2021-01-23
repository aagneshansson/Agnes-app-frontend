import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addprojectfetch } from '../reducers/fetch';

export const Addproject = () => {
    const dispatch = useDispatch();
    const [projectname, setProjectname] = useState("");
    const accessToken = useSelector((store) => store.user.login.accessToken);

    const handleAddproject = (event) => {
        event.preventDefault();
        dispatch(addprojectfetch(projectname))
    };

    if (accessToken)
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