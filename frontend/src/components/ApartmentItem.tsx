import "./../style/ApartmentItem.css";

interface IApartmentItem {
  name: string;
  rooms: number;
  price: number;
  description?: string;
}

export default function ApartmentItem({
  name,
  rooms,
  price,
  description,
}: IApartmentItem) {
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
      <button className="btn">Delete</button>
    </div>
  );
}
