import React from 'react';

const GoogleMap = () => (
  <section id="contact-form" className="py-3">
    <br/><br/><br/><br/>
    <div className="container">
      <h1 className="l-heading"><span className="text-primary">Find</span> Us</h1>
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2906.7763226841!2d76.90779330373142!3d43.235149118293826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3883692f027581ad%3A0x2426740f56437e63!2z0JzQtdC20LTRg9C90LDRgNC-0LTQvdGL0Lkg0YPQvdC40LLQtdGA0YHQuNGC0LXRgiDQuNC90YTQvtGA0LzQsNGG0LjQvtC90L3Ri9GFINGC0LXRhdC90L7Qu9C-0LPQuNC5!5e0!3m2!1sru!2skz!4v1697571783265!5m2!1sru!2skz"
        width="1050"
        height="600"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </section>
);

export default GoogleMap;