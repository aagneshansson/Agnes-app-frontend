import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { CardText, FileIMG, ProjectCard, ProjectList } from '../Styling/Globalstyling.js';
import file from '../Assets/file.png';
import { useHistory } from 'react-router-dom';

// import moment from 'moment'; --> This makes the "createdat" looks much prettier

export const Projectlist = () => {
  const PROJECTLIST_URL = 'http://localhost:8080/projectlist'
  const [projects, setProjects] = useState([])
  const history = useHistory();
  const accessToken = useSelector((store) => store.user.login.accessToken)

  const handleProjectClick = () => {
    history.push("/projectpage")
  }

  useEffect(() => {
    fetch(PROJECTLIST_URL,
      {
        method: "GET",
        headers: { Authorization: accessToken, "Content-Type": "application/json" }
      })
      .then((res) => res.json())
      .then((data) => {
          console.log(data)
      setProjects(data)
      })
  }, [accessToken])

  return (
   <ProjectList>
      {projects && projects.map((project) => {

        return (
          <ProjectCard key={project._id} onClick={handleProjectClick}>
            <CardText>
              {project.projectname}
              {/* {project.createdAt} */}
              
            </CardText>
           
            <span>
              <FileIMG src={file} alt=""></FileIMG>
              <FileIMG src={file} alt=""></FileIMG>
            </span>
          </ProjectCard>
        )
      })}
    </ProjectList>
  )
}