import React from 'react';
import '../../galeria.css';
import imagen1 from '../../assets/img/primaveralte.jpg';
import imagen2 from '../../assets/img/primaverancha.jpg';
import imagen3 from '../../assets/img/primaverancha1.jpg';
import imagen4 from '../../assets/img/primaverancha (2).jpg';
import imagen5 from '../../assets/img/primaverancha3.jpg';

function Galeria() {
  return (
    <div className='containergal'>
        <div className='contendordes'>
            
            <hr/>
            <h2>Primavera</h2>
              <div className="grid-containergale">
                    <div className="cell cell-1-4">
                <div className='image-container1'>
                <img src={imagen1} alt="Descripción de la imagen"/>
                </div>
            </div>  
            <div className="cell">
            <div className='image-container'>
                <img src={imagen2} alt="Descripción de la imagen"/>
                </div>
            </div>
            <div className="cell">
            <div className='image-container'>
                <img src={imagen5} alt="Descripción de la imagen"/>
                </div>
            </div>
            <div className="cell">
            <div className='image-container'>
                <img src={imagen4} alt="Descripción de la imagen"/>
                </div>
            </div>
            <div className="cell">
            <div className='image-container'>
                <img src={imagen3} alt="Descripción de la imagen"/>
                </div>
            </div>
              </div>
            </div>
        </div>
  );
}

export default Galeria;