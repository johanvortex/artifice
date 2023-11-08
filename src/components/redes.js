import React from "react";
import "../redes.css";
import { Grid } from "@mui/material";

function redes() {
  return (
    <div className="containerR">
      {/* <div className="sectionR">
        
       
      </div> */}
      <Grid className="sectionR" xs={12} lg={12}>
        <Grid container spacing={2} className="carousel-container">
          <Grid
            item
            xs={12}
            md={6}
            lg={6}
            style={{
                display:"flex",
                justifyContent:"center",
            }}
          >
            <Grid container spacing={4}>
              <Grid
                item
                xs={6}
                md={6}
                lg={6}
                style={{
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center"
                }}
              >
               <div className="radi">
                <h5>Faveppm</h5>    
               </div>
              </Grid>
              <Grid
                item
                xs={6}
                md={6}
                lg={6}
                style={{
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center"
                }}
              >
                <div className="radi">
                <h5>Faveppm</h5>    
               </div>
              </Grid>
              <Grid
                item
                xs={6}
                md={6}
                lg={6}
                style={{
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center"
                }}
              >
                <div className="radi">
                <h5>Faveppm</h5>    
               </div>
              </Grid>
              <Grid
                item
                xs={6}
                md={6}
                lg={6}
                style={{
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center"
                }}
              >
             <div className="radi">
                <h5>Faveppm</h5>    
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
                display:"flex",
                justifyContent:"center",
                alignItems:"center"
            }}
          >
          <div className="right-sectionR">
          <h1>
            Conecta con el Diseño: Únete a Nuestra Comunidad en Redes Sociales.
          </h1>
          <p>
            Te invitamos a explorar una paleta de inspiración, tendencias y
            creatividad que transformará tus espacios. Sigue nuestro viaje a
            través del mundo del interiorismo y descubre ideas frescas, consejos
            de decoración y proyectos asombrosos.
          </p>
        </div>

          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default redes;
