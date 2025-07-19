import React from 'react';
import Links from './links/Links';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <Links href="#animais" texto="Animais" />
            <Links href="#sobre" texto="Sobre" />
            <Links href="#faq" texto="Faq" />
            <Links href="#Contato" texto="Contato" />
            <Links href="#" texto="Login" />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
