import React from "react";
import "../start.css";
import Logo from "../assets/img/Logo.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Importa los estilos del carrusel
import Imagen1 from "../assets/img/carru1.jpg";
import Imagen2 from "../assets/img/carru2.jpg";
import Imagen3 from "../assets/img/carru3.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Grid } from "@mui/material";
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
          <a href="/blog">Servicios</a>
          <a href="/media">Galerias</a>
          <a href="/shop">Nosotros</a>
          <a href="/shortcode">Contacto</a>
          <div className="separator"></div>
          <a href="/search">Blog</a>
        </nav>
      </div>
      <Grid className="section" xs={12} lg={12}>
        <Grid container spacing={2} className="carousel-container">
          <Grid
            item
            xs={12}
            md={6}
            lg={6}
            className="dis"
            justifyContent="center"
            alignItems="center"
          >
            <div className="left-section">
              <img
                src={Logo}
                alt="Logo"
                style={{ maxWidth: "400px", maxHeight: "250px" }}
              ></img>
              <h3 className="text">
                Diseñamos tu mundo interior. En artífice, creamos espacios
                funcionales y armoniosos que mejoran tu calidad de vida.
                Ofrecemos asesoría personalizada, diseño de calidad, producción
                y entrega puntual. Con experiencia en proyectos para
                constructoras y clientes particulares, transformamos tus sueños
                en realidad. Bienvenido a artífice.
              </h3>
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            lg={6}
            className="dis"
            justifyContent="center"
            marginTop={8}
          >
            {" "}
            <div style={{ width: 400, height: 330, borderRadius: 20 }}>
              <Swiper
                slidesPerView={"auto"}
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="imgEffect"
              >
                <SwiperSlide>
                  <div className="card">
                    <img src={Imagen1} alt="Imagen 1" />
                    <div
                      className="cardConten"
                      style={{
                        background: "#D6C6B4",
                        padding: "5px",
                        width: "100%",
                      }}
                    >
                      <p>
                        {" "}
                        <strong>PRIMAVERA</strong>
                      </p>
                    </div>
                    <div
                      className="cardContenFooter"
                      style={{
                        background: "#D6C6B4",
                        padding: "10px",
                        width: "50%",
                      }}
                    >
                      <p>
                        {" "}
                        <strong>VER PROYECTO</strong>
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card">
                    <img src={Imagen2} alt="Imagen 1" />
                    <div
                      className="cardConten"
                      style={{
                        background: "#D6C6B4",
                        padding: "5px",
                        width: "100%",
                      }}
                    >
                      <p>
                        {" "}
                        <strong>ARTCO</strong>
                      </p>
                    </div>
                    <div
                      className="cardContenFooter"
                      style={{
                        background: "#D6C6B4",
                        padding: "10px",
                        width: "50%",
                      }}
                    >
                      <p>
                        {" "}
                        <strong>VER PROYECTO</strong>
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card">
                    <img src={Imagen3} alt="Imagen 1" />
                    <div
                      className="cardConten"
                      style={{
                        background: "#D6C6B4",
                        padding: "5px",
                        width: "100%",
                      }}
                    >
                      <p>
                        {" "}
                        <strong>PALMA</strong>
                      </p>
                    </div>
                    <div
                      className="cardContenFooter"
                      style={{
                        background: "#D6C6B4",
                        padding: "10px",
                        width: "50%",
                      }}
                    >
                      <p>
                        {" "}
                        <strong>VER PROYECTO</strong>
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>{" "}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
