import axios from "axios";
import React, { useEffect, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";
import Weather from "./Weather";

function App() {
  const [lat, setLat] = useState();
  const [lng, setLng] = useState();
  const [data, setData] = useState(null);
  const [location, setLocation] = useState("");
  const WEATHER_API_KEY = "12eb0e10d820efd6b52c4229a59b9e34";

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${WEATHER_API_KEY}`;
  const search_url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${WEATHER_API_KEY}`;

  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = async () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
      });
    }
  };

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(search_url).then((response) => {
        setData(response.data);
      });
      setLocation("");
    }
  };

  const getWeather = () => {
    axios.get(url).then((response) => {
      setData(response.data);
      console.log(data);
    });
  };
  return (
    <div
      className="flex flex-col items-center h-screen space-y-10 bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url("https://i.ibb.co/MSyK57m/image.png")`,
      }}
    >
      <div className="flex items-center px-2 py-1 mt-5 border border-white rounded-2xl bg-gray-700/30">
        <TiLocationArrow
          className="w-10 h-10 text-gray-200 cursor-pointer"
          onClick={getWeather}
        />
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          placeholder="Enter Location"
          type="text"
          onKeyPress={searchLocation}
          className="px-2 py-3 text-lg text-white bg-transparent outline-none rounded-2xl placeholder:text-white/40 "
        />
      </div>
      <div>{data ? <Weather weather={data} /> : ""}</div>
    </div>
  );
}

export default App;
