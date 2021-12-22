import {
  // createStore,
  // applyMiddleware,
  configureStore,
} from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";

import weatherReducer from "../state/weather-reducer";
// import weatherMiddleware from "../middleware/weather-middleware";

export const store = configureStore(
  { reducer: weatherReducer },
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  composeWithDevTools()
);
