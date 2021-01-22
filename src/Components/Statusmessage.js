import React from 'react';
import { useSelector } from 'react-redux';

//import styled from 'styled-components/macro';

export const Statusmessage = () => {
  const statusMessage = useSelector((store) => store.user.login.statusMessage);
  const errorMessage = useSelector((store) => store.user.login.errorMessage);

  return (
    <>
    <p>This is how your signup went</p>
      {statusMessage && (
        <div>
          <p>{`${statusMessage}`}</p>
        </div>
      )}
      {errorMessage && (
        <div>
          <p>{`${errorMessage}`}</p>
        </div>
      )}
    </>
  );
};