import './App.css';
import React from "react"

// WE IMPORT OUR COMPONENTS
import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";

function App() {
  
  //variable with APIKey
  const apiKey = "f443fd90";

  //state to hold movie data
  const [movie, setMovie] = React.useState(null)

  //Function to getMovies using async-await method that takes the search term
  const getMovie = async (searchTerm) => {
    
    // make fetch request and store response, await means it is something that returns a promise, but pauses the function until the promise is resolved (the thing after this part of the function)
    const response = await fetch(
      //injects the api key from the api key variable and the searchterm from getmovie variable
      `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
    );
    console.log ("response", response)

     // Parse JSON response into a javascript object to make it usable
     const data = await response.json();
     console.log("data", data)
     
     //store the movie data in the state using the set function
     setMovie(data);
   };

    //This will run on the first render but not on subsquent renders
    //use effect is always an empty function and then an array, empy array means function will only run once, makes sure we have somewher to put code that we dont want to render everytime the app rerenders.
    //get random movie form list
  React.useEffect(() => {
    const options = ["Clueless", "Mandy", "Eraserhead", "Airplane", "True Romance", "Wild at Heart"]
    
    getMovie(options[Math.floor(Math.random()*options.length)]);
  }, 
  []);
  
  // USE OUR COMPONENTS IN APPs RETURNED JSX to get the search result from the form component by passing it as a prop. The below recieves the prop.
  return (
    <div className="App">
      <Form moviesearch={getMovie}/>
      <MovieDisplay movie={movie}/>
    </div>
  );
}

export default App;
