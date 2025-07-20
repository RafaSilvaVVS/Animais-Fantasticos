import React, { useRef } from 'react';
import ImgAnimais from '../components/ImagemAnimais/imgAnimais';
import './Animais.css';
import ParagrafoAnimais from '../components/conteudoAnimais/ParagrafoAnimais';
import TituloAnimais from '../components/NomeAnimais/TituloAnimais';
import Titulo from '../components/TituloPrincipal/Titulo';
const Animais = () => {
  const [indexClicado, setindexClicado] = React.useState(0);
  function useClickImg(index) {
    setindexClicado(index);
  }
  return (
    <>
      <main className="gridAnimais">
        <Titulo />
        <div className="grid2Col">
          <ul className="listaAnimais">
            <li onClick={() => useClickImg(0)}>
              <ImgAnimais
                src="../src/assets/img/imagem1.jpg"
                alt="Imagem de uma raposa"
              />
            </li>
            <li onClick={() => useClickImg(1)}>
              <ImgAnimais
                src="../src/assets/img/imagem2.jpg"
                alt="Imagem de um esquilo"
              />
            </li>
            <li onClick={() => useClickImg(2)}>
              <ImgAnimais
                src="../src/assets/img/imagem3.jpg"
                alt="Imagem de um urso"
              />
            </li>
            <li onClick={() => useClickImg(3)}>
              <ImgAnimais
                src="../src/assets/img/imagem4.jpg"
                alt="Imagem de um lobo"
              />
            </li>
            <li onClick={() => useClickImg(4)}>
              <ImgAnimais
                src="../src/assets/img/imagem5.jpg"
                alt="Imagem de um macaco"
              />
            </li>
            <li onClick={() => useClickImg(5)}>
              <ImgAnimais
                src="../src/assets/img/imagem6.jpg"
                alt="Imagem de um leão"
              />
            </li>
          </ul>
          <div className="conteudoAnimais">
            <div
              className={indexClicado == 0 ? 'show-down' : ''}
              style={{ display: indexClicado === 0 ? 'block' : 'none' }}
            >
              <TituloAnimais texto="Raposa" />
              <ParagrafoAnimais
                texto="As raposas são animais mamíferos e onívoros pertencentes à família
            Canidae. São vulpídeos de porte médio, caracterizados por um focinho
            comprido e uma cauda longa e peluda."
              />
              <ParagrafoAnimais
                texto=" Também apresentam como particularidade suas pupilas ovais,
            semelhantes às pupilas verticais dos felídeos."
              />
              <ParagrafoAnimais
                texto="As raposas são animais mamíferos e onívoros pertencentes à família
            Canidae. São vulpídeos de porte médio, caracterizados por um focinho
            comprido e uma cauda longa e peluda."
              />
            </div>
            <div
              className={indexClicado == 1 ? 'show-down' : ''}
              style={{ display: indexClicado === 1 ? 'block' : 'none' }}
            >
              <TituloAnimais texto="Esquilo" />
              <ParagrafoAnimais
                texto="As raposas são animais mamíferos e onívoros pertencentes à família
            Canidae. São vulpídeos de porte médio, caracterizados por um focinho
            comprido e uma cauda longa e peluda."
              />
              <ParagrafoAnimais
                texto=" Também apresentam como particularidade suas pupilas ovais,
            semelhantes às pupilas verticais dos felídeos."
              />
              <ParagrafoAnimais
                texto="As raposas são animais mamíferos e onívoros pertencentes à família
            Canidae. São vulpídeos de porte médio, caracterizados por um focinho
            comprido e uma cauda longa e peluda."
              />
            </div>
            <div
              className={indexClicado == 2 ? 'show-down' : ''}
              style={{ display: indexClicado === 2 ? 'block' : 'none' }}
            >
              <TituloAnimais texto="Urso" />
              <ParagrafoAnimais
                texto="As raposas são animais mamíferos e onívoros pertencentes à família
            Canidae. São vulpídeos de porte médio, caracterizados por um focinho
            comprido e uma cauda longa e peluda."
              />
              <ParagrafoAnimais
                texto=" Também apresentam como particularidade suas pupilas ovais,
            semelhantes às pupilas verticais dos felídeos."
              />
              <ParagrafoAnimais
                texto="As raposas são animais mamíferos e onívoros pertencentes à família
            Canidae. São vulpídeos de porte médio, caracterizados por um focinho
            comprido e uma cauda longa e peluda."
              />
            </div>
            <div
              className={indexClicado == 3 ? 'show-down' : ''}
              style={{ display: indexClicado === 3 ? 'block' : 'none' }}
            >
              <TituloAnimais texto="Lobo" />
              <ParagrafoAnimais
                texto="As raposas são animais mamíferos e onívoros pertencentes à família
            Canidae. São vulpídeos de porte médio, caracterizados por um focinho
            comprido e uma cauda longa e peluda."
              />
              <ParagrafoAnimais
                texto=" Também apresentam como particularidade suas pupilas ovais,
            semelhantes às pupilas verticais dos felídeos."
              />
              <ParagrafoAnimais
                texto="As raposas são animais mamíferos e onívoros pertencentes à família
            Canidae. São vulpídeos de porte médio, caracterizados por um focinho
            comprido e uma cauda longa e peluda."
              />
            </div>
            <div
              className={indexClicado == 4 ? 'show-down' : ''}
              style={{ display: indexClicado === 4 ? 'block' : 'none' }}
            >
              <TituloAnimais texto="Macaco" />
              <ParagrafoAnimais
                texto="As raposas são animais mamíferos e onívoros pertencentes à família
            Canidae. São vulpídeos de porte médio, caracterizados por um focinho
            comprido e uma cauda longa e peluda."
              />
              <ParagrafoAnimais
                texto=" Também apresentam como particularidade suas pupilas ovais,
            semelhantes às pupilas verticais dos felídeos."
              />
              <ParagrafoAnimais
                texto="As raposas são animais mamíferos e onívoros pertencentes à família
            Canidae. São vulpídeos de porte médio, caracterizados por um focinho
            comprido e uma cauda longa e peluda."
              />
            </div>
            <div
              className={indexClicado == 5 ? 'show-down' : ''}
              style={{ display: indexClicado === 5 ? 'block' : 'none' }}
            >
              <TituloAnimais texto="Leão" />
              <ParagrafoAnimais
                texto="As raposas são animais mamíferos e onívoros pertencentes à família
            Canidae. São vulpídeos de porte médio, caracterizados por um focinho
            comprido e uma cauda longa e peluda."
              />
              <ParagrafoAnimais
                texto=" Também apresentam como particularidade suas pupilas ovais,
            semelhantes às pupilas verticais dos felídeos."
              />
              <ParagrafoAnimais
                texto="As raposas são animais mamíferos e onívoros pertencentes à família
            Canidae. São vulpídeos de porte médio, caracterizados por um focinho
            comprido e uma cauda longa e peluda."
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Animais;
