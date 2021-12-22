import React, { useContext, useRef } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getCityInfo } from "./state/weather-actions";
import './assets/styles/App.scss';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import ThemeContext from './contexts/ThemeContext';
import City from './pages/cities/City';
import { StateObject } from './types/state';

function App() {
  const { theme } = useContext(ThemeContext);
  const dispatch = useDispatch();
  const state = useSelector((state) => state) as StateObject;
  const inputEl = useRef();
  // const Cities = ["Jerusalem", "London", "Chicago", "Moscow", "Bangkok"];

  const handleCityInfo = () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const cityName: string = inputEl.current?.value as string;

    return dispatch(getCityInfo(cityName));
  };

  return (
    <div className={`App ${theme}`}>
      <BrowserRouter>
        <Header />
        <h1>write a city (starting with capital letters)</h1>
        {console.log(state)}
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-ignore */}
        <input ref={inputEl} type="text" placeholder="city">
        </input>
        <button onClick={handleCityInfo}>DISPATCH ME</button>
        {state.weather.name ? <City city={state.weather} /> : ""}
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
