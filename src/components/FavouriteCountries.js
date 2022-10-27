import React, { useState } from "react";

const FavouriteCountries = ({ country }) => {
  const [favCountry, setFavCountry] = useState([]); //set up useState to add favourite Countries

  function handleClick() {
    // Handle the click event, when button is clicked add the country to favourites
    const copyFavCountry = [...favCountry];
    copyFavCountry.push(country.name);
    setFavCountry(copyFavCountry);
  }

  function deleteCountry(index) {
    // Delete the country from favourites
    const copyFavCountry = [...favCountry];
    copyFavCountry.splice(index, 1);
    setFavCountry(copyFavCountry);
  }

  const countryNodes = favCountry.map((addCountry, index) => {
    //loop through the favourites array and create a list item with a delete button mapping to deleteCountry function
    return (
      <li key={index}>
        {addCountry}
        <button onClick={() => deleteCountry(index)}>
          <span> X </span>
        </button>
      </li>
    );
  });

  return (
    <>
      <button onClick={handleClick} value={country.numericCode}>
        Add to Favourites
      </button>
      <h2>Your Favourite Countries:</h2>
      <ul>{countryNodes}</ul>
    </>
  );
};

export default FavouriteCountries;
