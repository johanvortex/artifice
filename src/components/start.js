import React from "react";
import "../start.css";
import Logo from "../assets/img/Logo.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Importa los estilos del carrusel
import { Carousel } from "react-responsive-carousel";
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
      {/* <div className="app-header">
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
          <div className="separator"></div> 
          <a href="/search">Blog</a>
        </nav>
      </div> */}
      <div className="section">
        {/* <div className="left-section">
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
        </div> */}
        <div className="carousel-container">
          <Grid container spacing={2}>
            <Grid item xs={12} lg={6}>
                <div style={{ width: 400, height: 330, borderRadius: 20 }}>
                  <Swiper
                    slidesPerView={"auto"}
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                      delay: 2500,
                      disableOnInteraction: false,
                    }}
                    pagination={{
                      clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                  >
                    <SwiperSlide>
                      <img src={Imagen1} alt="Imagen 1" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={Imagen2} alt="Imagen 1" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={Imagen3} alt="Imagen 1" />
                    </SwiperSlide>
                  </Swiper>
                </div>
            </Grid>
            <Grid item xs={12} lg={6}>
                <div style={{ width: 400, height: 330, borderRadius: 20 }}>
                  <Swiper
                    slidesPerView={"auto"}
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                      delay: 2500,
                      disableOnInteraction: false,
                    }}
                    pagination={{
                      clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                  >
                    <SwiperSlide>
                      <img src={Imagen1} alt="Imagen 1" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={Imagen2} alt="Imagen 1" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={Imagen3} alt="Imagen 1" />
                    </SwiperSlide>
                  </Swiper>
                </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default App;
