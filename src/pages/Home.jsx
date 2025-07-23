import React from 'react';
import Header from '../components/Header';
import Animais from '../features/Animais';
import Faq from '../features/Faq/Faq';
import './Home.css';
import Numeros from '../features/Numeros/Numeros';
import Contato from '../features/contato/Contato';
import Footer from '../features/Footer/Footer';
import Slider from '../features/slider/Slider';

const Home = () => {
  return (
    <main className="gridHome">
      <Header />
      <Animais />
      <Faq />
      <Slider />
      <Numeros />
      <Contato />
      <Footer />
    </main>
  );
};

export default Home;
