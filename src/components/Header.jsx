import React from 'react';
import Links from './links/Links';
import './Header.css';
import Modal from './Modal/Modal';
import Menu from '../components/menuMobile/Menu';

const Header = () => {
  const [modal, setModal] = React.useState(false);
  const [mobile, setMobile] = React.useState(false);
  const menuDiv = React.useRef();

  function modalAbrir(e) {
    e.preventDefault();
    setModal(true);
  }

  function menuMobile() {
    setMobile((prev) => !prev);
  }

  function handleClick({ target }) {
    if (target.contains(menuDiv.current)) {
      setMobile(false);
    }
  }

  function clickFora({ target }) {
    if (!menuDiv.current.contains(target)) {
      setMobile(false);
    }
  }

  window.addEventListener('click', clickFora);

  return (
    <header className="header">
      <div
        ref={menuDiv}
        style={{
          backgroundColor: mobile ? '#fb5' : '',
        }}
        className={mobile ? 'divMobile' : ''}
      >
        <button
          onClick={menuMobile}
          className={mobile ? 'rotacionar menuMobile' : 'menuMobile normal'}
        >
          MENU
        </button>
        {mobile && <Menu />}
      </div>
      <nav>
        <ul className="ulMenu">
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
