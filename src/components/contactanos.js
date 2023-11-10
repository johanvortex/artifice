import React, { useState } from "react";
import '../contactanos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faBuilding } from '@fortawesome/free-solid-svg-icons';

function Contactanos() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3003/enviar-correo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Correo enviado exitosamente');
      } else {
        console.error('Error al enviar el correo');
      }
    } catch (error) {
      console.error('Error de red', error);
    }
  }

  return (
    <div className='containercontac'>
      <div className='sectionC'>
        <div className='left-sectionC'> 
          <h1>Contáctanos</h1>
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
          <h1>Información </h1>
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
            <span className='normal-text'> Cll. 4F # 39B-20 /Bogotá-Colombia</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contactanos;