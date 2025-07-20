import React from 'react';
import Header from '../components/Header';
import Animais from '../features/Animais';
import Faq from '../features/Faq/Faq';
import './Home.css';

const Home = () => {
  return (
    <div className="gridHome">
      <Header />
      <Animais />
      <Faq />
    </div>
  );
};

export default Home;
