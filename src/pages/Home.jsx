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
  const [secao, setSecao] = React.useState([]);
  const animais = React.useRef();
  const faq = React.useRef();
  const slider = React.useRef();
  const numeros = React.useRef();
  const contato = React.useRef();

  React.useEffect(() => {
    setSecao([
      ...secao,
      animais.current,
      faq.current,
      slider.current,
      numeros.current,
      contato.current,
    ]);
  }, [animais, contato, faq, slider, numeros]);

  React.useEffect(() => {
    const scroll = () => {
      secao.forEach((item, index) => {
        if (item.getBoundingClientRect().top <= window.innerHeight - 150) {
          item.style.opacity = '1';
        } else {
          item.style.opacity = '0';
        }
      });
    };
    window.addEventListener('scroll', scroll);
    return () => {
      window.removeEventListener('scroll', scroll);
    };
  }, [secao]);

  return (
    <main className="gridHome">
      <Header />
      <Animais animais={animais} />
      <Faq faq={faq} />
      <Slider slider={slider} />
      <Numeros numeros={numeros} />
      <Contato contato={contato} />
      <Footer />
    </main>
  );
};

export default Home;
