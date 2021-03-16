import React from 'react';

const ErrorView = props => {
  return (
    <div>
      <h1>There was an unknown error</h1>
      <p>{props.location.search.replace(/[?A-Za-z]+=/, '')}</p>
    </div>
  );
};

export default ErrorView;
