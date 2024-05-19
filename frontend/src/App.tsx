import React, { useState } from "react";
import "./App.css";
import ApartmentForm from "./components/ApartmentForm";
import AvailableApartments from "./components/AvailableApartments";
import axios from "axios";

function App() {
  const [apartments, setApartments] = useState([]);

  const fetchApartments = () => {
    axios
      .get("http://localhost:8000/apartments")
      .then((response) => setApartments(response.data))
      .catch((error) => console.error("Error fetching apartments:", error));
  };

  return (
    <div className="App">
      <h1>Apartments Marketplace</h1>
      <div className="container">
        <h2>&#129297; Create a new rent</h2>
        <ApartmentForm fetchApartments={fetchApartments} />
      </div>
      <AvailableApartments
        apartments={apartments}
        setApartments={setApartments}
        fetchApartments={fetchApartments}
      />
    </div>
  );
}

export default App;
