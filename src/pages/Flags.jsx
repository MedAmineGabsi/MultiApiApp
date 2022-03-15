import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "../components/Loader";
import Countries from "../components/Countries";
import "./Loading.css";

const Flags = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v2/all")
      .then((res) => {
        setCountries(res.data);
        console.log(res.data);
        setLoading(true);
      })
      .catch((err) => console.warn(err));
  }, []);
  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-row">
          <Loader />
        </div>
      </div>
    );
  } else {
    return <Countries country={countries} />;
  }
};

export default Flags;
