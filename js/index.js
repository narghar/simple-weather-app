const geolocation = require("./modules/geolocation");
const Prompt = require("./modules/prompt");
const input = document.getElementById('search-city');



geolocation();
input.addEventListener('focus', (event) => {
   event.target.dataset.value = event.target.value;
   event.target.value = '';

})
input.addEventListener('blur', (event) => {
  event.target.value = event.target.dataset.value;
  event.target.dataset.value = '';
})


Prompt.loadGoogleMapsApi().then(function(googleMaps) {
  Prompt.startAutocomplete(googleMaps);
});
