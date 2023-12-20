import React, { useState } from 'react';
import Select from 'react-select';

const roomTypeOptions = [
  { label: 'Standart room', value: 'Standart room' },
  { label: 'Comfort room', value: 'Comfort room' },
  { label: 'Deluxe suite', value: 'Deluxe suite' },
];

const getCurrentDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = (today.getMonth() + 1).toString().padStart(2, '0');
  const day = today.getDate().toString().padStart(2, '0');
  return `${year}-${month}-${day}`;
};

const ContactForm = () => {
  const [checkInDate, setCheckInDate] = useState(getCurrentDate());
  const [checkOutDate, setCheckOutDate] = useState(getCurrentDate());

  const handleCheckInChange = (e) => {
    setCheckInDate(e.target.value);
  };

  const handleCheckOutChange = (e) => {
    const selectedDate = e.target.value;
    if (selectedDate >= checkInDate) {
      setCheckOutDate(selectedDate);
    }
  };

  const [adultsCount, setAdultsCount] = useState(1);
  const [kidsCount, setKidsCount] = useState(0);

  const handleAdultsChange = (e) => {
    setAdultsCount(parseInt(e.target.value, 10));
  };

  const handleKidsChange = (e) => {
    setKidsCount(parseInt(e.target.value, 10));
  };

  const handleBookClick = () => {
    const nameInput = document.getElementById('name'); 
    const numberInput = document.getElementById('number'); 
    const emailInput = document.getElementById('email');
  
    if (!checkInDate || !checkOutDate || !nameInput.value || !numberInput.value || !emailInput.value) {
      alert('Please fill in all required fields');
    } else {
      alert('Booking successful!');
    }
  };

  return (
    <section id="contact-form" className="py-3">
      <br/><br/><br/><br/>
      <div className="container">
        {renderInput("Name", "Your name", "name", "text", true)}
        {renderInput("Surname", "Your surname", "surname", "text", true)}
        {renderInput("Email", "student@iitu.edu.kz", "email", "email")}
        {renderInput("Number", "+7", "number", "tel", true)}
        {renderDateInput(
          "dateOfArrival",
          "Check in:",
          checkInDate,
          handleCheckInChange
        )}
        {renderDateInput(
          "dateOfLeaving",
          "Check out:",
          checkOutDate,
          handleCheckOutChange,
          getCurrentDate()
        )}
        <div className="form-group-roomType" key="roomType">
          <label htmlFor="roomType">Room type</label>
          <Select
            id="roomType"
            name="room-type"
            options={roomTypeOptions}
            placeholder="Select room type"
          />
        </div>
        {renderCountBox("adultsCount", "Adults", adultsCount, handleAdultsChange)}
        {renderCountBox("kidsCount", "Kids", kidsCount, handleKidsChange)}
        <button type="submit" className="btn" onClick={handleBookClick}>
          Book
        </button>
      </div>
    </section>
  );
};

const renderCountBox = (name, label, value, onChange) => (
    <div className="form-group-countBox" key={name}>
      <label htmlFor={name}>{label}</label>
      <input
        type="number"
        name={name}
        id={name}
        min={0}
        value={value}
        onChange={onChange}
      />
    </div>
  );

const renderInput = (label, placeholder, name, type, required = false) => (
  <div className="form-group-l1" key={name}>
    <label htmlFor={name}>{label}</label>
    <br />
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      id={name}
      required={required}
    />
  </div>
);

const renderDateInput = (name, label, value, onChange, min) => (
  <div className="form-group-l1" key={name}>
    <label htmlFor={name}>{label}</label>
    <br />
    <input
      type="date"
      name={name}
      id={name}
      value={value}
      onChange={onChange}
      required
      min={min}
    />
  </div>
);



export default ContactForm;