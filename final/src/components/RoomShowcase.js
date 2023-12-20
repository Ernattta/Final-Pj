import React from 'react';

const RoomShowcase = () => (
  <div id="showcase">
    <div className="container">
      <video src="/video/video-room.mp4" type="video/mp4" autoPlay muted loop/>
      <div className="effects"></div>
      <div className="showcase-content">
        <h1>CHECK INTO A WORLD<br/>OF POSSIBILITIES</h1>
      </div>
    </div>
  </div>
);

export default RoomShowcase;