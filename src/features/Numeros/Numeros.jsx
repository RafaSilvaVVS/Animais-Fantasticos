import React, { useRef } from 'react';
import './Numeros.css';
import Titulo from '../../components/TituloPrincipal/Titulo';

const Numeros = () => {
  const lobosNumeros = useRef(null);
  const raposasNumeros = useRef(null);
  const esquilosNumeros = useRef(null);
  const ursosNumeros = useRef(null);
  const [number, setNumero] = React.useState([]);

  React.useEffect(() => {
    setNumero([
      lobosNumeros.current,
      raposasNumeros.current,
      esquilosNumeros.current,
      ursosNumeros.current,
    ]);
  }, []);

  React.useEffect(() => {
    let start = 0;

    number.map((item) => {
      const total = +item.innerText;
      const incremento = Math.ceil(Number(item.innerText / 50));
      item.innerText = 0;
      setInterval(() => {
        start += incremento;
        if (start < total) {
          item.innerText = start;
        } else {
          item.innerText = total;
        }
      }, 70);
    });
  }, [number]);

  return (
    <section className="gridNumeros">
      <Titulo text="Números" />
      <ul className="listaNumeros">
        <li>
          <h2>Lobos</h2>
          <p ref={lobosNumeros}>4874</p>
        </li>
        <li>
          <h2>Raposas</h2>
          <p ref={raposasNumeros}>5374</p>
        </li>
        <li>
          <h2>Esquilos</h2>
          <p ref={esquilosNumeros}>12340</p>
        </li>
        <li>
          <h2>Ursos</h2>
          <p ref={ursosNumeros}>230</p>
        </li>
      </ul>
    </section>
  );
};

export default Numeros;
