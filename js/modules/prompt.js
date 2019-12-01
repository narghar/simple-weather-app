const loadGoogleMapsApi = require('load-google-maps-api');
const getData = require('./dataProcessing');
<<<<<<< HEAD
=======

>>>>>>> newLayout
class Prompt {

  static loadGoogleMapsApi() {
    return loadGoogleMapsApi({
      key: process.env.GOOGLEMAPS_KEY,
      language: 'pl',
      region: 'PL',
      libraries: ["places"]
    });
  }

  static startAutocomplete(googleMaps) {
    let options = {
      types: ['(cities)'],
      componentRestrictions: {
        country: "pl"
      },
      fields: ['address_components']
    };
    const input = document.getElementById('search-city');
    const autocomplete = new googleMaps.places.Autocomplete(input, options);
    google.maps.event.addListener(autocomplete, 'place_changed', function () {
      let place = autocomplete.getPlace();
      if (place.address_components) {
        input.value = place.address_components[0].long_name;
        let cityName = encodeURI(input.value);
        let query = {
          q: cityName,
        };
        getData(query);
      }

    });
  }
}

module.exports = Prompt;