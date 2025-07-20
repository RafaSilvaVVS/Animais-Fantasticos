import React from 'react';
import './Faq.css';
import Titulo from '../../components/TituloPrincipal/Titulo';

const Faq = () => {
  const [ativo, setAtivo] = React.useState([true, false, false, false]);

  function ativarLista(index) {
    const novosItens = [...ativo];
    novosItens[index] = !novosItens[index];
    setAtivo(novosItens);
  }

  return (
    <article className="gridFaq">
      <Titulo texto="FAQ" />
      <dl className="listaDefinicao">
        <dt onClick={() => ativarLista(0)}>Qual a idade dos animais?</dt>
        <dd style={{ display: ativo[0] === true ? 'block' : 'none' }}>
          As raposas são animais mamíferos e onívoros pertencentes à família
          Canidae. São vulpídeos de porte médio, caracterizados por um focinho
          comprido e uma cauda longa e peluda
        </dd>
        <dt onClick={() => ativarLista(1)}>Eles são fantásticos?</dt>
        <dd style={{ display: ativo[1] === true ? 'block' : 'none' }}>
          Também apresentam como particularidade suas pupilas ovais, semelhantes
          às pupilas verticais dos felídeos.
        </dd>
        <dt onClick={() => ativarLista(2)}>Qual a diferença?</dt>
        <dd style={{ display: ativo[2] === true ? 'block' : 'none' }}>
          As raposas são animais mamíferos e onívoros pertencentes à família
          Canidae. São vulpídeos de porte médio, caracterizados por um focinho
          comprido e uma cauda longa e peluda.
        </dd>
        <dt onClick={() => ativarLista(3)}>Como proteger?</dt>
        <dd style={{ display: ativo[3] === true ? 'block' : 'none' }}>
          Também apresentam como particularidade suas pupilas ovais, semelhantes
          às pupilas verticais dos felídeos.
        </dd>
      </dl>
    </article>
  );
};

export default Faq;
