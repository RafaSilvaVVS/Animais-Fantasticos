import React from 'react';
import Links from '../links/Links';
import './Menu.css';

const Menu = () => {
  const [menuSub, setMenuSub] = React.useState(false);
  const subMenu = React.useRef();

  function hoverMenu() {
    setMenuSub(true);
  }
  function moseFora() {
    setMenuSub(false);
  }

  return (
    <ul onMouseLeave={moseFora} className="ulMenuMobile">
      <li>
        <Links href="#animais" texto="Animais" />
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
        <Links href="#faq" texto="Faq" />
        <Links href="#Contato" texto="Contato" />
        <Links href="" texto="Login" />
      </li>
    </ul>
  );
};

export default Menu;
