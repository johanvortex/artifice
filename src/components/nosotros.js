import React from 'react';
import '../nosotros.css';
import mision from'../assets/img/mision.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette, faHandshake, faCheck, faThumbsUp, faHeart, faSeedling, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import Daniela from '../assets/img/FotoDaniela.png';

function Nosotros() {


    return (
<div className='containerN'>
    <div className='contmision'>
          <div className='sectionN'>
            <div className='left-sectionN'> 
            
            <h1>Misión</h1>
                <hr/>
                <h3>Transformar espacios en entornos inspiradores y funcionales, donde la belleza y la funcionalidad son conceptos que trabajan de manera armoniosa. Nos comprometemos a superar las expectativas de nuestros clientes a través de la creatividad, la innovación y un servicio excepcional. Guiados por la pasión por el diseño y la excelencia en la ejecución y calidad, creamos soluciones personalizadas que reflejan la visión única de cada cliente.</h3>
            </div>
            <div className='right-sectionN'>
              <div className='stilo-img'>
                 <img src={mision} alt="Logo" style={{ maxWidth: '800px', maxHeight: '500px' }}></img>
              </div>
           </div>
        </div>
    </div>
    <div className='contmision'>
          <div className='sectionN'>
            <div className='left-sectionN'> 
            <div className='stilo-img'>
                 <img src={mision} alt="Logo" style={{ maxWidth: '800px', maxHeight: '500px' }}></img>
              </div></div>
            <div className='right-sectionN'>
            <h1>Visión</h1>
                <hr/>
                <h3>Ser reconocidos como líderes en el mundo del diseño interior, la remodelación de espacios y la arquitectura, marcando la pauta en la industria con nuestra creatividad y experiencia. Buscamos inspirar y mejorar la vida de las personas a través del diseño, dejando una huella positiva en cada proyecto que emprendemos. Trabajamos incansablemente para expandir nuestro alcance, construir relaciones sólidas y ser un referente en la transformación de espacios a nivel nacional e internacional.</h3>
           </div>
        </div>
    </div>
    <div className='contmision'>
                <h1>Valores empresariales </h1>
                <hr/> 
          <div className='sectionN'>           
            <div className='left-sectionva'> 
            <p>
                <FontAwesomeIcon icon={faPalette} className='icon' />
                <span className='bold-text'>Creatividad:</span>
                <span className='normal-text'> Fomentamos la creatividad en cada proyecto, buscando soluciones innovadoras y únicas para transformar espacios.</span>
            </p>
            <p>
                <FontAwesomeIcon icon={faHandshake} className='icon' />
                <span className='bold-text'>Compromiso con el Cliente:</span>
                <span className='normal-text'> Nos enfocamos en superar las expectativas de nuestros clientes y satisfacer sus necesidades de manera excepcional.</span>
            </p>           
            <p>
                <FontAwesomeIcon icon={faCheck} className='icon' />
                <span className='bold-text'>Calidad: </span>
                <span className='normal-text'> Buscamos la excelencia en cada detalle y nos esforzamos por entregar resultados de alta calidad en todos nuestros proyectos.</span>
            </p>
            <p>
                <FontAwesomeIcon icon={faThumbsUp} className='icon' />
                <span className='bold-text'>Integridad:</span>
                <span className='normal-text'> Actuamos con honestidad y transparencia en todas nuestras interacciones, manteniendo la confianza de nuestros clientes y colaboradores.</span>
            </p>
            </div>
    <div className='right-sectionva'>
            <p>
                <FontAwesomeIcon icon={faHeart} className='icon' />
                <span className='bold-text'>Pasión por el Diseño:</span>
                <span className='normal-text'> Nuestra pasión por el diseño y la arquitectura impulsa nuestra dedicación y entusiasmo por cada proyecto.</span>
            </p>            
            <p>
                <FontAwesomeIcon icon={faSeedling} className='icon' />
                <span className='bold-text'>Sostenibilidad:</span>
                <span className='normal-text'> Nos comprometemos a adoptar prácticas sostenibles en nuestros proyectos y a contribuir al cuidado del medio ambiente.</span>
            </p>
            <p>
                <FontAwesomeIcon icon={faLightbulb} className='icon' />
                <span className='bold-text'>Innovación:</span>
                <span className='normal-text'> Buscamos constantemente nuevas ideas y enfoques para mantenernos a la vanguardia de la industria.</span>
            </p>
    </div>
        </div>
    </div>
</div>

        )
    }

export default Nosotros;