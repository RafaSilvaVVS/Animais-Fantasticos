import React from 'react';
import Links from './links/Links';
import './Header.css';
import Modal from './Modal/Modal';

const Header = () => {
  const [modal, setModal] = React.useState(true);

  function modalAbrir(e) {
    e.preventDefault();
    setModal(true);
  }

  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <Links href="#animais" texto="Animais" />
            <Links href="#sobre" texto="Sobre" />
            <Links href="#faq" texto="Faq" />
            <Links href="#Contato" texto="Contato" />
            <Links href="" texto="Login" onClick={modalAbrir} />
          </li>
        </ul>
      </nav>
      {modal && <Modal setModal={setModal} />}
    </header>
  );
};

export default Header;
