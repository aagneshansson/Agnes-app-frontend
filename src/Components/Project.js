import React, { useEffect, useState } from 'react'
import Autocomplete from 'react-autocomplete';
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
    const [members, setMembers] = useState([]); 
    //Removed [] from state -> previous const [chosenUser, setChosenUser] = useState([]);
    const [chosenUser, setChosenUser] = useState();

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
                const members = data.map(member => {
                    return {
                        name: member.name,
                        memberId: member._id
                    }
                })
            setMembers(members)
            console.log(members)

            })
     }, [])


    const handleAddproject = (event) => {

        const selectedMember = members.filter(
            (member) => member.name === chosenUser
          );
    //event.preventDefault();
    //    members.filter({name: chosenMember})

    //MY FETCH THAT DID NOT WORK 
    // fetch(ADDPROJECT_URL,
    //         {
    //             method: "POST",
    //             body: JSON.stringify({ projectname, chosenUser }),
    //               // Include the accessToken to get the protected endpoint
    //             headers: { Authorization: accessToken, 'Content-Type':'application/json' },
    //         })

            //KARINS NEW FETCH 
            fetch(ADDPROJECT_URL, {
                method: 'POST',
                body: JSON.stringify({
                  projectname,
                  memberId: selectedMember[0].memberId,
                }),
                // Include the accessToken to get the protected endpoint
                headers: {
                  Authorization: accessToken,
                  'Content-Type': 'application/json',
                },
              })
            // KARINS FETCH WHICH WORK 
            // fetch(ADDPROJECT_URL, {
            //     method: 'POST',
            //     body: JSON.stringify({ projectname, memberId: chosenUser }),
            //     // Include the accessToken to get the protected endpoint
            //     headers: {
            //       Authorization: accessToken,
            //       'Content-Type': 'application/json',
            //     },
            //   })
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
                </Label>

                <Heading>Add member to your project</Heading>

                    <Label>
                    <Input
                    type="text"
                    placeholder="Who would you like to collaborate with?"
                    value={chosenUser}
                    onChange={event => setChosenUser(event.target.value)}
                    />
                    {console.log(chosenUser)}
                    <Button type="submit" onClick={handleAddproject}>Press this button to add projectname+member</Button>
                    </Label>

                {/* <Autocomplete 
                
                getItemValue={(item) => item.label}
                items={members.map(member => <p>{member.name}</p>)}

                renderItem={(item, isHighlighted) =>
                    <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
                      {item.label}
                    </div>
                  }
                  value={members}
                  onChange={(e) => setMembers(e.target.value)}
                  /> */}

            </Form>
        </Mainwrapper>
    )
}