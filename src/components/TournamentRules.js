import React, { useState } from 'react';
import { Container } from 'react-bootstrap';



const TournamentRules = () => {
 
  return (
   

    <section id="tournament-rules" className='opacity30'>
        <Container className='contenedor-imagenes'>
        <div className=" ">
            
            
            <picture >
                {/* Definir la fuente de la imagen para pantallas de escritorio */}
                <source media="(min-width: 768px)" srcSet={"/images/tournament-rules.png"}
                 />
                {/* Definir la fuente de la imagen para pantallas de móvil */}
                <source media="(max-width: 767px)" srcSet={"/images/mov_tournament-rules.png"}
                 />
                {/* Fallback para navegadores que no soporten la etiqueta 'picture' */}
                <img src="/images/tournament-rules.png" alt="Torneo warzone" className="logo-image" />
            </picture>

            
            
        </div>
        </Container>
    </section>

  );
};

export default TournamentRules;
