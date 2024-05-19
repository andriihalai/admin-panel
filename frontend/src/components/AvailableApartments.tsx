import FilterForm from "./FilterForm";
import ApartmentsList from "./ApartmentsList";
import "./../style/AvailableApartments.css";
import { useEffect, useState, useCallback } from "react";
import axios from "axios";

interface IAvailableApartments {
  apartments: any;
  setApartments: Function;
  fetchApartments: Function;
}

export default function AvailableApartments({
  apartments,
  setApartments,
  fetchApartments,
}: IAvailableApartments) {
  // const [apartments, setApartments] = useState([]);

  const handleSubmit = useCallback((apartments: any) => {
    setApartments(apartments);
  }, []);

  useEffect(() => {
    fetchApartments();
  }, []);

  // const fetchApartments = () => {
  //   axios
  //     .get("http://localhost:8000/apartments")
  //     .then((response) => setApartments(response.data))
  //     .catch((error) => console.error("Error fetching apartments:", error));
  // };

  return (
    <>
      <div className="apartments-list-container">
        <h2>&#127969; Available Apartments ({apartments.length})</h2>
        <FilterForm handleSubmit={handleSubmit} />
      </div>
      <ApartmentsList
        apartments={apartments}
        fetchApartments={fetchApartments}
      />
    </>
  );
}
