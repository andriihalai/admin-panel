import React from 'react';
import './../style/ApartmentForm.css';

export default function ApartmentForm() {
  return (
    <form className="apartment-form">
      <fieldset className="form-fieldset">
        <label htmlFor="apartment-title">Title</label>
        <input
          type="text"
          className="form-input"
          id="apartment-title"
          name="apartment-title"
          placeholder="Ex. Flat in the city center"
        />
      </fieldset>
      <fieldset className="form-fieldset">
        <label htmlFor="rooms-count">Number of rooms</label>
        <input
          type="number"
          className="form-input"
          id="rooms-count"
          name="rooms-count"
          placeholder="4"
        />
      </fieldset>
      <fieldset className="form-fieldset">
        <label htmlFor="apartment-price">Rent Price</label>
        <input
          type="number"
          className="form-input"
          id="apartment-price"
          name="apartment-price"
          placeholder="99.00"
        />
      </fieldset>
      <fieldset className="form-fieldset">
        <label htmlFor="apartment-description">Description</label>
        <input
          type="text"
          className="form-input"
          id="apartment-description"
          name="apartment-description"
          placeholder="Your description here"
        />
      </fieldset>
      <button type="submit">Submit rent</button>
    </form>
  );
}
