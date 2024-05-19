import ApartmentItem from "./ApartmentItem";
import { v4 as uuidv4 } from "uuid";
import "./../style/ApartmentsList.css";

interface Apartment {
  id: string;
  rooms: number;
  name: string;
  price: number;
  description?: string;
}

interface Props {
  apartments: Apartment[]; // Specify the type directly
  fetchApartments: Function;
}

export default function ApartmentsList({ apartments, fetchApartments }: Props) {
  return (
    <div className="apartment-list">
      {apartments.map((apartment) => (
        <ApartmentItem
          fetchApartments={fetchApartments}
          key={uuidv4()}
          id={apartment.id}
          name={apartment.name}
          rooms={apartment.rooms}
          price={apartment.price}
          description={apartment.description}
        />
      ))}
    </div>
  );
}
