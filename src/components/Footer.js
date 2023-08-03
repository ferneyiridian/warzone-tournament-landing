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
              <a href="https://twitch.com/hiddenuser60" target="_blank" rel="noopener noreferrer">
                <img src="/images/twitch-logo.png" alt="Twitch"  />
              </a>
            </div>
            <div className="col-2 redes">
              <a href="https://discord.gg/5VgMPKPJ" target="_blank" rel="noopener noreferrer">
                <img src="/images/discord-logo.png" alt="Discord" />
              </a>
            </div>
            <div className="col-2 redes">
              <a href="https://kick.com/hidden-user" target="_blank" rel="noopener noreferrer">
                <img src="/images/kick-logo.png" alt="YouTube" />
              </a>
            </div>
            <div className="col-2 redes">
              <a href="https://youtube.com/@HiddenUser60" target="_blank" rel="noopener noreferrer">
                <img src="/images/youtube-logo.png" alt="YouTube" />
              </a>
            </div>
            <div className="col-2 redes">
              <a href="https://www.instagram.com/hiddenuser_col/" target="_blank" rel="noopener noreferrer">
                <img src="/images/instagram_logo.png" alt="YouTube" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
