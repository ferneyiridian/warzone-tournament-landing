import React, { useEffect } from 'react';
import Banner from './components/Banner';
import PrizePlan from './components/PrizePlan';
import TournamentRules from './components/TournamentRules';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import './App.scss';
import { Navbar, Nav,Container  } from 'react-bootstrap';
import ReactGA from 'react-ga4';


const App = () => {
  useEffect(() => {
    ReactGA.send(
      { 
        hitType: "pageview", 
        page: window.location.pathname + window.location.search, 
        
      }
      );
  }, []);

  const handleButtonClick = (section) => {
    console.log("section",section)
    ReactGA.event({
      category: 'click',
      action: section,
    });
  };

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
              <Nav.Link href="#score-system"  onClick={() => handleButtonClick("score-system")} >Sistema de puntuación</Nav.Link>
              <Nav.Link href="#tournament-rules" onClick={() =>handleButtonClick("tournament-rules")}>Reglas del Torneo</Nav.Link>
              <Nav.Link href="#about-us" onClick={() =>handleButtonClick("about-us")}>Quiénes Somos</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Banner />
      <TournamentRules />
      <PrizePlan />
      
      <AboutUs />
      <Footer />
      
    </div>
  );
};

export default App;
