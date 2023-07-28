import React from 'react';
import './css/AboutUs.css';
import { Container } from 'react-bootstrap';

const AboutUs = () => {
  return (
    <section id="about-us" className='opacity30'>
      <Container className='contenedor-imagenes'>
      <div className=" ">
        <h2>Quiénes Somos</h2> {/* Agrega el h2 para el título de esta sección */}
        <p>
            Hola, Somos chelops60 y fvelasg, amantes del gaming y viendo el estado actual de Warzone hemos decidido tomar la iniciativa
            y crear torneos para ponerle sentido y emocion a jugar, la idea es tener buena energia, jugar de forma limpia ....
        </p>
      </div>
      </Container>
    </section>
    
  );
};

export default AboutUs;
