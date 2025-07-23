import React from 'react';

const Imagens = ({ src, alt, ref, stilo }) => {
  function handleClick(e) {
    e.preventDefault();
  }

  return (
    <img
      ref={ref}
      style={stilo}
      onClick={handleClick}
      onMouseDown={handleClick}
      onMouseUp={handleClick}
      src={src}
      alt={alt}
    />
  );
};

export default Imagens;
