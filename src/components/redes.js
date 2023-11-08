import React from "react";
import "../redes.css";
import { Grid } from "@mui/material";
import ImagenFacebook from "../assets/img/iconFacebook.png";
import ImagenWhat from "../assets/img/iconWhat.png";
import ImagenInstagram from "../assets/img/iconInstagram.png";
import ImagenPinte from "../assets/img/logo_linkerin.png";
function redes() {
  const redirigirASocialFacebook = () => {
      const url = " https://www.facebook.com/Idealoespacios?mibextid=LQQJ4d";
      window.open(url, "_blank");
  };
  const redirigirASocialInstagram = () => {
      const url = " https://www.instagram.com/arq.danielasilvag/?next=%2F ";
      window.open(url, "_blank");
  };
  const redirigirASocialLinkerin = () => {
      const url = "https://www.linkedin.com/company/art%C3%ADficeinteriordesign/";
      window.open(url, "_blank");
  };
  const redirigirASocialWhatsapp = () => {
    const numeroWhatsapp = '3124528721'; 
    const mensaje = 'Hola, quiero chatear contigo.'; 
    const whatsappURL = `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(mensaje)}`;
    window.open(whatsappURL, "_blank"); 
  };
  return (
    <div className="containerR">
      <Grid className="sectionR" xs={12} lg={12}>
        <Grid container spacing={2} className="carousel-container">
          <Grid
            item
            xs={12}
            md={6}
            lg={6}
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Grid container spacing={4}>
              <Grid
                item
                xs={6}
                md={6}
                lg={6}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "end",
                }}
              >
                <div className="radi" onClick={redirigirASocialFacebook}
                style={{
                  marginLeft:"10rem"
                }}
                >
                  <img src={ImagenFacebook} alt="Descripción de la imagen" />
                </div>
              </Grid>
              <Grid
                item
                xs={6}
                md={6}
                lg={6}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "end",
                }}
              >
                <div className="radi" onClick={redirigirASocialWhatsapp}>
                  <img src={ImagenWhat} alt="Descripción de la imagen" />
                </div>
              </Grid>
              <Grid
                item
                xs={6}
                md={6}
                lg={6}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "start",
                }}
              >
                <div className="radi" onClick={redirigirASocialInstagram} style={{
                  marginTop:"15px",
                  marginLeft:"10rem"

                }}>
                  <img src={ImagenInstagram} alt="Descripción de la imagen" />
                </div>
              </Grid>
              <Grid
                item
                xs={6}
                md={6}
                lg={6}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "start",
                }}
              >
                <div className="radi" onClick={redirigirASocialLinkerin}
                style={{
                  marginTop:"15px"
                }}
                >
                  <img src={ImagenPinte} 
                  alt="Descripción de la imagen"/>
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            xs={6}
            md={6}
            lg={6}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="right-sectionR">
              <h1>
                Conecta con el Diseño: Únete a Nuestra Comunidad en Redes
                Sociales.
              </h1>
              <p>
                Te invitamos a explorar una paleta de inspiración, tendencias y
                creatividad que transformará tus espacios. Sigue nuestro viaje a
                través del mundo del interiorismo y descubre ideas frescas,
                consejos de decoración y proyectos asombrosos.
              </p>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default redes;
