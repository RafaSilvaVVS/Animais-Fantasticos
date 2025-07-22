import React from 'react';
import Links from './links/Links';
import './Header.css';
import Modal from './Modal/Modal';
import Menu from '../components/menuMobile/Menu';

const Header = () => {
  const [modal, setModal] = React.useState(false);
  const [mobile, setMobile] = React.useState(false);
  const [menu, setMenu] = React.useState(false);
  const menuDiv = React.useRef();
  const subMenu = React.useRef();

  function hoverSubMenu() {
    setMenu(true);
  }

  function mouseFora() {
    if (menu) {
      setMenu(false);
    }
  }

  function modalAbrir(e) {
    e.preventDefault();
    setModal(true);
  }

  function menuMobile() {
    setMobile((prev) => !prev);
  }

  function clickFora({ target }) {
    if (!menuDiv.current.contains(target)) {
      setMobile(false);
    }
  }

  if (mobile) {
    window.addEventListener('click', clickFora);
  }

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
          </li>
          <ul style={{ position: 'relative' }}>
            <li onMouseEnter={hoverSubMenu} className="hoverSubMenu">
              <Links href="#sobre" texto="Sobre" />
            </li>
            {menu && (
              <ul onMouseLeave={mouseFora} ref={subMenu} className="subMenu">
                <li>
                  <Links href="#empresa" texto="A empresa" />
                </li>
                <li>
                  <Links href="#equipe" texto="Equipe" />
                </li>
                <li>
                  <Links href="#socios" texto="Sócios" />
                </li>
                <li>
                  <Links href="#investidores" texto="Investidores" />
                </li>
              </ul>
            )}
          </ul>
          <li>
            <Links href="#faq" texto="Faq" />
          </li>
          <li>
            <Links href="#Contato" texto="Contato" />
          </li>
          <li>
            <Links href="" texto="Login" onClick={modalAbrir} />
          </li>
        </ul>
      </nav>
      {modal && <Modal setModal={setModal} />}
    </header>
  );
};

export default Header;
