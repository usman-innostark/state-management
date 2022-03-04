import React, { useReducer, createContext } from "react";
import moviesReducer from "./reducers/moviesReducer";
import initialState from "./initialState";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [state, dispatch] = useReducer(moviesReducer, initialState);
  return (
    <MovieContext.Provider
      value={{ movies: state.moviesList, moviesDispatch: dispatch }}
    >
      {props.children}
    </MovieContext.Provider>
  );
};
