
const geolocation = require("./modules/geolocation");
const getData = require("./modules/dataProcessing");
const Prompt = require("./modules/prompt");

const search = document.querySelector('.search');

geolocation();

Prompt.loadGoogleMapsApi().then(function(googleMaps) {
  Prompt.startAutocomplete(googleMaps);
});
