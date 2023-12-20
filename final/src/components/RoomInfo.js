import React from 'react';

const RoomInfo = () => (
  <section id="room-info">

<h1 className="t-heading"><span className="text-primary">RETREAT INTO YOUR PRIVATE SANCTUARY</span></h1>
<div class="section-divider"></div>
  <p>
  Here, every moment of your stay is a thoughtfully curated experience. Our three collections each offer a unique selection of rooms and suites, meticulously designed and tailored to your individual needs and desires. Wake up to spectacular views of your choice ― Gardens by the Bay, the idyllic sea, or the city skyline. Enjoy privileged access to our world-famous rooftop infinity pool. Indulge in a world of dining, shopping, and entertainment options available right at your doorstep.
  </p><br/><br/><br/><br/><br/><br/>

  <div class="section-divider"></div>
  <h1 className="l-heading"><span className="text-primary">ROOMS & SUITES</span></h1>
  <br/>
  <div class="image-row">
    <div class="image-container">
      <img src="/img/room-1.jpg" alt="Описание 1"/>
      <div class="image-description">
      <h1 className="l-heading"><span className="text-primary">DELUXE SUITE</span></h1>
        <p>Experience elevated luxury living in our newly restored rooms and suites. Impeccably designed and fitted with stylish furnishings, including a bespoke Armoire, that reflect our love for refined craftsmanship.1</p>
      </div>
    </div>
    
    <div class="image-container">
      <img src="/img/room-2.jpg" alt="Описание 2"/>
      <div class="image-description">
      <h1 className="l-heading"><span className="text-primary">COMFORT ROOM</span></h1>
        <p>Unveiling a world of unrivalled hospitality, our ultra-luxurious residential-style suites are located on the highest floors of the hotel. Exquisitely designed, artfully curated and served by our 24-hour butler team. Reserved for our most distinguished guests.</p>
      </div>
    </div>
    
    <div class="image-container">
      <img src="/img/room-3.jpg" alt="Описание 3"/>
      <div class="image-description">
      <h1 className="l-heading"><span className="text-primary">STANDART ROOM</span></h1>
        <p>Experience our classic hospitality in a selection of rooms with unparalleled views of Singapore. Ideal for business and leisure travellers alike.</p>
      </div>
    </div>
  </div>
  <br/><br/><br/><br/><br/><br/>
  <div className="container">

  <h1 className="l-heading"> <span className="text-primary">MORE HOTEL EXPERIENCES</span></h1>
  <div class="section-divider"></div>
      <div className="experience-item">
        <img src="/img/exp-1.jpg" alt="Experience 1" />
        <h1 className="l-heading"><span className="text-primary">SKYPARK OBSERVATION DECK</span></h1>
        <p>Take in panoramic vistas of the Marina Bay area, the Gardens by the Bay and the idyllic sea.</p>
      </div>


      <div className="experience-item">
        <img src="/img/exp-2.jpg" alt="Experience 2" />
        <h1 className="l-heading"><span className="text-primary">FITNESS CENTRE</span></h1>
        <p>Work up a sweat at our 24-hour gym, fully equipped with state-of-the-art facilities. Personal training with certified trainers available upon request.</p>
      </div>


      <div className="experience-item">
        <img src="/img/exp-3.jpg" alt="Experience 3" />
        <h1 className="l-heading"><span className="text-primary">CLUB LOUNGES</span></h1>
        <p>Exclusive access to The Club at Renku for guests staying at selected rooms and suites, serving complimentary breakfast, afternoon tea, evening beverages and canapies.</p>
      </div>


      <div className="experience-item">
        <img src="/img/exp-4.jpg" alt="Experience 4" />
        <h1 className="l-heading"><span className="text-primary">BANYAN TREE SPA</span></h1>
        <p>Escape into pure bliss and awaken your senses with a full range of holistic treatment.</p>
      </div>
    </div>
    <br />
  </section>
);

export default RoomInfo;