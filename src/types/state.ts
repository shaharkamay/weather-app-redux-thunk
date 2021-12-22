import { City } from "./city";
import { Weather } from "./weather";

export interface Action {
  type: string;
  payload: { city?: City, weather: Weather };
}

export interface StateObject {
  weather: Weather,
  selectedCities: City[],
}