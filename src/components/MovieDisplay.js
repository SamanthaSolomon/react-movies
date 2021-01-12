// We Must Import the React Library
import React from "react";

// Define a function that is our component, always make sure to declare the props parameter so you can use props in your component
const MovieDisplay = ({movie}) => {
  //The component must return some JSX, but don't want it rendered before available, so..

  //create function for JSX to return when movie info is loaded
  const loaded = () => {
  return ( 
    <>
      <h1>{movie.Title}</h1>
      <h2>{movie.Genre}</h2>
      <img src={movie.Poster} alt={movie.Title} />
      <h2>{movie.Year}</h2>
    </>
    )  
};
//function to return loading JSX, when no movie to display
const loading = () => {
    return <h1>No Movie to Display</h1>;
  };
  
  //terinary operator to crate if else logic
  return movie ? loaded() : loading () 

}

// We must export the component to use it in other files
export default MovieDisplay;