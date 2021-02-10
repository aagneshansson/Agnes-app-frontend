import styled from 'styled-components';

export const Mainwrapper = styled.section`
background: #51198C; 
display: flex;
align-items: center;
justify-content: center;
text-align: center;

@media (max-width: 800px){
    flex-direction: column;
}
`;

export const SignoutWrapper = styled.section`
background: #51198C; 
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;

@media (max-width: 800px){
    flex-direction: column;
}
`;

// Profile wrapper 
export const MainProfile = styled.section`
background: #E7D7F7; 
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

@media (max-width: 800px){
    align-items: center;
}
`;

export const Label = styled.label`
display: flex; 
flex-direction: column;
align-items: center;
justify-content: center;
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
font-size: 32px;

@media (max-width: 812px){
    font-size: 28px;
}
`;

export const LightHeading = styled.h1`
color: #E7D7F7;
font-size: 38px;

@media (max-width: 812px){
    font-size: 28px;
}
`;

export const H2 = styled.h2`
color: #AC6EED;
`;

export const Italic = styled.p`
color: #E7D7F7;
font-style: italic;
`;

export const P = styled.p`
color: #E7D7F7;
`;

export const CardText = styled.p`
color: #AC6EED;
font-weight: bold;
`;

export const ProjectList = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: flex-start;
margin: 0 0 0 3rem;


@media (max-width: 850px){
    margin: 0 0 0 0;
    justify-content: center; 
    align-items: center;
    width: 100%;
}
`;

export const ProjectInput = styled.input`
background: #e7d7f7;
border: 1px solid #D1B3F2;
padding: 1rem;
margin: 1rem;
width: 80%;
font-size: 1rem;
border-radius: 8px;
cursor: pointer;

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
border-radius: 8px;
cursor: pointer;

&:hover {

}
    @media (min-width: 667px){
}
`;

export const RegisterButton = styled.button`
border-radius: 8px;
background: #E7D7F7;;
color: #51198C;
cursor: pointer;
outline: none;
border: none;
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
max-width: 15px;
`;

export const ProjectCard = styled.div`
border: 1px solid lightgrey;
border-radius: 8px;
width: 20rem;
height: 10rem;
word-wrap: wrap;
word-wrap: break-word;
padding: 1rem;
margin: 1rem;
display: flex;
flex-direction: column;
pointer: cursor; 
background: #51198C;
box-shadow: 0 0 1px #AC6EED;

&:hover{
  box-shadow: 1px 2px 1px #AC6EED;
  background: #D1B3F2;
  transform: scale(1.1); 
  transition: background 0.6s ease;
  box-shadow: none;

@media (max-width: 850px){
    margin: 0rem;
    padding: 0rem;
    display: flex;
    flex-direction: row;
}
`;

export const BackButton = styled.img`
width: 45px;
color: white;
padding: 1rem;
cursor: pointer;
transition: all 400ms cubic-bezier(.47,1.64,.41,.8);

&:hover {
transform: scale(1.5);
}
`;

export const ChildPageWrapper = styled.div`
display: flex;
flex-direction: column; 
align-items: center;
justify-content: center;
`;