import React from 'react';

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-light" >
      <div className="container">
        <div className="row">
          <div className="col-md-4 redes">
            <img src="/images/twitch-logo.jpg" alt="Twitch"  />
            <a href="https://twitch.com/torneoschimbitas" target="_blank" rel="noopener noreferrer">@torneosChimbitas</a>
          </div>
          <div className="col-md-4 redes">
            <img src="/images/discord-logo.png" alt="Discord" />
            <a href="https://discord.com/torneoschimbitas" target="_blank" rel="noopener noreferrer">@torneosChimbitas</a>
          </div>
          <div className="col-md-4 redes">
            <img src="/images/youtube-logo.png" alt="YouTube" />
            <a href="https://youtube.com/torneoschimbitas" target="_blank" rel="noopener noreferrer">@torneosChimbitas</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
