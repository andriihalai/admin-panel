import React from "react";
import "./App.css";
import ApartmentForm from "./components/ApartmentForm";

function App() {
  return (
    <div className="App">
      <h1>Apartments Marketplace</h1>
      <div className="container">
        <h2>&#129297; Create a new rent</h2>
        <ApartmentForm />
      </div>
      <div className="apartments-list-container">
        <h2>&#127969;Available Apartments (number)</h2>
        <form className="sorting-form">
          <label htmlFor="rooms">Rooms:</label>
          <input type="number" className="apartment-sort-option" />
          <label htmlFor="price">Sort by price:</label>
          <select
            name="price"
            className="apartment-sort-option"
            id="price-sort-dropdown"
            defaultValue=""
            // onChange={}
          >
            <option value="asc">Lowest first</option>
            <option value="desc">Highest first</option>
            <option value="">None</option>
          </select>
        </form>
      </div>
    </div>
  );
}

export default App;
