import React from 'react';
import Header from '../components/Header';
import Animais from '../features/Animais';
import './Home.css';

const Home = () => {
  return (
    <div className="gridHome">
      <Header />
      <Animais />
    </div>
  );
};

export default Home;
