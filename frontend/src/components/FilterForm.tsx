import axios from "axios";
import { FormEventHandler, useEffect, useState } from "react";

interface IFilterForm {
  handleSubmit: FormEventHandler<HTMLFormElement>;
}

export default function FilterForm({ handleSubmit }: IFilterForm) {
  const [rooms, setRooms] = useState(0);
  const [priceOrder, setPriceOrder] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8000/apartments", {
        params: {
          rooms: rooms,
          price: priceOrder,
        },
      })
      .then((response) => {
        handleSubmit(response.data);
      })
      .catch((error) => {
        console.error("Error fetching filtered data:", error);
      });
  }, [rooms, priceOrder, handleSubmit]);

  const handleRoomsChange = (e: any) => {
    setRooms(() => e.target.value);
  };

  const handlePriceOrderChange = (e: any) => {
    setPriceOrder(() => e.target.value);
  };

  return (
    <>
      <form className="sorting-form" onSubmit={handleSubmit}>
        <label htmlFor="rooms">Rooms:</label>
        <input
          type="number"
          className="apartment-sort-option"
          onChange={handleRoomsChange}
        />

        <label htmlFor="price">Sort by price:</label>
        <select
          name="price"
          className="apartment-sort-option"
          id="price-sort-dropdown"
          defaultValue=""
          onChange={handlePriceOrderChange}
        >
          <option value="asc">Lowest first</option>
          <option value="desc">Highest first</option>
          <option value="">None</option>
        </select>
      </form>
    </>
  );
}
