import React from 'react';
import './css/Banner.css';
import { Container } from 'react-bootstrap';

const Banner = () => {
    return (
        <section id="home">
            <Container>
            <div className="" >
                <img src="/images/banner-image.png" alt="Torneo warzone" />
            </div>
            </Container>
        </section>
      
    );
  };
  
  export default Banner;