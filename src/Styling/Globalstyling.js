import styled from 'styled-components'

export const Mainwrapper = styled.section`
background: #51198C; 
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
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
flex-direction: column;
`;

export const Form = styled.form`
display: flex;
text-align: center;
flex-direction: column; 
align-items: center; 
justify-content: center; 

    @media (min-width: 667px){
    }
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
//     @media (min-width: 667px){
//         width: 350px;
//     }
// `;

export const ProjectInput = styled.input`
background: #e7d7f7;
border: 1px solid #D1B3F2;
padding: 1rem;
margin: 1rem;
width: 80%;
font-size: 1rem;
border-radius: 4px;

&:hover {

}
    @media (min-width: 667px){
    
    }
`;

export const Input = styled.input`
background: #e7d7f7;
border: 1px solid #D1B3F2;
padding: 1rem;
margin: 1rem;
width: 100%;
font-size: 1rem;
border-radius: 4px;

&:hover {

}
    @media (min-width: 667px){
    
    }
`;

export const Button = styled.button`
border-radius: 12px;
cursor: pointer;
`;

export const RegisterButton = styled.button`
border-radius: 8px;
background: #E7D7F7;;
color: #51198C;
cursor: pointer;
outline:none;
border:none;
margin: 1rem;
padding: 1rem;
width: 89%;
font-weight: bolder;
font-size: 1.6rem;

box-shadow: 0 2px 2px #e2e4e6;


&:hover {
  background: #D1B3F2;
  transform: scale(1.1); 
  transition: background 0.6s ease;
  box-shadow: none;
}

@media (min-width: 667px){
}
`;

export const FileIMG = styled.img`
max-width: 15px;`;

// export const LogoIMG = styled.img`
// width: 65px;
// margin-left: 10px;
// align-self: flex-start; 
// `;

export const Projectwrapper = styled.li`
border: 1px solid lightgrey;
border-radius: 6px;
width: 25%;
height: 100%;
word-wrap: wrap;
padding: 1rem;
margin: 1rem;
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