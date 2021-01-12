// We Must Import the React Library
import React from "react";

// Define a function that is our component, always make sure to declare the props parameter so you can use props in your component
const Form = (props) => {
    //State to hold the data of our form
  const [formData, setFormData] = React.useState({
    searchterm: "",
  });

   //handleChange - updates formData when we type into form, event handler should always be passed the event, which is conventionally called event but could be called anything
   const handleChange = (event) => {
    console.log("event", event)
    
    //use the event object to detect key and value to update, ...formData keeps the form data plus anything you put after it. Accessing the name property below then : the value
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  //create function for when form is submitted
  const handleSubmit = (event) => {
      //prevent page from refreshing on form submission
      event.preventDefault();
      //pass search term to movies prop
      props.moviesearch(formData.searchterm)
  }


  //The component must return some JSX
  return (
      <div>
          <form onSubmit={handleSubmit}>
          <input
          type="text"
          name="searchterm"
          //on change because the value of the search term is changing. Not onclick.
          value={formData.searchterm} onChange={handleChange}/>
        <input type="submit" value="submit" />
          </form>
      </div>
  );
};

// We must export the component to use it in other files
export default Form;