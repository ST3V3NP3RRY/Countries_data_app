import React from "react";

const TotalPopulation = ({ countries }) => {
  //   for (let country of countries) {
  //     console.log(country.population);
  //   }

  //   const countryTotalPop = countries.map((country) => {
  //     return country.population;
  //   });

  //   const worldPop = countryTotalPop.reduce((total, population) => {
  //     return total + population;
  //   }, 0);

  const worldPop = countries.reduce((total, country) => {
    return total + country.population;
  }, 0);

  return (
    <>
      <p>Total Population of Earth</p>
      <h3>{worldPop} billion</h3>
    </>
  );
};

export default TotalPopulation;
