import React, { useState } from "react";
import Card from "./Card";
import "./Countries.css";

const Countries = ({ country }) => {
  const [search, setSearch] = useState("");

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
      <div className="flex-container">
        {filteredCountry.map((e, index) => (
          <Card key={index} country={e} id={index} />
        ))}
      </div>
    </div>
  );
};

export default Countries;
