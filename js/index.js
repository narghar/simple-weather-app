const geolocation = require("./modules/geolocation");
const Prompt = require("./modules/prompt");
const setDate = require("./modules/setCurrentDate");

const search = document.querySelector('.search');

geolocation();
setDate();

Prompt.loadGoogleMapsApi().then(function(googleMaps) {
  Prompt.startAutocomplete(googleMaps);
});

