import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./Country.css";

const Country = () => {
  const countries = useSelector((state) => state.countriesCounter.countries);
  let { name } = useParams();
  const country = countries.filter((land) => land.name.toLowerCase() === name);
  const land = country[0];
  return (
    <div className="country-container">
      <div className="country-column">
        <img id="country-flag" src={land.flag} alt="flag" />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <div className="country-row">
            <div>
              <p>Capital:</p>
            </div>
            <div>
              <p>{land.capital}</p>
            </div>
          </div>
          <div className="country-row">
            <div>
              <p>Region:</p>
            </div>
            <div>
              <p>{land.region}</p>
            </div>
          </div>
          <div className="country-row">
            <div>
              <p>Sub Region:</p>
            </div>
            <div>
              <p>{land.subregion}</p>
            </div>
          </div>
          <div className="country-row">
            <div>
              <p>Population:</p>
            </div>
            <div>
              <p>{land.population.toLocaleString()}</p>
            </div>
          </div>
          <div className="country-row">
            <div>
              <p>Nationality:</p>
            </div>
            <div>
              <p>{land.demonym}</p>
            </div>
          </div>
          <div className="country-row">
            <div>
              <p>Native Name:</p>
            </div>
            <div>
              <p>{land.nativeName}</p>
            </div>
          </div>
          <div className="country-row">
            <div>
              <p>Language:</p>
            </div>
            <div>
              <p>
                {land.languages[0].name} | {land.languages[0].nativeName}
              </p>
            </div>
          </div>
          <div className="country-row">
            <div>
              <p>Currencies:</p>
            </div>
            <div>
              <p>
                {land.currencies[0].code} | {land.currencies[0].name} |{" "}
                {land.currencies[0].symbol}
              </p>
            </div>
          </div>
          <div className="country-row">
            <div>
              <p>National Domain Name:</p>
            </div>
            <div>
              <p>{land.topLevelDomain[0]}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Country;
