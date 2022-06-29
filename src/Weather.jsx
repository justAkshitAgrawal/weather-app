import React from "react";
import { FaMapPin } from "react-icons/fa";

function Weather({ weather }) {
  return (
    <div className="flex flex-col p-4 mt-10 text-white rounded-2xl bg-gray-800/40">
      <div className="flex items-center">
        <FaMapPin className="w-4 h-4 mr-1 text-white" />
        <h1 className="mr-40 text-3xl text-white ">{weather.name}</h1>
      </div>
      <h1 className="mb-4 ml-5 text-xs">
        {weather.coord.lat} <span className="ml-1"></span> {weather.coord.lon}
      </h1>
      <h1 className="mb-1 ml-5 text-lg">
        Temp: {(weather.main.temp - 273.15).toFixed(2)}&deg;C{" "}
      </h1>
      <h1 className="mb-1 ml-5 text-lg">
        Feels Like: {(weather.main.feels_like - 273.15).toFixed(2)}&deg;C{" "}
      </h1>
      <h1 className="mb-1 ml-5 text-lg">
        Min Temp: {(weather.main.temp_min - 273.15).toFixed(2)}&deg;C{" "}
      </h1>
      <h1 className="mb-1 ml-5 text-lg">
        Max Temp: {(weather.main.temp_max - 273.15).toFixed(2)}&deg;C{" "}
      </h1>

      <h1 className="mt-5 ml-5 text-xs uppercase">
        {weather.weather[0].main} - {weather.weather[0].description}
      </h1>
    </div>
  );
}

export default Weather;
