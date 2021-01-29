import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Mainwrapper } from '../Styling/Globalstyling.js';

// import moment from 'moment'; --> This makes the "createdat" looks much prettier

export const Projectlist = () => {
    const PROJECTLIST_URL = 'http://localhost:8080/projectlist';
    const [projects, setProjects] = useState([]);
    const dispatch = useDispatch();
    const accessToken = useSelector((store) => store.user.login.accessToken);

    // const handleProjectlist = () => {

    //   fetch(PROJECTLIST_URL,
    //     {
    //       method: "GET",
    //       body: JSON.stringify({  }),
    //       headers: { Authorization: accessToken, "Content-Type": "application/json" }
    //     })
    //     .then((res) => {
    //       if (res.ok) {
    //         throw 'unable to show projectlist'
    //       }
    //       return res.json();
    //     })
    //     .catch((err) => {
    //       dispatch(user.actions.setErrorMessage({ errorMessage: err }));
    //   })
    // }
    useEffect(() => {
        fetch(PROJECTLIST_URL,
          { 
            method: "GET",
            headers: { Authorization: accessToken, "Content-Type": "application/json" }
          })
        .then((res) => {
            return res.json();
        })
        .then((data) => {

            // Sorts projects on when created 
            data.sort((a, b) => a.created > b.created);

            // Filter empty projects
            const filteredProjects = data.filter((projects) => projects.project);

            // Display only 20 lates projects (DO I NEED THIS?)
            const limitedProjects = filteredProjects.slice(0, 20);

            // Save the data to state
            setProjects(limitedProjects);
        });
    }, []);

return (
    <Mainwrapper>
      {projects.map((project) => {
        
        return (
          <div >
            <p>
              List of projects:
              {project.project}  
              {project.projectname}            
            </p>
            <p>projectlist</p>
          </div>
        );
      })}
    </Mainwrapper>
  );
};