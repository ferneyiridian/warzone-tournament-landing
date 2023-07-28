import React from 'react';
import Banner from './components/Banner';
import PrizePlan from './components/PrizePlan';
import TournamentRules from './components/TournamentRules';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import './App.scss';
import { Navbar, Nav,Container  } from 'react-bootstrap';

const App = () => {
  return (
    <div className="app">
      <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home" className='logo_brand'>
          <img src="/images/logo.png" alt="Logo" className="logo-image" />
        </Navbar.Brand>
        
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className='navbar-desktop'>
            <Nav className="ml-auto">
              <Nav.Link href="#score-system">Sistema de puntuación</Nav.Link>
              <Nav.Link href="#tournament-rules">Reglas del Torneo</Nav.Link>
              <Nav.Link href="#about-us">Quiénes Somos</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Banner />
      <PrizePlan />
      <TournamentRules />
      <AboutUs />
      <Footer />
      <div className="floating-button">
        <a href="https://discord.com/torneo19Ago" target="_blank" rel="noopener noreferrer">¡Inscríbete!</a>
      </div>
    </div>
  );
};

export default App;
