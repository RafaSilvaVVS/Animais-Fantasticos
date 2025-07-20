import React from 'react';
import Titulo from '../../components/TituloPrincipal/Titulo';
import ListaContato from './ListaContato';
import Tooltip from './tooltip';
import './Contato.css';
import './Tooltip.css';

const Contato = () => {
  const [offX, setOffX] = React.useState(null);
  const [offY, setOffY] = React.useState(null);
  const [mouseOver, setMouseOver] = React.useState(false);

  function mouseEvent({ nativeEvent }) {
    setMouseOver(true);
    setOffX(nativeEvent.offsetX);
    setOffY(nativeEvent.offsetY);
  }

  function mouseFora() {
    setMouseOver(false);
  }

  return (
    <article className="gridContato">
      <Titulo texto="Contato" />
      <div className="contato-div">
        <img
          onMouseMove={mouseEvent}
          onMouseLeave={mouseFora}
          src="../../src/assets/img/mapa.png"
          alt="Mapa da localização da empresa"
        />
        <ul className="listaContato">
          <ListaContato texto="contato@origamid.com" />
          <ListaContato texto="+55 (21) 9999-9999" />
          <ListaContato texto="Rua do Conde, nº 21" />
          <ListaContato texto="Rio de Janeiro - RJ" />
          <ListaContato texto="Doe 0.0015 bitcoin para nos ajudar" />
          <ListaContato texto="Seg à Sex das 8 às 18" />
        </ul>
        {mouseOver && <Tooltip offX={offX} offY={offY} />}
      </div>
    </article>
  );
};

export default Contato;
