import React from "react";
import "./App.css";
import ApartmentForm from "./components/ApartmentForm";
import AvailableApartments from "./components/AvailableApartments";

function App() {
  return (
    <div className="App">
      <h1>Apartments Marketplace</h1>
      <div className="container">
        <h2>&#129297; Create a new rent</h2>
        <ApartmentForm />
      </div>
      <AvailableApartments />
    </div>
  );
}

export default App;
