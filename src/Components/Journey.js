// import React, { useState } from 'react';
// import { useSelector } from 'react-redux';

// import { Signin } from './Signin.js';
// import { Signup } from './Signup.js';
// import { Profile } from './Profile.js'

// export const Journey = () => {
//   const accessToken = useSelector((store) => store.user.login.accessToken);
//   const [section, setSection] = useState("LogIn")
//   const error = useSelector((store) => store.user.statusMessage);

//   // If accessToken exist
//   if (accessToken) {
//     return <Profile />
//   };

//   // If user is logged out, show the signup / login form
//   return (
//     <div>
//       {section === "LogIn" && (
//         <>
//           <Signin />
//           <div>
//             <h2>Not having an account yet?</h2>
//             <button title="Sign up here" function={setSection} value="SignUp"></button>
//           </div>
//         </>
//       )}

//       {section === "SignUp" && (
//         <>
//           <Signup />
//           <div>
//             {error && <h4>{`${error}`}</h4>}
//             <h2>Already a user?</h2>
//             <button title="Log in" function={setSection} value="LogIn">Go to Login</button>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };