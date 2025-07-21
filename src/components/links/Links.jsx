import React from 'react';
import './Links.css';

const Links = ({ href, texto, ...props }) => {
  return (
    <a onClick={props.onClick} className="linkHeader" href={href}>
      {texto}
    </a>
  );
};

export default Links;
