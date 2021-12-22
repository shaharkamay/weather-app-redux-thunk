import React from "react";
import '../../assets/styles/weather.scss';
import moment from "moment";
import { Weather } from "../../types/weather";

const City = ({ city }: { city: Weather }) => {
  return (
    <div className="widget">
      <div className="left-panel panel">
        <div className="date">{moment().format("dddd")}</div>
        <div className="city">{city.name}</div>
        <div className="temp">
          <img
            src="https://s5.postimg.cc/yzcm7htyb/image.png"
            alt=""
            width="60"
          />
          {Math.round(city.temp)}&deg;
        </div>
      </div>
      <div className="right-panel panel">
        <img
          className="cityImg"
          src="https://s5.postimg.cc/lifnombwz/mumbai1.png"
          alt=""
          width="160"
        />
      </div>
    </div>
  );
};
export default City;
