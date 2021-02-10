  
import React from 'react';
import { Button } from '../Styling/Globalstyling';

export const SubmitButton = props => {

  return (
    <Button
      type="submit"
      onClick={() => { props.function(props.value) }}
      disabled={props.disabled}
    >
      {props.title}
    </Button>
  );
};