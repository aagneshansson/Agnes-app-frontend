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

export const Label = styled.label`
padding: 15px; 
display: flex; 
`;
export const Form = styled.form`
display: flex
flex-direction: column; 
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

export const Input = styled.input`
border: none;
border-radius: 25px;
display: flex
flex-direction: column; 
align-items: center;
width: 100px;
margin: 5px;
padding: 8px;
border-radius: 25px;

    @media (min-width: 667px){
        width: 350px;
    }
`;

export const Projectinput = styled.input`
border: none;
border-radius: 25px;
display: flex
flex-direction: column; 
align-items: center;
width: 100px;
margin: 5px;
padding: 8px;
border-radius: 25px;

    @media (min-width: 667px){
    
    }
`;

export const Button = styled.button`
border-radius: 12px;
border: none;
cursor: pointer;
`;

export const FileIMG = styled.img`
max-width: 15px;`;

export const Projectwrapper = styled.div`
padding: 10px;
background-color: #E7D7F7;
margin: 5px;
width: 25%;
display: flex;
flex-direction: column;
border-radius: 12px;
cursor: pointer; 

&:hover {
    box-shadow: 5px 10px black;
}
`;