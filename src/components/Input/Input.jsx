import React from 'react';

const Input = ({ label, id, type }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input type={type} name={id} id={id} />
    </>
  );
};

export default Input;
