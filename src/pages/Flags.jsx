import axios from "axios";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../components/Loader";
import Countries from "../components/Countries";
import "./Loading.css";
import { addCountries, getCountries } from "../actions/countries";

const Flags = () => {
  const loading = useSelector((state) => state.countriesCounter.loading);
  const fetched = useSelector((state) => state.countriesCounter.fetched);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!fetched) {
      dispatch(getCountries());
      axios
        .get("https://restcountries.com/v2/all")
        .then((res) => {
          dispatch(addCountries(res.data));
        })
        .catch((err) => console.warn(err));
    }
  }, [dispatch, fetched]);
  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-row">
          <Loader />
        </div>
      </div>
    );
  } else {
    return <Countries />;
  }
};

export default Flags;
