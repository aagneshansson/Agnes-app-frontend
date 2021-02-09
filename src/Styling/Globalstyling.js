import styled from 'styled-components'

export const Mainwrapper = styled.section`
background: #51198C; 
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
margin: -1px;
`;

export const MainProfile = styled.section`
background: #E7D7F7; 
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

export const Label = styled.label`
display: flex; 
`;
export const Form = styled.form`
display: flex
flex-direction: column; 
margin: 15px;
`;

export const Heading = styled.h1`
color: #AC6EED;
`;

export const H2 = styled.h2`
color: #AC6EED;
`;

export const P = styled.p`
color: #E7D7F7;
`;

// export const Input = styled.input`
// border: none;
// border-radius: 25px;
// display: flex
// flex-direction: column; 
// align-items: center;
// width: 100px;
// margin: 5px;
// padding: 8px;
// border-radius: 25px;

//     @media (min-width: 667px){
//         width: 350px;
//     }
// `;

export const Input = styled.input`
background: #edeff0;
border: 1px solid #cdd2dA;
padding: 1rem;
width: 100%;
font-size: 1rem;
border-radius: 4px;
    @media (min-width: 667px){
    
    }
`;

export const Button = styled.button`
border-radius: 12px;
border: none;
cursor: pointer;
`;

export const RegisterButton = styled.button`
border-radius: 3px;
background: #e2e4e6;
color: #51198C;
cursor: pointer;
outline:none;
border:none;
padding:1rem;
width:100%;
font-weight: bolder;
font-size: 1.6rem;

box-shadow: 0 3px 5px rgba(0,0,0,0.3);
transition: background 0.6s ease;

&:hover {
  background: #E7D7F7;
}
`;

export const FileIMG = styled.img`
max-width: 15px;`;

export const Projectwrapper = styled.li`
border: 1px solid lightgrey;
border-radius: 6px;
width: 25%;
height: 100%;
word-wrap: wrap;
padding: 0.8rem;
margin: 0.3rem;
display: flex;
flex-direction: column;
pointer: cursor; 
background: #51198C;
box-shadow: 0 1px 0 grey;
transition: background 0.3s ease;

&:hover{
  background: darken(#E7D7F7,15%);
  box-shadow: 2px 4px 2px grey;
`;