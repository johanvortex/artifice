import React, { useState } from "react";
import '../contactanos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faBuilding } from '@fortawesome/free-solid-svg-icons';

function Contactanos() { // Cambia el nombre del componente a "Contactanos"
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar acciones con los datos del formulario, como enviarlos a un servidor o realizar validaciones.
    console.log('Datos del formulario:', formData);
  }

  return (
    <div className='containercontac'>
      <div className='sectionC'>
        <div className='left-sectionC'> 
          <h1>Contactanos</h1>
          <h3>En Artifice, estamos apasionados por transformar espacios en entornos inspiradores y funcionales. Nos encantaría ser parte de tu próximo proyecto de diseño de interiores y ayudarte a crear un espacio que refleje tu estilo y personalidad.</h3>
        <form onSubmit={handleSubmit} className="formulario">
          <div>
            <label>Nombre:</label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              className="input-field"
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="input-field"
            />
          </div>
          <div>
            <label>Mensaje:</label>
            <textarea
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              className="input-field"
            />
          </div>
          <div>
            <button type="submit" className="submit-button">Enviar</button>
          </div>
        </form>
        </div>

        <div className='right-sectionC'>
          <h1>Informacion </h1>
          <p>
            <FontAwesomeIcon icon={faEnvelope} className='icono' />
            artificieinteriordesign@gmail.com
          </p>
          <p>
            <FontAwesomeIcon icon={faPhone} className='icono' />
            <span className='normal-text'> 3124528721</span>
          </p>
          <p>
            <FontAwesomeIcon icon={faBuilding} className='icono' />
            <span className='normal-text'> Cll. 4F # 39B-20 /Bogota-Colombia</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contactanos;