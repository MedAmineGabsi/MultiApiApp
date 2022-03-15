import {
  FAIL_COVID_DATA,
  REQUEST_COVID_DATA,
  SUCCESS_COVID_DATA,
} from "../constants/covid";

const covidCounter = (state = { loading: true, covid: [] }, action) => {
  switch (action.type) {
    case REQUEST_COVID_DATA:
      return { loading: true, covid: [] };
    case SUCCESS_COVID_DATA:
      return { loading: false, covid: action.payload };
    case FAIL_COVID_DATA:
      return { loading: true, covid: [] };
    default:
      return state;
  }
};

export default covidCounter;
