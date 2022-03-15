import React, { useState } from "react";
import { useSelector } from "react-redux";
import Card from "./Card";
import "./Countries.css";

const Countries = () => {
  const [search, setSearch] = useState("");
  const country = useSelector((state) => state.countriesCounter.countries);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCountry = country.filter((land) =>
    land.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div style={{ height: "93%", backgroundColor: "#000" }}>
      <div className="search-panel">
        <h1 className="country-text">Search a country</h1>
        <form>
          <input
            type="text"
            placeholder="Search"
            className="country-input"
            onChange={handleChange}
          />
        </form>
      </div>
      <div>
        <h2 align="center" style={{ color: "#fff" }}>
          {filteredCountry.length} country found
        </h2>
      </div>
      <div className="flex-container">
        {filteredCountry.map((e, index) => (
          <Card key={index} country={e} id={index} />
        ))}
      </div>
    </div>
  );
};

export default Countries;
