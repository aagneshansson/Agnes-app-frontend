import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Mainwrapper, Heading, Projectwrapper } from '../Styling/Globalstyling.js'

export const Memberprojectlist = () => {
  const MEMBERLIST_URL = 'http://localhost:8080/member'
  const [projects, setProjects] = useState([])
  const accessToken = useSelector((store) => store.user.login.accessToken)

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
    <Mainwrapper>

      <Heading>
        Projects you are a member of
      </Heading>
      {projects && projects.map((project) => {

        return (
          <Projectwrapper key={project._id}>
            <Heading>
              {project.projectname}
            </Heading>
          </Projectwrapper>
        )
      })}
    </Mainwrapper>
  )
}