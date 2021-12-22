import * as whetherTypes from "./weather-types";
import axios from "axios";
import { Dispatch } from "react";
import { Weather } from "../types/weather";
import { Action } from "../types/state";

export const getCityInfo = (cityName: string) => async (dispatch: Dispatch<Action>) => {
  console.log(cityName);
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=10b0d2b58718b705da51157712a6320e`
  );

  const weather: Weather = {
    name: response.data.name as string,
    temp: response.data.main.temp as number,
    windSpeed: response.data.wind.speed as number,
    description: response.data.weather[0].description as string,
    clouds: response.data.main["clouds"] as string,
  };

  dispatch({
    type: whetherTypes.GET_CITY_INFO,
    payload: {
      weather: weather,
    },
  });
};
