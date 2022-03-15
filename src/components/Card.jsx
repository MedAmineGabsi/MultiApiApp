import React from "react";
import { Link } from "react-router-dom";
import "./Card.scss";

const Card = ({ country, id }) => {
  const buttonStyle = {
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#000",
    color: "#fff",
    padding: "5px",
    marginLeft: "10px",
    cursor: "pointer",
  };

  return (
    <>
      <div className="card">
        <div className={`face face1 face-color`}>
          <div className="content">
            <h3 align="center">{country.name}</h3>
            <br />
            <Link to={`/country/${id}`}>
              <button style={buttonStyle}>Get More Info</button>
            </Link>
          </div>
        </div>
        <div className={`face face2 face-bg`}>
          <img
            src={country.flag}
            style={{ height: "7rem", width: "12rem" }}
            alt={country.name}
          />
        </div>
      </div>
    </>
  );
};

export default Card;
