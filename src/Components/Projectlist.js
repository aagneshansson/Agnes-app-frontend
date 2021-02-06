import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Mainwrapper, Heading, FileIMG, Italic } from '../Styling/Globalstyling.js'
import file from '../Assets/file.png'

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

      setProjects(data)
      })
  }, [])

  return (
    <Mainwrapper>

      <Heading>
        Your current projects
      </Heading>
      {projects && projects.map((project) => {

        return (
          <div >
            <Italic>Project: </Italic>
            <p>
              {project.projectname}
            </p>
            <FileIMG src={file} alt=""></FileIMG>
          </div>
        )
      })}
    </Mainwrapper>
  )
}


// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Mainwrapper, Heading, FileIMG, Italic } from '../Styling/Globalstyling.js';
// import { user } from '../reducers/user.js'
// import file from '../Assets/file.png';

// // import moment from 'moment'; --> This makes the "createdat" looks much prettier

// export const Projectlist = () => {
//     const PROJECTLIST_URL = 'http://localhost:8080/projectlist';
//     const [projects, setProjects] = useState([]);
//     const dispatch = useDispatch();
//     const accessToken = useSelector((store) => store.user.login.accessToken);

//     useEffect(() => {
//         fetch(PROJECTLIST_URL,
//           { 
//             method: "GET",
//             headers: { Authorization: accessToken, "Content-Type": "application/json" }
//           })
//         .then((res) => res.json())
//         .then((data) => {

//         setProjects(data)
//         });
//     }, []);

//     console.log("OM du ser detta är det tjohobra nyheter")

// return (
//     <Mainwrapper>

//       <Heading>
//         Your current projects
//       </Heading>
//       {projects && projects.map((project) => {
//           console.log(projects)
//         return (
//           <div>
//             <Italic>Project: </Italic>
//             <p>
// {project.projectname}            
//             </p>
//             <FileIMG src={file} alt=""></FileIMG>
//           </div>
//         );
//       })}
//     </Mainwrapper>
//   );
// };
