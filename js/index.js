
const geolocation = require("./modules/geolocation");
const Prompt = require("./modules/prompt");

<<<<<<< HEAD
const search = document.querySelector('.search');

=======
>>>>>>> newLayout
geolocation();


Prompt.loadGoogleMapsApi().then(function(googleMaps) {
  Prompt.startAutocomplete(googleMaps);
});
<<<<<<< HEAD
=======

>>>>>>> newLayout
