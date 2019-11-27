const geolocation = require("./modules/geolocation")
const getData = require("./modules/dataProcessing")

const btn = document.querySelector('.searchButton');
const search = document.querySelector('.search');

geolocation();

btn.addEventListener("click", () => {
  let cityName = encodeURIComponent(search.value);
  let query = {
    q: cityName,
  };
  getData(query);
});

