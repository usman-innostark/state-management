import React, { useContext, useState } from "react";
import { MovieContext } from "../context/MovieContext";
import { v4 as uuidv4 } from "uuid";

const AddMovie = () => {
  const { moviesDispatch } = useContext(MovieContext);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  console.log("add movie re-render");

  const handlAddMovie = (e) => {
    e.preventDefault();
    if (name === "" || price === "") return;
    const id = uuidv4();
    const newMovie = { name, price, id };
    moviesDispatch({ type: "addMovie", payload: newMovie });
    setName("");
    setPrice("");
  };

  return (
    <form onSubmit={handlAddMovie}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter movie name"
      />
      <input
        type="text"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Enter movie price"
      />
      <input type="submit" name="submit" />
    </form>
  );
};

export default AddMovie;
