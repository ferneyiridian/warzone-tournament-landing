import React from 'react';

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 " >
      <div className="container">
        <div className="row">
          <div className="col-md-4 redes">
            <h2>Siguenos en:</h2>
          </div>
          <div className="col-md-8 row">
            <div className="col-2 redes">
              <img src="/images/twitch-logo.png" alt="Twitch"  />
              <a href="https://twitch.com/torneoschimbitas" target="_blank" rel="noopener noreferrer"></a>
            </div>
            <div className="col-2 redes">
              <img src="/images/discord-logo.png" alt="Discord" />
              <a href="https://discord.com/torneoschimbitas" target="_blank" rel="noopener noreferrer"></a>
            </div>
            <div className="col-2 redes">
              <img src="/images/kick-logo.png" alt="YouTube" />
              <a href="https://kick.com/hidden-user" target="_blank" rel="noopener noreferrer"></a>
            </div>
            <div className="col-2 redes">
              <img src="/images/youtube-logo.png" alt="YouTube" />
              <a href="https://youtube.com/torneoschimbitas" target="_blank" rel="noopener noreferrer"></a>
            </div>
            <div className="col-2 redes">
              <img src="/images/instagram_logo.png" alt="YouTube" />
              <a href="https://www.instagram.com/hiddenuser_col/" target="_blank" rel="noopener noreferrer"></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
