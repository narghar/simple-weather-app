const geolocation = require("./modules/geolocation");
const Prompt = require("./modules/prompt");

geolocation();


Prompt.loadGoogleMapsApi().then(function(googleMaps) {
  Prompt.startAutocomplete(googleMaps);
});

