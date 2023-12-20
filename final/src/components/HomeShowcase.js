import React from 'react';

const HomeShowcase = () => (
  <div id="showcase">
    <div className="container">
      <video src="/video/video-bg.mp4" type="video/mp4" autoPlay muted loop/>
      <div className="effects"></div>
      <div className="showcase-content">
        <h1><span className="text-primary">WELCOME TO</span><br/>A WORLD LIKE <br/>NO OTHER</h1>
        <a className="btn" href="/rooms">RESERVE</a>
      </div>
    </div>
  </div>
);

export default HomeShowcase;