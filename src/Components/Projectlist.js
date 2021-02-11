import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { CardText, DustbinIMG, MoreinfoIMG, ProjectCard, ProjectList, Span, Italic } from '../Styling/Globalstyling.js';
import dustbin from '../Assets/dustbin.svg';
import layers from '../Assets/layers.svg';

import moment from 'moment';

export const Projectlist = () => {
  const PROJECTLIST_URL = 'https://organizeit-app.herokuapp.com/projectlist';
  // const REMOVEPROJECT_URL = `https://organizeit-app.herokuapp.com/delete/${project._id}`;
  const [projects, setProjects] = useState([]);
  const history = useHistory();
  const accessToken = useSelector((store) => store.user.login.accessToken);

  const handleProjectClick = () => {
    history.push("/projectpage")
  };

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
    fetchProjects();
  }, [accessToken])

  const fetchProjects = () => {
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
              {moment(project.createdAt).fromNow()}
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

// import React, { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';
// import { useHistory } from 'react-router-dom';

// import { Ca0rdText, FileIMG, ProjectCard, ProjectList } from '../Styling/Globalstyling.js';
// import file from '../Assets/file.png';
// // import moment from 'moment'; --> This makes the "createdat" looks much prettier

// export const Projectlist = () => {
//   const PROJECTLIST_URL = 'https://organizeit-app.herokuapp.com/projectlist';
//   //TEST 
//   const GETUSERS_URL = 'https://organizeit-app.herokuapp.com/allusers';
//   const [projects, setProjects] = useState([]);
//   const [members, setMembers] = useState([]); 
//   const [projectmember, setProjectmember] = useState();
//   const history = useHistory();
//   const accessToken = useSelector((store) => store.user.login.accessToken);

//   const handleProjectClick = () => {
//     history.push("/projectpage")
//   };

//   // Fetch all members in a GET request from backend update the state with a full list of all user objects 
//   useEffect(() => {
//     fetch(GETUSERS_URL,
//        {
//            method: "GET",
//            headers: { Authorization: accessToken, "Content-Type": "application/json" }
//        })
//        .then((res) => res.json())
//        .then((data) => {
//            const members = data.map(member => {
//                return {
//                    name: member.name,
//                    memberId: member._id
//                }
//            })
//        setMembers(members)
//        console.log(members)
//        })
// }, [accessToken])

//   //GET PROJECTLIST
//   useEffect(() => {
//     fetch(PROJECTLIST_URL,
//       {
//         method: "GET",
//         headers: { Authorization: accessToken, "Content-Type": "application/json" }
//       })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data)
//         setProjects(data)
//       })
//   }, [accessToken])


//   return (
//     <ProjectList>

//       {projects && projects.map((project) => {


//         return (
//           <ProjectCard key={project._id} onClick={handleProjectClick}>
//             <CardText>
//               {project.projectname}
//               {/* {project.memberId} */}
//               {console.log(members[0].memberId)}
//               {project.memberId === members[0].name}

//               {/* {project.createdAt} */}
//             </CardText>

//             <span>
//               <FileIMG src={file} alt=""></FileIMG>
//               <FileIMG src={file} alt=""></FileIMG>
//             </span>
//           </ProjectCard>
//         )
//       })}
//     </ProjectList>
//   );
// };








// OLD SHIT 

// import React, { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';
// import { useHistory } from 'react-router-dom';

// import { CardText, DustbinIMG, ProjectCard, ProjectList, Span } from '../Styling/Globalstyling.js';
// import dustbin from '../Assets/dustbin.svg';

// // import moment from 'moment'; --> This makes the "createdat" looks much prettier

// export const Projectlist = () => {
//   const PROJECTLIST_URL = 'https://organizeit-app.herokuapp.com/projectlist';
//   const [projects, setProjects] = useState([]);
//   const history = useHistory();
//   const accessToken = useSelector((store) => store.user.login.accessToken);

//   const REMOVEPROJECT_URL = 'https://organizeit-app.herokuapp.com/delete/{_id}';
//   const handleProjectClick = () => {
//     history.push("/projectpage")
//   };

//   useEffect(() => {
//     fetch(PROJECTLIST_URL,
//       {
//         method: "GET",
//         headers: { Authorization: accessToken, "Content-Type": "application/json" }
//       })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data)
//         setProjects(data)
//       })
//   }, [accessToken])

//   const handleRemoveProject = () => {

//     fetch(REMOVEPROJECT_URL, {
//       method: 'DELETE',
//       body: JSON.stringify({

//       }),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     })
//     .then((res) => {
//       if (res.ok) {
//         return res.json();
//       }
//       throw new Error("Could not delete project");
//     })
//     .then((data) => {
//       console.log(data)
//       setProjects(data)
//     })
// };

//   return (
//     <ProjectList>
//       {projects && projects.map((project) => {

//         return (
//           <ProjectCard key={project._id}>
//             <CardText>
//               {project.projectname}
//               {/* {project.createdAt} */}

//             </CardText>

//             <Span>
//               <DustbinIMG src={dustbin} alt="" />
//             </Span>
//           </ProjectCard>
//         )
//       })}
//     </ProjectList>
//   );
// };


// // import React, { useEffect, useState } from 'react';
// // import { useSelector } from 'react-redux';
// // import { useHistory } from 'react-router-dom';

// // import { Ca0rdText, FileIMG, ProjectCard, ProjectList } from '../Styling/Globalstyling.js';
// // import file from '../Assets/file.png';
// // // import moment from 'moment'; --> This makes the "createdat" looks much prettier

// // export const Projectlist = () => {
// //   const PROJECTLIST_URL = 'https://organizeit-app.herokuapp.com/projectlist';
// //   //TEST 
// //   const GETUSERS_URL = 'https://organizeit-app.herokuapp.com/allusers';
// //   const [projects, setProjects] = useState([]);
// //   const [members, setMembers] = useState([]); 
// //   const [projectmember, setProjectmember] = useState();
// //   const history = useHistory();
// //   const accessToken = useSelector((store) => store.user.login.accessToken);

// //   const handleProjectClick = () => {
// //     history.push("/projectpage")
// //   };

// //   // Fetch all members in a GET request from backend update the state with a full list of all user objects 
// //   useEffect(() => {
// //     fetch(GETUSERS_URL,
// //        {
// //            method: "GET",
// //            headers: { Authorization: accessToken, "Content-Type": "application/json" }
// //        })
// //        .then((res) => res.json())
// //        .then((data) => {
// //            const members = data.map(member => {
// //                return {
// //                    name: member.name,
// //                    memberId: member._id
// //                }
// //            })
// //        setMembers(members)
// //        console.log(members)
// //        })
// // }, [accessToken])

// //   //GET PROJECTLIST
// //   useEffect(() => {
// //     fetch(PROJECTLIST_URL,
// //       {
// //         method: "GET",
// //         headers: { Authorization: accessToken, "Content-Type": "application/json" }
// //       })
// //       .then((res) => res.json())
// //       .then((data) => {
// //         console.log(data)
// //         setProjects(data)
// //       })
// //   }, [accessToken])


// //   return (
// //     <ProjectList>

// //       {projects && projects.map((project) => {


// //         return (
// //           <ProjectCard key={project._id} onClick={handleProjectClick}>
// //             <CardText>
// //               {project.projectname}
// //               {/* {project.memberId} */}
// //               {console.log(members[0].memberId)}
// //               {project.memberId === members[0].name}

// //               {/* {project.createdAt} */}
// //             </CardText>

// //             <span>
// //               <FileIMG src={file} alt=""></FileIMG>
// //               <FileIMG src={file} alt=""></FileIMG>
// //             </span>
// //           </ProjectCard>
// //         )
// //       })}
// //     </ProjectList>
// //   );
// // };