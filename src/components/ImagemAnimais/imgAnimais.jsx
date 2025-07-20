import React from 'react';
import './ImgAnimais.css';

const imgAnimais = ({ src, alt }) => {
  return <img className="img" src={src} alt={alt} />;
};

export default imgAnimais;
