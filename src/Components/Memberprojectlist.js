import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { ProjectList, Heading, ProjectCard } from '../Styling/Globalstyling.js';

export const Memberprojectlist = () => {
  const MEMBERLIST_URL = 'http://localhost:8080/member';
  const [projects, setProjects] = useState([]);
  const history = useHistory();
  const accessToken = useSelector((store) => store.user.login.accessToken);

  const handleProjectClick = () => {
    history.push("/projectpage")
  };

  useEffect(() => {
    fetch(MEMBERLIST_URL,
      {
        method: "GET",
        headers: { Authorization: accessToken, "Content-Type": "application/json" }
      })
      .then((res) => res.json())
      .then((data) => {
        setProjects(data)
      })
  }, [accessToken])

  return (
    <ProjectList>
      {projects && projects.map((project) => {

        return (
          <ProjectCard key={project._id} onClick={handleProjectClick}>
            <Heading>
              {project.projectname}
              {console.log(project)}
              {project.userId.name}
            </Heading>
          </ProjectCard>
        )
      })}
    </ProjectList>
  );
};


