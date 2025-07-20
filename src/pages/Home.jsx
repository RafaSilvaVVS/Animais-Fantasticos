import React from 'react';
import Header from '../components/Header';
import Animais from '../features/Animais';
import Faq from '../features/Faq/Faq';
import './Home.css';
import Numeros from '../features/Numeros/Numeros';

const Home = () => {
  return (
    <div className="gridHome">
      <Header />
      <Animais />
      <Faq />
      <Numeros />
    </div>
  );
};

export default Home;
