const geolocation = require("./modules/geolocation");
const getData = require("./modules/dataProcessing");
const Prompt = require("./modules/prompt");

const btn = document.querySelector('.searchButton');
const search = document.querySelector('.search');

geolocation();

Prompt.loadGoogleMapsApi().then(function(googleMaps) {
  Prompt.startAutocomplete(googleMaps);
});


btn.addEventListener("click", () => {
  let cityName = encodeURI(search.value);
  let query = {
    q: cityName,
  };
  getData(query);
});

