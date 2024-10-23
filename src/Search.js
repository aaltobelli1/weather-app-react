import "./App.css";

import React, { useState } from "react";
import axios from "axios";

export default function Search(props) {
  let [temp, setTemp] = useState(null);
  let [city, setCity] = useState("");

  function showTemp(response) {
    setTemp(response.data.main.temp);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1eab6e5dea97d6e93fb2c4fd3560f12a&units=imperial`;
    axios.get(URL).then(showTemp);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="App">
      <h1>Weather App</h1>
      <form onSubmit={handleSubmit}>
        <input type="search" onChange={updateCity} />
        <input type="submit" value="search" />
      </form>

      {temp && <p>Temperature: {temp}°</p>}
    </div>
  );
}
