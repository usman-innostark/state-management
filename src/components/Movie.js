import React, { useContext } from "react";
import { MovieContext } from "../context/MovieContext";

const Movie = ({ name, price, id }) => {
  const { moviesDispatch } = useContext(MovieContext);
  return (
    <>
      <div>
        <h3>{name}</h3>
        <p>{price}</p>
      </div>
      <button
        onClick={() => moviesDispatch({ type: "removeMovie", payload: id })}
      >
        remove
      </button>
    </>
  );
};

export default Movie;
