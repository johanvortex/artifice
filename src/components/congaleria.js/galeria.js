import React from "react";
import "../../galeria.css";
import imagen1 from "../../assets/img/primaveralte.jpg";
import imagen2 from "../../assets/img/primaverancha.jpg";
import imagen3 from "../../assets/img/primaverancha1.jpg";
import imagen4 from "../../assets/img/primaverancha56.jpg";
import imagen5 from "../../assets/img/primaverancha3.jpg";
import imagenArtico1 from "../../assets/img/artico/p1.jpg";
import imagenArtico2 from "../../assets/img/artico/p2.jpg";
import imagenArtico3 from "../../assets/img/artico/p3.jpg";
import imagenArtico4 from "../../assets/img/artico/p4.jpg";
import imagenArtico5 from "../../assets/img/artico/p5.jpg";
import imagenFaro1 from "../../assets/img/artico/p1.jpg";
import imagenFaro2 from "../../assets/img/artico/p2.jpg";
import imagenFaro3 from "../../assets/img/primaverancha1.jpg";
import imagenFaro4 from "../../assets/img/primaverancha56.jpg";
import imagenFaro5 from "../../assets/img/artico/p5.jpg";
import imagenluana1 from "../../assets/img/primaverancha3.jpg";
import imagenluana2 from "../../assets/img/primaverancha1.jpg";
import imagenluana3 from "../../assets/img/luana/p3.jpg";
import imagenluana4 from "../../assets/img/luana/p4.jpg";
import imagenluana5 from "../../assets/img/artico/p2.jpg";
import imagenmar1 from "../../assets/img/primaverancha3.jpg";
import imagenmar2 from "../../assets/img/artico/p2.jpg";
import imagenmar3 from "../../assets/img/artico/p3.jpg";
import imagenmar4 from "../../assets/img/primaverancha1.jpg";
import imagenmar5 from "../../assets/img/primaverancha56.jpg";


import { Grid } from "@mui/material";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
function Galeria() {
  return (
    <div className="containergal">
      <div className="contendordes">
        <hr />
        <Grid xs={12} md={12} lg={12}>
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={50}
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
              <h2>Primavera</h2>
              <div className="grid-containergale">
                <div className="cell cell-1-4">
                  <div className="image-container1">
                    <img src={imagen1} alt="Descripción de la imagen" />
                  </div>
                </div>
                <div className="cell">
                  <div className="image-container">
                    <img src={imagen2} alt="Descripción de la imagen" />
                  </div>
                </div>
                <div className="cell">
                  <div className="image-container">
                    <img src={imagen5} alt="Descripción de la imagen" />
                  </div>
                </div>
                <div className="cell">
                  <div className="image-container">
                    <img src={imagen4} alt="Descripción de la imagen" />
                  </div>
                </div>
                <div className="cell">
                  <div className="image-container">
                    <img src={imagen3} alt="Descripción de la imagen" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <h2>Artico</h2>
              <div className="grid-containergale">
                <div className="cell cell-1-4">
                  <div className="image-container1">
                    <img src={imagenArtico1} alt="Descripción de la imagen" />
                  </div>
                </div>
                <div className="cell">
                  <div className="image-container">
                    <img src={imagenArtico2} alt="Descripción de la imagen" />
                  </div>
                </div>
                <div className="cell">
                  <div className="image-container">
                    <img src={imagenArtico3} alt="Descripción de la imagen" />
                  </div>
                </div>
                <div className="cell">
                  <div className="image-container">
                    <img src={imagenArtico4} alt="Descripción de la imagen" />
                  </div>
                </div>
                <div className="cell">
                  <div className="image-container">
                    <img src={imagenArtico5} alt="Descripción de la imagen" />
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <h2>Faro</h2>
              <div className="grid-containergale">
                <div className="cell cell-1-4">
                  <div className="image-container1">
                    <img src={imagenFaro1} alt="Descripción de la imagen" />
                  </div>
                </div>
                <div className="cell">
                  <div className="image-container">
                    <img src={imagenFaro2} alt="Descripción de la imagen" />
                  </div>
                </div>
                <div className="cell">
                  <div className="image-container">
                    <img src={imagenFaro3} alt="Descripción de la imagen" />
                  </div>
                </div>
                <div className="cell">
                  <div className="image-container">
                    <img src={imagenFaro4} alt="Descripción de la imagen" />
                  </div>
                </div>
                <div className="cell">
                  <div className="image-container">
                    <img src={imagenFaro5} alt="Descripción de la imagen" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <h2>Luana</h2>
              <div className="grid-containergale">
                <div className="cell cell-1-4">
                  <div className="image-container1">
                    <img src={imagenluana1} alt="Descripción de la imagen" />
                  </div>
                </div>
                <div className="cell">
                  <div className="image-container">
                    <img src={imagenluana2} alt="Descripción de la imagen" />
                  </div>
                </div>
                <div className="cell">
                  <div className="image-container">
                    <img src={imagenluana3} alt="Descripción de la imagen" />
                  </div>
                </div>
                <div className="cell">
                  <div className="image-container">
                    <img src={imagenluana4} alt="Descripción de la imagen" />
                  </div>
                </div>
                <div className="cell">
                  <div className="image-container">
                    <img src={imagenluana5} alt="Descripción de la imagen" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <h2>Mar</h2>
              <div className="grid-containergale">
                <div className="cell cell-1-4">
                  <div className="image-container1">
                    <img src={imagenmar1} alt="Descripción de la imagen" />
                  </div>
                </div>
                <div className="cell">
                  <div className="image-container">
                    <img src={imagenmar2} alt="Descripción de la imagen" />
                  </div>
                </div>
                <div className="cell">
                  <div className="image-container">
                    <img src={imagenmar3} alt="Descripción de la imagen" />
                  </div>
                </div>
                <div className="cell">
                  <div className="image-container">
                    <img src={imagenmar4} alt="Descripción de la imagen" />
                  </div>
                </div>
                <div className="cell">
                  <div className="image-container">
                    <img src={imagenmar5} alt="Descripción de la imagen" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </Grid>
      </div>
    </div>
  );
}

export default Galeria;
