import React,{ useState,useEffect }  from 'react';
import './css/Banner.css';
import { Container } from 'react-bootstrap';
import ReactGA from 'react-ga4';

const Banner = () => {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        // Function to detect if the screen width is below a certain threshold (e.g., 768 pixels)
        const handleResize = () => {
          setIsMobile(window.innerWidth < 768);
        };
    
        // Add event listener to handle window resize
        window.addEventListener('resize', handleResize);
    
        // Call the handleResize function once to initialize the isMobile state
        handleResize();
    
        // Clean up the event listener when the component is unmounted
        return () => {
          window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleButtonClick = () => {
      console.log("suscribete")
      ReactGA.event({
        category: 'click',
        action: 'inscribete',
      });
    };

    return (
        <section id="home" className='opacity30'>
            <Container className='contenedor-imagenes'>
            
                <picture>
                    {/* Definir la fuente de la imagen para pantallas de escritorio */}
                    <source media="(min-width: 768px)" srcSet={"/images/banner-image.png"} />
                    {/* Definir la fuente de la imagen para pantallas de móvil */}
                    <source media="(max-width: 767px)" srcSet={"/images/mov_banner-image.png"} />
                    {/* Fallback para navegadores que no soporten la etiqueta 'picture' */}
                    <img src="/images/banner-image.png" alt="Torneo warzone" className="logo-image" />
                </picture>
                <a onClick={() => handleButtonClick()} href="https://api.whatsapp.com/send/?phone=%2B573168214307&text=Hola, Me gustaria inscribirme en el torneo&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className={` ${isMobile ? 'inscribete-image-mobile' : 'inscribete-image-desktop'}`}>
                    <img  src="/images/boton-inscribete.png" alt="Inscribete"  />
                </a>
                     
            
            </Container>
        </section>
      
    );
  };
  
  export default Banner;