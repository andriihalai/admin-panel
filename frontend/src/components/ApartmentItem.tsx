import { useState } from "react";
import "./../style/ApartmentItem.css";
import axios from "axios";

interface IApartmentItem {
  id: string;
  name: string;
  rooms: number;
  price: number;
  description?: string;
  fetchApartments: Function;
}

export default function ApartmentItem({
  id,
  name,
  rooms,
  price,
  description,
  fetchApartments,
}: IApartmentItem) {
  const [showDescription, setShowDescription] = useState(false);
  const [buttonText, setButtonText] = useState("Show description");

  const handleClick = () => {
    setShowDescription(!showDescription);
    if (buttonText === "Show description") setButtonText("Hide description");
    else if (buttonText === "Hide description")
      setButtonText("Show description");
  };

  const handleDelete = async (e: any) => {
    await axios.delete(`${process.env.REACT_APP_APARTMENTS_URL}/${id}`);
    await fetchApartments();
  };

  return (
    <div className="apartment-item">
      <div className="apartment-details">
        <p>
          <b>Name</b>: {name}
        </p>
        <br />
        <p>
          <b>Rooms</b>: {rooms}
        </p>
        <br />
        <p>
          <b>Price</b>: {price}$
        </p>
        {showDescription && (
          <>
            <br />
            <p>
              <b>Description</b>: {description}
            </p>
          </>
        )}
        {description && (
          <button className="desc-btn" onClick={handleClick}>
            {buttonText}
          </button>
        )}
      </div>
      <button className="btn" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}
