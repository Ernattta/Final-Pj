import React from 'react';

const AboutShowcase = () => (
  <div id="showcase">
    <div className="container">
      <video src="/video/video-dine.mp4" type="video/mp4" autoPlay muted loop/>
      <div className="effects"></div>
      <div className="showcase-content">
        <h1>EXPERIENCE THE<br/>ART OF DINING</h1>
      </div>
    </div>
  </div>
);

export default AboutShowcase;