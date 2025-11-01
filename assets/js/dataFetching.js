"use strict";

// JSON
// const users = [
//   { id: 1, name: "Test", isMale: false, birthday: null },
//   { id: 2, name: "John" },
// ];

// // js -> json
// const usersInJson = JSON.stringify(users);
// console.log(usersInJson);
// //[{"id":1,"name":"Test","isMale":false,"birthday":null},{"id":2,"name":"John"}]

// // json -> js
// const usersFromJson = JSON.parse(usersInJson);
// console.log(usersFromJson);

// Data fetching
const WEATHER_URL =
  "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,precipitation,wind_speed_10m&timezone=auto";

const tempUnitBtn = document.querySelector(".tempUnitBtn");
let isCelsij = true;

updateChangeUnitBtn();
getWeatherData();

tempUnitBtn.addEventListener("click", changeTempUnit);

// Коли натиснули на кнопку - оновити напис на кнопці і заново завантажити дані
function changeTempUnit() {
  isCelsij = !isCelsij;
  updateChangeUnitBtn();
  getWeatherData();
}

// Оновити напис на кнопці
function updateChangeUnitBtn() {
  tempUnitBtn.textContent = `Switch to ${isCelsij ? "F" : "C"}`;
}

// Завантажити дані. Коли завантажено - оновити погоду на сторінці
function getWeatherData() {
  // Задати URL
  fetch(`${WEATHER_URL}${isCelsij ? "" : "&temperature_unit=fahrenheit"}`)
    .then((response) => response.json())
    .then((data) => updateWeather(data)) // Використати data
    .catch((error) => console.log("error :>> ", error));
}

function updateWeather(weatherData) {
  const {
    current: { temperature_2m, precipitation, wind_speed_10m },
    current_units: {
      temperature_2m: temperature_2m_units,
      precipitation: precipitation_units,
      wind_speed_10m: wind_speed_10m_units,
    },
  } = weatherData;

  const weatherArticle = document.querySelector(".weather");

  weatherArticle.innerHTML = `
      <p style="color: ${calcTemperatureColor(temperature_2m)}">
        ${temperature_2m} ${temperature_2m_units}
      </p>
      <p> ${precipitation} ${precipitation_units}</p>
      <p> ${wind_speed_10m} ${wind_speed_10m_units}</p>
    `;
}

function calcTemperatureColor(t) {
  if (t <= 0) {
    return "blue";
  } else if (t > 0 && t <= 25) {
    return "green";
  } else {
    return "red";
  }
}
