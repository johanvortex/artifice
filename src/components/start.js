import React from "react";
import "../start.css";
import Logo from "../assets/img/Logo.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Importa los estilos del carrusel
import { Carousel } from "react-responsive-carousel";
import Imagen1 from "../assets/img/carru1.jpg";
import Imagen2 from "../assets/img/carru2.jpg";
import Imagen3 from "../assets/img/carru3.jpg";


function App() {
  return (
    <div className="container">
      <div className="app-header">
        <div className="logo">
          <img
            src={Logo}
            alt="Logo"
            style={{ maxWidth: "120px", maxHeight: "35px" }}
          />
        </div>
        <nav className="nav-right">
          <a href="/">Inicio</a>
          <a href="/shop">Nosotros</a>
          <a href="/blog">Servicios</a>
          <a href="/media">Galerias</a>
          <a href="/shortcode">Contacto</a>
          <div className="separator"></div> {/* Línea vertical de separación */}
          <a href="/search">Blog</a>
        </nav>
      </div>
      <div className="section">
        <div className="left-section">
          <img
            src={Logo}
            alt="Logo"
            style={{ maxWidth: "400px", maxHeight: "250px" }}
          ></img>
          <h3>
            Diseñamos tu mundo interior. En artífice, creamos espacios
            funcionales y armoniosos que mejoran tu calidad de vida. Ofrecemos
            asesoría personalizada, diseño de calidad, producción y entrega
            puntual. Con experiencia en proyectos para constructoras y clientes
            particulares, transformamos tus sueños en realidad. Bienvenido a
            artífice.
          </h3>
        </div>
        <div className="right-section">
          <div className="carousel-container">
            <Carousel showThumbs={false} showStatus={false}>
              <div className="carousel-slide">
                <img src={Imagen1} alt="Imagen 1" />
              </div>
              <div className="carousel-slide">
                <img src={Imagen2} alt="Imagen 2" />
              </div>
              <div className="carousel-slide">
                <img src={Imagen3} alt="Imagen 3" />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
