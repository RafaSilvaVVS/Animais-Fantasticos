import React from 'react';
import './Tooltip.css';

const Tooltip = ({ offX, offY }) => {
  console.log(offX, offY);
  return (
    <div
      className="tooltip"
      style={{ left: offX + 'px', top: offY + 30 + 'px' }}
    >
      Endereço próximo ao <br></br> estacionamento
    </div>
  );
};

export default Tooltip;
