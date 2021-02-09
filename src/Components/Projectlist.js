import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Mainwrapper, Heading, FileIMG, Projectwrapper } from '../Styling/Globalstyling.js';
import file from '../Assets/file.png';

// import moment from 'moment'; --> This makes the "createdat" looks much prettier

export const Projectlist = () => {
  const PROJECTLIST_URL = 'http://localhost:8080/projectlist'
  const [projects, setProjects] = useState([])
  const accessToken = useSelector((store) => store.user.login.accessToken)

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
    <Mainwrapper>
      <Heading>
        Your current projects
      </Heading>
      {projects && projects.map((project) => {

        return (
          <Projectwrapper key={project._id}>
            <Heading>
              {project.projectname}
              {/* {project.createdAt} */}
              
            </Heading>
           
            <span>
              <FileIMG src={file} alt=""></FileIMG>
              <FileIMG src={file} alt=""></FileIMG>
            </span>
          </Projectwrapper>
        )
      })}
    </Mainwrapper>
  )
}