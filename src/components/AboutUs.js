import React from 'react';
import './css/AboutUs.css';
import { Container } from 'react-bootstrap';

const AboutUs = () => {
  return (
    <section id="about-us" className='opacity30 justified' >
      <Container className='contenedor-imagenes'>
      <div className=" ">
        <h2>¡Bienvenidos a hidden user!</h2> {/* Agrega el h2 para el título de esta sección */}
        <p>
        ¡Hola a todos! Somos chelops60, fvelasg y turko_samur, tres apasionados del gaming que no podemos resistirnos al potencial que Warzone nos ofrece.
         Hemos decidido tomar las riendas y darle sentido y emoción a cada partida organizando increíbles torneos.
        </p>
        <p>
        En nuestra comunidad, la buena energía y el espíritu limpio y competitivo son fundamentales. 
        Nos encanta jugar de manera chill, pero cuando nos ponemos serios, ¡somos los más pro del barrio! 😎
        </p>
        <p>
        ¿Quieres ser parte de esta experiencia inolvidable? ¡Estás a un paso de unirte a nuestros torneos!
        </p>
        <p>
        Aquí va una regla especial que nos encanta: ¡al menos un miembro del equipo debe estar haciendo stream! 
        ¡Vamos, saca ese lado streamer y comparte tus jugadas épicas con todos nosotros! Pero, claro, no te sientas obligado, 
        si todos quieren prender sus streams, ¡será una fiesta gamer total!
        </p>
        <p>
        Pero esto no es todo, necesitamos tu ayuda para hacer crecer esta comunidad. No se olviden de compartir este enlace y las redes de "hidden user" 
        con sus compas para que nuestra comunidad crezca más y más. ¡Mientras más seamos, más intensidad habrá en nuestros torneos!
        </p>
        <p>
        No olvides seguirnos en nuestras redes para estar al tanto de las últimas novedades, fechas de torneos y sorpresas que tenemos preparadas para ti.
        </p>
        <p>
        ¡Únete a nosotros en esta emocionante aventura gaming y demostremos juntos quiénes son los verdaderos campeones de Warzone!
        </p>
        <p>¡Vamos a darle!</p>
      </div>
      </Container>
    </section>
    
  );
};

export default AboutUs;
