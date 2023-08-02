import React from 'react';
import { Container } from 'react-bootstrap';

const PrizePlan = () => {
  return (
    <section id="score-system" className='opacity30'>
        <Container className='contenedor-imagenes'>
        <div className=" ">
            <picture >
                {/* Definir la fuente de la imagen para pantallas de escritorio */}
                <source media="(min-width: 768px)" srcSet={"/images/prize-plan.png"}
                 />
                {/* Definir la fuente de la imagen para pantallas de móvil */}
                <source media="(max-width: 767px)" srcSet={"/images/mov_prize-plan.png"}
                 />
                {/* Fallback para navegadores que no soporten la etiqueta 'picture' */}
                <img src="/images/prize-plan.png" alt="Sistema de puntuación" className="logo-image" />
            </picture>
        
        </div>
        </Container>
    </section>
  );
};

export default PrizePlan;
