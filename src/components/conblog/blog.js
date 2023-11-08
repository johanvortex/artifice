import React from 'react';
import './blog.css'; // Asegúrate de importar tu archivo de estilos correctamente
import imag1 from './img/img1.jpg';
import imag2 from './img/img2.jpg';
import imag3 from './img/img3.jpg';

function blog() {
  return (
    <div>
      <div className="card">
        <div className="face front">
          <img src={imag1} alt="" />
          <h3>Nosotros</h3>
        </div>
        <div className="face back">
          <h3>Nosotros</h3>
          <p>En artífice, creamos espacios funcionales y armoniosos que mejoran tu calidad de vida, con experiencia en proyectos para constructoras y clientes particulares, transformamos tus sueños en realidad</p>
          <div className="link">
            <a href="#">Details</a>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="face front">
          <img src={imag2} alt="" />
          <h3>Artifice</h3>
        </div>
        <div className="face back">
          <h3>Artifice</h3>
          <p>Ofrecemos asesoría personalizada, diseño de calidad, producción y entrega puntual, nuestro blog es tu fuente de inspiración para transformar tus espacios en hogares hermosos y funcionales</p>
          <div className="link">
            <a href="#">Details</a>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="face front">
          <img src={imag3} alt="" />
          <h3>Blog</h3>
        </div>
        <div className="face back">
          <h3>Blog</h3>
          <p>Bienvenidos a nuestro espacio creativo donde exploramos las últimas tendencias, consejos y secretos detrás del mundo del diseño de interiores, descubre artículos emocionantes sobre decoración, ideas de diseño, consejos para optimizar el espacio y mucho más</p>
          <div className="link">
            <a href="#">Details</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default blog;