import "./../style/ApartmentItem.css";
import axios from "axios";

interface IApartmentItem {
  id: string;
  name: string;
  rooms: number;
  price: number;
  description?: string;
}

export default function ApartmentItem({
  id,
  name,
  rooms,
  price,
  description,
}: IApartmentItem) {
  const handleDelete = (e: any) => {
    axios.delete(`http://localhost:8000/apartments/${id}`);
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
