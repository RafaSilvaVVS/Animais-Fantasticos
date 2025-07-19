import React from 'react';
import './Links.css';

const Links = ({ href, texto }) => {
  return (
    <a className="linkHeader" href={href}>
      {texto}
    </a>
  );
};

export default Links;
