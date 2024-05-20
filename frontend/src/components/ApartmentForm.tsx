import React, { useState } from "react";
import "./../style/ApartmentForm.css";
import Input from "./Input";
import ErrorMessage from "./ErrorMessage";
import axios from "axios";
import { object, string, number, ValidationError } from "yup";

interface IApartmentForm {
  fetchApartments: Function;
}

export default function ApartmentForm({ fetchApartments }: IApartmentForm) {
  const [formData, setFormData] = useState({
    rooms: 0,
    name: "",
    price: 0,
    description: "",
  });

  const [error, setError] = useState("");

  const apartmentSchema = object({
    rooms: number().required().positive().integer(),
    name: string().required().min(1).max(98),
    price: number().required().positive(),
    description: string().optional().max(998),
  });

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const apartment = await apartmentSchema.validate(formData, {
        abortEarly: false,
      });
      setError("");
      console.log(process.env.HOST);
      await axios.post(
        `${process.env.REACT_APP_APARTMENTS_URL}`,
        formData
      );
      fetchApartments();

      setFormData({
        rooms: 0,
        name: "",
        price: 0,
        description: "",
      });
    } catch (err) {
      if (err instanceof ValidationError) {
        setError(err.errors.join(", "));
      }
      console.log(err);
    }
  };

  return (
    <>
      <form className="apartment-form" onSubmit={handleSubmit}>
        <Input
          title="Name"
          id="apartment-title"
          type="text"
          name="name"
          placeholder="Ex. Flat in the city center"
          value={formData.name}
          handleInput={handleInput}
          isRequired={true}
          maxLength={98}
        />
        <Input
          title="Rooms"
          id="rooms-count"
          type="number"
          name="rooms"
          placeholder="4"
          value={formData.rooms}
          min={1}
          handleInput={handleInput}
          isRequired={true}
        />
        <Input
          title="Price"
          id="apartment-price"
          type="number"
          name="price"
          step="0.01"
          placeholder="0.01"
          value={formData.price}
          min={0.01}
          handleInput={handleInput}
          isRequired={true}
        />
        <Input
          title="Description"
          id="apartment-description"
          type="text"
          name="description"
          placeholder="Your description here"
          value={formData.description}
          handleInput={handleInput}
          maxLength={998}
        />
        <button className="create-apartment-btn" type="submit">
          Submit rent
        </button>
      </form>
      {{ error } && <ErrorMessage message={error} />}
    </>
  );
}
