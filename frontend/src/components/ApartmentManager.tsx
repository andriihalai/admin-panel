import axios from "axios";
import { useState } from "react";
import ApartmentForm from "./ApartmentForm";
import AvailableApartments from "./AvailableApartments";

export default function ApartmentManager() {
  const [apartments, setApartments] = useState([]);

  const fetchApartments = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}`)
      .then((response) => setApartments(response.data))
      .catch((error) => console.error("Error fetching apartments:", error));
  };

  return (
    <>
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
    </>
  );
}
