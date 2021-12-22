import { City } from "../types/city";
import { Action, StateObject } from "../types/state";
import * as whetherTypes from "./weather-types";

const INITIAL_STATE: StateObject = {
  weather: {
    name: "",
    description: "",
    temp: 0,
    windSpeed: 0,
    clouds: "",
  },
  selectedCities: [],
};

const weatherReducer = (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case whetherTypes.GET_CITY_INFO:

      return { selectedCities: { ...state.selectedCities }, weather: { ...action.payload.weather } };
    case whetherTypes.EXIST_CITY:
      const cityWeather: City | undefined = state.selectedCities.find(
        (existCity: City) => existCity === action.payload.city);
      return { ...state, cityWeather };
    default:
      return { ...state };
  }
};
export default weatherReducer;
