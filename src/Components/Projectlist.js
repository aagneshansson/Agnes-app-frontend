import React, { useEffect, useState } from 'react';
import { MainWrapper } from '../Styling/Globalstyling.js';

// import moment from 'moment'; --> This makes the "createdat" looks much prettier

export const Projectlist = () => {
    const PROJECTLIST_URL = '';
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch(PROJECTLIST_URL)
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
    <MainWrapper>
      {projects.map((project) => {

        return (
          <div key={project._id}>
            <p>
              {message.message}              
            </p>
          </div>
        );
      })}
    </MainWrapper>
  );
};