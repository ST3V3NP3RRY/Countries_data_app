import React, { useState, useEffect } from "react";
import CountryDetails from "../components/CountryDetails";
import CountriesList from "../components/CountriesList";
import TotalPopulation from "../components/TotalPopulation";

const CountriesContainer = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState([]);

  async function getCountries() {
    const response = await fetch("https://restcountries.com/v2/all");
    const data = await response.json();
    setCountries(data);
  }

  useEffect(() => {
    getCountries();
  }, []);

  function findCountryByNumericCode(numericCode) {
    return countries.find((country) => country.numericCode === numericCode);
  }

  return (
    <>
      <h1>Countries Data</h1>
      <TotalPopulation countries={countries} />

      <CountriesList
        countries={countries}
        changeHandler={(numericCode) => {
          const country = findCountryByNumericCode(numericCode);
          setSelectedCountry(country);
        }}
      />
      <CountryDetails country={selectedCountry} />
    </>
  );
};

export default CountriesContainer;
