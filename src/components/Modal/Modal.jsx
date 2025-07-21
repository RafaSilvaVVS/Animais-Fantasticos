import React from 'react';
import Input from '../Input/Input';
import './Modal.css';
import Button from '../Button/Button';

const Modal = ({ setModal }) => {
  function fecharModal() {
    setModal(false);
  }

  const modal = React.useRef();
  function handleClick({ target }) {
    if (target.contains(modal.current)) {
      setModal(false);
    }
  }

  return (
    <div onClick={handleClick} className="containerModal">
      <form ref={modal}>
        <span onClick={fecharModal} className="fechar">
          X
        </span>
        <div>
          <Input label="Email" id="email" type="email" />
          <Input label="Senha" id="senha" type="password" />
          <Button />
        </div>
      </form>
    </div>
  );
};

export default Modal;
