const btn = document.querySelector('.searchButton');
const search = document.querySelector('.search');

const city = document.querySelector('.city');
const country = document.querySelector('.country');
const temperature = document.querySelector('.temperature');
const condition__icon = document.querySelector('.condition__icon');
const condition__desc = document.querySelector('.condition__desc');
const pressure = document.querySelector('.pressure');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');

let units = 'metric';
let lang = 'pl';

btn.addEventListener("click", getData);


async function getData() {

  if(search.value) {
    let query = encodeURIComponent(search.value);
    place = {q: query};
  }
  else {
    place = place;
  }
  place.units = units;
  place.lang = lang;
  const response = await fetch('api/weather', {
    method: "post",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(place)
  });
  console.log(response);
  const data = await response.json();
  console.log(data);
  if(data.weather) {
    setData(data);
  }
}

function setData(data) {
  city.textContent = data.name;
  country.textContent = data.sys.country;
  temperature.textContent = data.main.temp;
  condition__icon.setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
  condition__desc.textContent = data.weather[0].description;
  pressure.textContent = data.main.pressure;
  wind.textContent = data.wind.speed;
  humidity.textContent = data.main.humidity;
}


function userLocation() {
  search.value = '';
  if (navigator.geolocation){
    navigator.geolocation.getCurrentPosition(success, error)
  }
  function success(position) {
    place = {
      lat: position.coords.latitude,
      lon: position.coords.longitude
    }
    getData();
  }
  function error(position) {
    place = {q: 'Warszawa'};
    getData();
  }

}
userLocation();

