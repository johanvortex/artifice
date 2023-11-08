import React from 'react';
import './blogini.css'; // Importa tus estilos CSS correctamente
import imag1 from './img/img1.jpg';
import imag2 from './img/img2.jpg';
import imag3 from './img/img3.jpg';
import imag4 from './img/img4.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';


const Blog = () => {
  // Función para avanzar al siguiente elemento
  const onNextClick = () => {
    let items = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(items[0]);
  };

  // Función para retroceder al elemento anterior
  const onPrevClick = () => {
    let items = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(items[items.length - 1]);
  };

  return (
    <div>
      <h2>Mi Blog</h2>
      <div className="containerblog">
        <div id="slide">
          <div className="item" style={{ backgroundImage:`url(${imag1})` }}>
            <div className="content">
              <div className="name">PRIMAVERA</div>
              <div className="des">
              María experimentó una remodelación que transformó su hogar en un espacio que reflejaba sus necesidades y gustos, y se sintió satisfecha porque el proceso fue personalizado, profesional y exitoso en la creación de un entorno cómodo y hermoso. Esta experiencia de usuario satisfecha es un ejemplo de cómo una remodelación bien planificada y ejecutada puede tener un impacto positivo en la vida de alguien.
              </div>
              <button>Permítenos conocer tu opinión</button>
            </div>
          </div>
          <div className="item" style={{ backgroundImage:`url(${imag2})` }}>
            <div className="content">
              <div className="name">MAR</div>
              <div className="des">
              Juan experimentó una remodelación de cocina que convirtió su sueño en realidad. Su nueva cocina reflejaba sus necesidades y pasiones, y se sintió satisfecho debido al enfoque personalizado, profesionalismo y excelencia en el diseño y la ejecución. Esta experiencia de usuario exitosa ilustra cómo una remodelación bien planificada puede transformar no solo un espacio, sino también la calidad de vida de una persona.              </div>
              <button>Permítenos conocer tu opinión</button>
            </div>
          </div>
          <div className="item" style={{ backgroundImage: `url(${imag3})`}}>
            <div className="content">
              <div className="name">FARO</div>
              <div className="des">
              Laura vivió una experiencia de usuario enriquecedora al mejorar la seguridad y comodidad de su hogar. La combinación de soluciones de seguridad y diseño de interiores personalizado transformaron su apartamento en un espacio seguro y acogedor para su familia. Esta experiencia destaca cómo una empresa que escucha las necesidades de sus clientes y ofrece soluciones personalizadas puede tener un impacto significativo en la vida de las personas.              </div>
              <button>Permítenos conocer tu opinión</button>
            </div>
          </div>
          <div className="item" style={{ backgroundImage:`url(${imag4})` }}>
            <div className="content">
              <div className="name">ARENA</div>
              <div className="des">
              Carlos experimentó una transformación impresionante de su patio trasero en un oasis verde personalizado. La atención personalizada, el diseño experto y la ejecución profesional llevaron a la creación de un espacio que superó sus sueños. Esta experiencia subraya cómo la colaboración con expertos puede hacer que los proyectos de mejora del hogar se conviertan en realidades inspiradoras.              </div>
              <button>Permítenos conocer tu opinión</button>
            </div>
          </div>
        </div>
        <div className="buttons">
          {/* Botones para avanzar y retroceder */}
          <button id="prev" onClick={onPrevClick}>
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>
          <button id="next" onClick={onNextClick}>
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </div>
      </div>
      <a href="CARTASBLOG/index.html">
        <button>BLOG</button>
      </a>
    </div>
  );
};

export default Blog;