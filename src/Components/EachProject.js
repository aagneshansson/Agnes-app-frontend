import React from 'react';
import { useHistory } from 'react-router-dom';
import { BackButton, ChildPageWrapper, P } from 'Styling/Globalstyling.js';
import backbutton from '../Assets/backbutton.svg';

export const EachProject = () => {
    const history = useHistory();

    const handleGoBack = () => {
        history.push("/profile")
    }

    return(
    <ChildPageWrapper>
        <P>We are currently working on this!</P>
        <BackButton 
            src={backbutton} 
            onClick={handleGoBack} 
            alt="Go back button"
        />
    </ChildPageWrapper>
    );
};