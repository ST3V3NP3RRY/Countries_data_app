import React from "react";

function CountriesList({ countries, changeHandler }) {
  function onChange(evt) {
    const numericCode = evt.target.value;
    changeHandler(numericCode);
  }

  const options = countries.map((country) => {
    return (
      <option value={country.numericCode} key={country.numericCode}>
        {country.name}
      </option>
    );
  });

  return (
    <>
      <span>Select a Country:</span>
      <select onChange={onChange}>{options}</select>
    </>
  );
}

export default CountriesList;
