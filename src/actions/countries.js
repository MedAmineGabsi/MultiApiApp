import { REQUEST_COUNTRY_DATA, SUCCESS_COUNTRY_DATA } from "../constants/flags";

export const addCountries = (countries) => {
  return {
    type: SUCCESS_COUNTRY_DATA,
    payload: countries,
  };
};

export const getCountries = () => {
  return {
    type: REQUEST_COUNTRY_DATA,
  };
};
