<<<<<<< HEAD

=======
const input = document.getElementById('search-city');
>>>>>>> newLayout
const city = document.querySelector('.city');
const country = document.querySelector('.country');
const temperature = document.querySelector('.temperature');
const condition__icon = document.querySelector('.condition__icon');
const condition__desc = document.querySelector('.condition__desc');
const pressure = document.querySelector('.pressure');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');
const dayOne = document.querySelector('.dayOne');
const dayTwo = document.querySelector('.dayTwo');
const dayThree = document.querySelector('.dayThree');
const dayFour = document.querySelector('.dayFour');
const dayFive = document.querySelector('.dayFive');

const setDate = require("./setCurrentDate");

let units = 'metric';
let lang = 'pl';

async function getData(query) {
  console.log(JSON.stringify(query));
  query.units = units;
  query.lang = lang;


  const response = await fetch('/api/weather', {
    method: "post",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(query)
  });

  const responseForecast = await fetch('/api/weather/forecast', {
    method: "post",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(query)
  });

  const data = await response.json();
  const dataForecast = await responseForecast.json();
  console.log(data);
  console.log("forecast", dataForecast);
  if (data.weather && dataForecast.list) {
    setData(data, dataForecast);
  }
}

function setData(data, dataForecast) {
  setMainData(data);
  setTodayData(data);
  setForecastData(dataForecast);
}

function setMainData(data) {
  setDate();
  input.setAttribute("value", data.name);
  temperature.textContent = (Math.round(data.main.temp * 10)/10);
  condition__icon.setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
}


function setTodayData(data) {
  if(!document.querySelector('.predicted-data')) {
  createPredictBox();
  }
  const box = document.querySelector('.predicted-data');
  box.querySelector(".forecast-date").innerHTML = createDate(0);
  box.querySelector(".forecast-temp-icon").setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
  box.querySelector(".forecast-temp").textContent = (Math.round(data.main.temp * 10)/10) + '°C';
  box.querySelector(".forecast-humidity").textContent = data.main.humidity + '%';
  box.querySelector(".forecast-wind").textContent = (Math.round(data.wind.speed * 10)/10) + 'km/h';
  box.querySelector(".forecast-pressure").textContent = data.main.pressure + 'hPa';
}

function setForecastData(dataForecast) {
  console.log(dataForecast);
  for (let i = 0; i < 4; i++) {
    if (document.querySelectorAll('.predicted-data').length < 5) {
    createPredictBox();
    }
    const box = document.querySelectorAll('.predicted-data');
    console.log(box);
    box[i+1].querySelector(".forecast-date").innerHTML = createDate(i+1);
    box[i+1].querySelector(".forecast-temp-icon").setAttribute('src', `https://openweathermap.org/img/wn/${dataForecast.list[i].weather[0].icon}@2x.png`);
    box[i+1].querySelector(".forecast-temp").textContent = (Math.round(dataForecast.list[i].main.temp * 10)/10) + '°C';
    box[i+1].querySelector(".forecast-humidity").textContent = dataForecast.list[i].main.humidity + '%';
    box[i+1].querySelector(".forecast-wind").textContent = (Math.round(dataForecast.list[i].wind.speed * 10)/10) + 'km/h';
    box[i+1].querySelector(".forecast-pressure").textContent = dataForecast.list[i].main.pressure + 'hPa';
  } 
}

function createPredictBox() {
  const predictBox = document.createElement("div");
  predictBox.setAttribute("class", "predicted-data");
  const date = document.createElement("div");
  date.setAttribute("class", "forecast-date");
  predictBox.appendChild(date);
  const temoIcon = document.createElement("img");
  temoIcon.setAttribute("class", "forecast-temp-icon icon");
  predictBox.appendChild(temoIcon);
  const temp = document.createElement("div");
  temp.setAttribute("class", "forecast-temp");
  predictBox.appendChild(temp);
  const hum = document.createElement("div");
  hum.setAttribute("class", "forecast-humidity");
  predictBox.appendChild(hum);
  const wind = document.createElement("div");
  wind.setAttribute("class", "forecast-wind");
  predictBox.appendChild(wind);
  const press = document.createElement("div");
  press.setAttribute("class", "forecast-pressure");
  predictBox.appendChild(press);
  document.querySelector(".predict").appendChild(predictBox); 
}

function createDate(inc) {
  const actualDate = new Date();
  const dd = String(actualDate.getDate() + inc).padStart(2, '0');
  const mm = String(actualDate.getMonth() + 1).padStart(2, '0'); //January is 0!

  return dd + '.' + mm ;
}

module.exports = getData;