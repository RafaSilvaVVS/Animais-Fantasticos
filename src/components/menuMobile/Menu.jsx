import React from 'react';
import Links from '../links/Links';
import './Menu.css';

const Menu = () => {
  return (
    <ul className="ulMenuMobile">
      <li>
        <Links href="#animais" texto="Animais" />
        <Links href="#sobre" texto="Sobre" />
        <Links href="#faq" texto="Faq" />
        <Links href="#Contato" texto="Contato" />
        <Links href="" texto="Login" />
      </li>
    </ul>
  );
};

export default Menu;
