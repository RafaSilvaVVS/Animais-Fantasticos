import React from 'react';
import './Slider.css';
import Imagens from '../../components/slider/Imagens';
import ImgsNav from '../../components/slider/navImgs/ImgsNav';

const Slider = ({ slider }) => {
  const [index, setIndex] = React.useState(0);
  const [pressionando, setPressionando] = React.useState(false);
  const [startX, setStartX] = React.useState(0);
  const ulSlide = React.useRef();
  const widthImgs = React.useRef();

  function navImg(idx) {
    setIndex(idx);
  }

  function mousePressionado(e) {
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    setStartX(clientX);
    setPressionando(true);
  }

  function mouseMover(e) {
    if (!pressionando) return;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const delta = clientX - startX;
    const width = widthImgs.current.getBoundingClientRect().width;

    ulSlide.current.style.transition = 'none';
    ulSlide.current.style.transform = `translateX(${-index * width + delta}px)`;
  }

  function mouseSoltado(e) {
    if (!pressionando) return;
    const clientX = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
    const delta = clientX - startX;
    const width = widthImgs.current.getBoundingClientRect().width;
    const threshold = width * 0.3;

    ulSlide.current.style.transition = 'transform 0.3s ease';

    if (delta > threshold && index > 0) {
      setIndex(index - 1);
    } else if (delta < -threshold && index < 5) {
      setIndex(index + 1);
    } else {
      ulSlide.current.style.transform = `translateX(${-index * width}px)`;
    }

    setPressionando(false);
  }

  React.useEffect(() => {
    const width = widthImgs.current.getBoundingClientRect().width;
    ulSlide.current.style.transition = 'transform 0.3s ease';
    ulSlide.current.style.transform = `translateX(${-index * width}px)`;
  }, [index]);

  return (
    <section ref={slider} className="secaoSlider">
      <ol className="olnav">
        <li onClick={() => navImg(0)}>
          <ImgsNav
            src="../../src/assets/img/sliderImg/foto1-thumb.jpg"
            alt="Foto thumb raposa"
          />
        </li>
        <li onClick={() => navImg(1)}>
          <ImgsNav
            src="../../src/assets/img/sliderImg/foto2-thumb.jpg"
            alt="Foto thumb raposa"
          />
        </li>
        <li onClick={() => navImg(2)}>
          <ImgsNav
            src="../../src/assets/img/sliderImg/foto3-thumb.jpg"
            alt="Foto thumb raposa"
          />
        </li>
        <li onClick={() => navImg(3)}>
          <ImgsNav
            src="../../src/assets/img/sliderImg/foto4-thumb.jpg"
            alt="Foto thumb raposa"
          />
        </li>
        <li onClick={() => navImg(4)}>
          <ImgsNav
            src="../../src/assets/img/sliderImg/foto5-thumb.jpg"
            alt="Foto thumb raposa"
          />
        </li>
        <li onClick={() => navImg(5)}>
          <ImgsNav
            src="../../src/assets/img/sliderImg/foto6-thumb.jpg"
            alt="Foto thumb raposa"
          />
        </li>
      </ol>
      <ul
        ref={ulSlide}
        onTouchStart={mousePressionado}
        onMouseDown={mousePressionado}
        onMouseUp={mouseSoltado}
        onTouchMove={mouseMover}
        onTouchEnd={mouseSoltado}
        onMouseMove={mouseMover}
        className="ulSlider"
      >
        <li ref={widthImgs}>
          <Imagens
            stilo={{ transform: index === 0 ? `scale(1)` : `scale(0.7)` }}
            src="../../src/assets/img/sliderImg/foto1.jpg"
            alt="Foto de uma raposa"
          />
        </li>
        <li>
          <Imagens
            stilo={{ transform: index === 1 ? `scale(1)` : `scale(0.7)` }}
            src="../../src/assets/img/sliderImg/foto2.jpg"
            alt="Foto de um esquilo"
          />
        </li>
        <li>
          <Imagens
            stilo={{ transform: index === 2 ? `scale(1)` : `scale(0.7)` }}
            src="../../src/assets/img/sliderImg/foto3.jpg"
            alt="Foto de um Urso"
          />
        </li>
        <li>
          <Imagens
            stilo={{ transform: index === 3 ? `scale(1)` : `scale(0.7)` }}
            src="../../src/assets/img/sliderImg/foto4.jpg"
            alt="Foto de um Lobo"
          />
        </li>
        <li>
          <Imagens
            stilo={{ transform: index === 4 ? `scale(1)` : `scale(0.7)` }}
            src="../../src/assets/img/sliderImg/foto5.jpg"
            alt="Foto de um macaco"
          />
        </li>
        <li>
          <Imagens
            stilo={{ transform: index === 5 ? `scale(1)` : `scale(0.7)` }}
            src="../../src/assets/img/sliderImg/foto6.jpg"
            alt="Foto de um leão"
          />
        </li>
      </ul>
    </section>
  );
};

export default Slider;
