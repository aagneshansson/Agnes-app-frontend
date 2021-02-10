import React from 'react';
import { useSelector } from 'react-redux';

export const StatusMessage = () => {
  const statusMessage = useSelector((store) => store.user.login.statusMessage);
  const errorMessage = useSelector((store) => store.user.login.errorMessage);

  return (
    <>
      {statusMessage && (
        <div>
          <p>{`Statusmessage:${statusMessage}`}</p>
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