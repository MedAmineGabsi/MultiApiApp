import {
  FAIL_COUNTRY_DATA,
  REQUEST_COUNTRY_DATA,
  SUCCESS_COUNTRY_DATA,
} from "../constants/flags";

const countriesCounter = (state = { loading: true, countries: [], fetched: false }, action) => {
  switch (action.type) {
    case REQUEST_COUNTRY_DATA:
      return { loading: true, countries: [], fetched: false };
    case SUCCESS_COUNTRY_DATA:
      return { loading: false, countries: action.payload, fetched: true };
    case FAIL_COUNTRY_DATA:
      return { loading: true, countries: [], fetched: false };
    default:
      return state;
  }
};

export default countriesCounter;
