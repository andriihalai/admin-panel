import FilterForm from "./FilterForm";
import ApartmentsList from "./ApartmentsList";
import "./../style/AvailableApartments.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function AvailableApartments() {
  const [apartments, setApartments] = useState([]);

  const handleSubmit = (apartments: any) => {
    setApartments(() => apartments);
  };

  useEffect(() => {
    axios
      .get("http://localhost:8000/apartments")
      .then((response) => setApartments(response.data))
      .catch((error) => console.error("Error fetching apartments:", error));
  }, []);

  return (
    <>
      <div className="apartments-list-container">
        <h2>&#127969; Available Apartments ({apartments.length})</h2>
        <FilterForm handleSubmit={handleSubmit} />
      </div>
      <ApartmentsList apartments={apartments} />
    </>
  );
}
