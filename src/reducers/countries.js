import {
  FAIL_COUNTRY_DATA,
  REQUEST_COUNTRY_DATA,
  SUCCESS_COUNTRY_DATA,
} from "../constants/flags";

const countriesCounter = (state = { loading: true, countries: [] }, action) => {
  switch (action.type) {
    case REQUEST_COUNTRY_DATA:
      return { loading: true, countries: [] };
    case SUCCESS_COUNTRY_DATA:
      return { loading: false, countries: action.payload };
    case FAIL_COUNTRY_DATA:
      return { loading: true, countries: [] };
    default:
      return state;
  }
};

export default countriesCounter;
