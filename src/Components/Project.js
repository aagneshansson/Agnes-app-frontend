import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
// import Autocomplete from 'react-autocomplete';

import { user } from '../reducers/user.js';
import backbutton from '../Assets/backbutton.svg';
import { ProjectInput, Heading, RegisterButton, Label, BackButton, ChildPageWrapper } from '../Styling/Globalstyling';

const ADDPROJECT_URL = 'http://localhost:8080/project';
const GETUSERS_URL = 'http://localhost:8080/allusers';

const AddProjectForm = styled.form`
display: flex
flex-direction: column; 
align-items: center; 
justify-content: center; 
text-align: center;
margin: 1rem;

    @media (min-width: 667px) {
    }
`;


export const Addproject = () => {
    const dispatch = useDispatch();
    const [projectname, setProjectname] = useState("");
    const [members, setMembers] = useState([]); 
    const [chosenUser, setChosenUser] = useState();
    const history = useHistory();
    
    const accessToken = useSelector((store) => store.user.login.accessToken);

    // Fetch all members in a GET request from backend update the state with a full list of all user objects 
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
    }
}

    return (
        <ChildPageWrapper>
            <AddProjectForm>
                <Label>
                <Heading>Add a project</Heading>
                    <ProjectInput
                    required
                    placeholder="Project name"
                    type="text"
                    value={projectname}
                    onChange={event => setProjectname(event.target.value)}
                    />
                </Label>

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
            </AddProjectForm>
                <BackButton src={backbutton} onClick={handleGoBack} alt="Go back button"></BackButton>
        </ChildPageWrapper>
    )
}

    /* <Autocomplete 
                
                getItemValue={(item) => item.label}
                items={members.map(member => <p>{member.name}</p>)}

                renderItem={(item, isHighlighted) =>
                    <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
                      {item.label}
                    </div>
                  }
                  value={members}
                  onChange={(e) => setMembers(e.target.value)}
                  /> */