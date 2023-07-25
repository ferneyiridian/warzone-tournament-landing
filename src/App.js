import React from 'react';
import Banner from './components/Banner';
import PrizePlan from './components/PrizePlan';
import TournamentRules from './components/TournamentRules';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import './App.scss';
import { Navbar, Nav } from 'react-bootstrap';

const App = () => {
  return (
    <div className="app">
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">
          <img src="/images/logo.png" alt="Logo" className="logo-image" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#prize-plan">Plan de Premios</Nav.Link>
            <Nav.Link href="#tournament-rules">Reglas del Torneo</Nav.Link>
            <Nav.Link href="#about-us">Quiénes Somos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
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
