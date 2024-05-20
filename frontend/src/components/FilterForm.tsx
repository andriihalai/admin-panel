import axios from "axios";
import { useEffect, useState } from "react";

interface IFilterForm {
  handleSubmit: any;
}

export default function FilterForm({ handleSubmit }: IFilterForm) {
  const [rooms, setRooms] = useState(0);
  const [priceOrder, setPriceOrder] = useState("");

  useEffect(() => {
    const queryOptions = {};

    if (rooms) {
      Object.assign(queryOptions, { rooms: rooms });
    }

    if (priceOrder) {
      Object.assign(queryOptions, { price: priceOrder });
    }

    axios
      .get(`${process.env.REACT_APP_API_URL}`, {
        params: queryOptions,
      })
      .then((response) => {
        handleSubmit(response.data);
      })
      .catch((error) => {
        console.error("Error fetching filtered data:", error);
      });
  }, [rooms, priceOrder, handleSubmit]);

  const handleRoomsChange = (e: any) => {
    setRooms(e.target.value);
  };

  const handlePriceOrderChange = (e: any) => {
    setPriceOrder(e.target.value);
  };

  return (
    <>
      <div className="sort-options-container">
        <label htmlFor="rooms">Rooms:</label>
        <input
          type="number"
          id="rooms"
          name="rooms"
          className="apartment-sort-option"
          onChange={handleRoomsChange}
          min={1}
        />

        <label htmlFor="price">Sort by price:</label>
        <div className="select-container">
          <select
            name="price"
            id="price"
            className="apartment-sort-option"
            defaultValue=""
            onChange={handlePriceOrderChange}
          >
            <option value="asc">Lowest first</option>
            <option value="desc">Highest first</option>
            <option value="">None</option>
          </select>
        </div>
      </div>
    </>
  );
}
