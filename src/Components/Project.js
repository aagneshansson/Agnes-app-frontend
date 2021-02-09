import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
//import Autocomplete from 'react-autocomplete';
import { useDispatch, useSelector } from 'react-redux';
import { user } from '../reducers/user.js'
import { ProjectInput, Heading, RegisterButton, Button, Label } from '../Styling/Globalstyling';
import styled from 'styled-components'
const ADDPROJECT_URL = 'http://localhost:8080/project';
const GETUSERS_URL = 'http://localhost:8080/allusers';

// 1) Add the "GET all users" fetch in this file and update the state from member -> setMember

const AddProjectWrapper = styled.div`
display: flex;
flex-direction: column; 
align-items: center;
justify-content: center;
`;

const Form = styled.form`
display: flex
flex-direction: column; 
align-items: center; 
justify-content: center; 

    @media (min-width: 667px){
    }
`;


export const Addproject = () => {
    const dispatch = useDispatch();
    const [projectname, setProjectname] = useState("");
    const [members, setMembers] = useState([]); 
    const [chosenUser, setChosenUser] = useState();
    const history = useHistory();
    
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
     }, [accessToken])

    const handleGoBack = () => {
        history.push('/profile')
    }
    const handleAddproject = (event) => {
        history.push('/profile')

        const selectedMember = members.filter(
            (member) => member.name === chosenUser
          );


          if (chosenUser === undefined) {
            fetch(ADDPROJECT_URL, { method: 'POST', body: JSON.stringify({ projectname }), headers: { Authorization: accessToken, 'Content-Type': 'application/json',},
              
                  })} else {
                    fetch(ADDPROJECT_URL, {
                    method: 'POST',
                    body: JSON.stringify({
                      projectname,
                      memberId: selectedMember[0].memberId
                    }),
                    // Include the accessToken to get the protected endpoint
                    headers: {
                      Authorization: accessToken,
                      'Content-Type': 'application/json',
                    },
                    
                })
            // fetch(ADDPROJECT_URL, {
            //     method: 'POST',
            //     body: JSON.stringify({
            //       projectname,
            //       memberId: selectedMember[0].memberId,
            //     }),
            //     // Include the accessToken to get the protected endpoint
            //     headers: {
            //       Authorization: accessToken,
            //       'Content-Type': 'application/json',
            //     },
            //   })
            .then((res) => {
                if (!res.ok) {
                    throw new Error ('Unable to add project');
                }
                return res.json();
            })
            .then((json) => {
                dispatch(user.actions.setNewProject({ projectname: json.projectname }));
            })

            .catch((err) => {
                dispatch(user.actions.setErrorMessage({ errorMessage: err }));
            })
            // history.push('/profile')
    }
}

    return (
        <AddProjectWrapper>
            <Form>
                <Heading>Add project</Heading>
                <Label>
                    <ProjectInput
                    required
                    placeholder="Project name"
                    type="text"
                    value={projectname}
                    onChange={event => setProjectname(event.target.value)}
                    />
                </Label>

                {/* <Heading>Add member to your project</Heading> */}
                <Label>
                    <ProjectInput
                    type="text"
                    placeholder="Add collaborator"
                    value={chosenUser}
                    onChange={event => setChosenUser(event.target.value)}
                    />
                    {console.log(chosenUser)}
                </Label>
                <RegisterButton type="submit" onClick={handleAddproject}>Create project</RegisterButton>
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
                <Button 
                onClick={handleGoBack}>
                    Back
                </Button>
        </AddProjectWrapper>
    )
}