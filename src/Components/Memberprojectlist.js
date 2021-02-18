import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import moment from 'moment';

import { ProjectList, CardText, ProjectCard, Span, Italic, DustbinIMG, MoreinfoIMG } from '../Styling/Globalstyling.js';
import dustbin from '../Assets/dustbin.svg';
import layers from '../Assets/layers.svg';

export const Memberprojectlist = () => {
  const MEMBERLIST_URL = 'https://organizeit-app.herokuapp.com/member';
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

  const fetchProjects = () => {
    fetch(MEMBERLIST_URL,
      {
        method: "GET",
        headers: { Authorization: accessToken, "Content-Type": "application/json" }
      })
      .then((res) => res.json())
      .then((data) => {
        setProjects(data)
      })
  }
 
  const handleRemoveProject = (_id) => {

    fetch(`https://organizeit-app.herokuapp.com/delete/${_id}`,
      {
        method: 'DELETE',
      })
      .then((res) =>
        res.json()
      .then((json) => {
          console.log('Project deleted successfully')
          return json;
        })
        .finally(() => fetchProjects())
      )
  }

  return (
    <ProjectList>
      {projects && projects.map((project) => {

        return (
          <ProjectCard key={project._id}>
            <CardText>
              {project.projectname}
            </CardText>

            <Italic>
              Created by {project.userId.name}, {moment(project.createdAt).fromNow()}
            </Italic>

            <Span>
              <DustbinIMG onClick={() => handleRemoveProject(project._id)} src={dustbin} alt="Dustbin button to remove a project" />
              <MoreinfoIMG onClick={handleProjectClick} src={layers} alt="Image that takes the user to the specifik projectpage" />
            </Span>
          </ProjectCard>
        )
      })}
    </ProjectList>
  );
};


