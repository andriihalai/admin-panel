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
  const handleDelete = async (e: any) => {
    await axios.delete(`http://localhost:8000/apartments/${id}`);
    await fetchApartments();
  };

  return (
    <div className="apartment-item">
      <div className="apartment-details">
        Name: {name}
        <br />
        Rooms: {rooms}
        <br />
        Price: {price}
        {description && (
          <>
            <br />
            Description: {description}
          </>
        )}
      </div>
      <button className="btn" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}
