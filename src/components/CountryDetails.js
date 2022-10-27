import React from "react";
import FavouriteCountries from "../components/FavouriteCountries";

function CountryDetails({ country }) {
  if (!country) {
    return null;
  }

  return (
    <>
      <section>
        <h1>{country.name}</h1>
        {country.flags && (
          <img src={country.flags.svg} alt="" width="200" height="auto" />
        )}
        <p>Population: {country.population}</p>
        <h2>Languages:</h2>
        <ul>
          {country.languages &&
            country.languages.map((language) => (
              <li key={country.numericCode}>{language.name}</li>
            ))}
        </ul>
      </section>
      <FavouriteCountries country={country} />
    </>
  );
}

export default CountryDetails;
