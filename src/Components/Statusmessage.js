import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Text = styled.h1`
color: white;
`;

export const StatusMessage = () => {
  const statusMessage = useSelector((store) => store.user.login.statusMessage);
  const errorMessage = useSelector((store) => store.user.login.errorMessage);

  return (
    <>
      {statusMessage && (
        <div>
          <Text>{`${statusMessage}`}</Text>
        </div>
      )}
      {errorMessage && (
        <div>
          <Text>{`Errormessage ${errorMessage}`}</Text>
        </div>
      )}
    </>
  );
};