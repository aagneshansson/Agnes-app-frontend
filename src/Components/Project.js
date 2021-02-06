import React, { useEffect, useState } from 'react'
//import Autocomplete from 'react-autocomplete';
import { useDispatch, useSelector } from 'react-redux';
import { user } from '../reducers/user.js'
import { Mainwrapper, Heading, Form, Button, Label, Input } from '../Styling/Globalstyling';
const ADDPROJECT_URL = 'http://localhost:8080/project';
const GETUSERS_URL = 'http://localhost:8080/allusers';

// 1) Add the "GET all users" fetch in this file and update the state from member -> setMember

export const Addproject = () => {
    const dispatch = useDispatch();
    const [projectname, setProjectname] = useState("");

    //Correct? 
    const [members, setMembers] = useState([]); 

    const accessToken = useSelector((store) => store.user.login.accessToken);

    //useEffect to fetch all members in a GET request from backend to get alluserlist)
     useEffect(() => {
         fetch(GETUSERS_URL,
            {
                method: "GET",
                headers: { Authorization: accessToken, "Content-Type": "application/json" }
            })
            .then((res) => res.json())
            .then((data) => {
                // const member = data.map(member => {
                //     return {
                //         name: member.name,
                //     }
                // })
            setMembers(data)
            console.log(data)

            })
     }, [])


    const handleAddproject = (event) => {
        //event.preventDefault();
   
            fetch(ADDPROJECT_URL,
            {
                method: "POST",
                body: JSON.stringify({ projectname, members }),
                  // Include the accessToken to get the protected endpoint
                headers: { Authorization: accessToken, 'Content-Type':'application/json' },
            })
            .then((res) => {
                if (!res.ok) {
                    throw 'Unable to add project';
                }
                return res.json();
            })
            .then((json) => {
                dispatch(user.actions.setNewProject({ projectname: json.projectname, members: json.name }));
            })
            .catch((err) => {
                dispatch(user.actions.setErrorMessage({ errorMessage: err }));
            })
    }

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
                    <Button type="submit" onClick={handleAddproject}>Dont press this button</Button>
                    {/* Should I comment out this button? */}
                </Label>

                <Heading>Add member to your project</Heading>

                {members.map(member => <p>{member.name}</p>)}
                    <Label>
                    <Input
                    type="text"
                    value={members}
                    onChange={event => setMembers(event.target.value)}
                    />
                    <Button type="submit" onClick={handleAddproject}>Press this button to add projectname+member</Button>
                    </Label>



            </Form>
        </Mainwrapper>
    )
}