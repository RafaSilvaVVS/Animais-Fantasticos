import React from 'react';
import Links from '../links/Links';
import './Menu.css';

const Menu = ({ secaoTopo, setModal }) => {
  const [menuSub, setMenuSub] = React.useState(false);
  const subMenu = React.useRef();

  function scrollTop(e, index) {
    e.preventDefault();
    const topo = secaoTopo[index].getBoundingClientRect().top;
    window.scrollTo({
      top: topo,
      behavior: 'smooth',
    });
  }

  function hoverMenu() {
    setMenuSub(true);
  }
  function moseFora() {
    setMenuSub(false);
  }

  function abrirModal(e) {
    e.preventDefault();
    setModal(true);
  }

  return (
    <ul onMouseLeave={moseFora} className="ulMenuMobile">
      <li onClick={(e) => scrollTop(e, 0)}>
        <Links href="#animais" texto="Animais" />
      </li>
      <ul className="ulSubMenu">
        <li onMouseEnter={hoverMenu}>
          <Links href="#sobre" texto="Sobre" />
        </li>
        {menuSub && (
          <ul ref={subMenu} className="ulItem">
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
      <li onClick={(e) => scrollTop(e, 1)}>
        <Links href="#faq" texto="Faq" />
      </li>
      <li onClick={(e) => scrollTop(e, 2)}>
        <Links href="#Contato" texto="Contato" />
      </li>
      <li onClick={abrirModal}>
        <Links href="" texto="Login" />
      </li>
    </ul>
  );
};

export default Menu;
