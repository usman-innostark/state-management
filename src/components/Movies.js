import React, { useContext, useEffect } from "react";
import Movie from "./Movie";
import { MovieContext } from "../context/MovieContext";

const Movies = () => {
  const { movies } = useContext(MovieContext);

  return (
    <div>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          name={movie.name}
          price={movie.price}
          id={movie.id}
        />
      ))}
    </div>
  );
};

export default Movies;
