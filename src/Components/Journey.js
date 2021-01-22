// import React, { useState } from 'react';
// import { useSelector } from 'react-redux';

// export const Journey = () => { 
//     const accessToken = useSelector((store) => store.user.login.accessToken);
//     const error = useSelector((store) => store.user.statusMessage);
//     const [section, setSection] = useState("LogIn");

//     if (accessToken) {
//         return <Profile />
//     }

//     return (
//         <>
//         {section === "SignUp" && (
//             <div>
//                 {error && <p>{`${error}`}</p>}
//             </div>
//         )}
//         </>
//     )
// }