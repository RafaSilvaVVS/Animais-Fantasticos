import React from 'react';
import Header from '../components/Header';
import Animais from '../features/Animais';
import Faq from '../features/Faq/Faq';
import './Home.css';
import Numeros from '../features/Numeros/Numeros';
import Contato from '../features/contato/Contato';

const Home = () => {
  return (
    <div className="gridHome">
      <Header />
      <Animais />
      <Faq />
      <Numeros />
      <Contato />
    </div>
  );
};

export default Home;
