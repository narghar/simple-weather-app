const loadGoogleMapsApi = require('load-google-maps-api');

class Prompt {

  static loadGoogleMapsApi() {
    return loadGoogleMapsApi({
      key: process.env.GOOGLEMAPS_KEY,
      libraries: ["places"]
    });
  }

  static startAutocomplete(googleMaps) {
    let options = {
      types: ['(cities)'],
      componentRestrictions: {
         country: "pl"
      }
    };
    const input = document.getElementById('searchTextField');
    new googleMaps.places.Autocomplete(input, options);
  }
}

module.exports = Prompt;