import React from 'react';
import '../nosotros.css';
import mision from'../assets/img/mision.jpg';

function nosotros() {
    return (
<div className='containerN'>
    <div className='contmision'>
        <h1>Mision</h1>
        <hr/>
        <div className='linea.horizontal'></div>
          <div className='sectionN'>
            <div className='left-sectionN'> 
                <h3>Transformar espacios en entornos inspiradores y funcionales, donde la belleza y la funcionalidad son conceptos que trabajan de manera armoniosa. Nos comprometemos a superar las expectativas de nuestros clientes a través de la creatividad, la innovación y un servicio excepcional. Guiados por la pasión por el diseño y la excelencia en la ejecución y calidad, creamos soluciones personalizadas que reflejan la visión única de cada cliente.</h3>
            </div>
            <div className='right-sectionN'>
              <div className='stilo-img'>
                 <img src={mision} alt="Logo" style={{ maxWidth: '400px', maxHeight: '250px' }}></img>
              </div>
           </div>
        </div>
    </div>
    
</div>

        )}

export default nosotros;