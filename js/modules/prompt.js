const loadGoogleMapsApi = require('load-google-maps-api');

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
      fields: ['formatted_address']
    };
    let input = document.getElementById('searchTextField');
    const autocomplete = new googleMaps.places.Autocomplete(input, options);
    google.maps.event.addListener(autocomplete, 'place_changed', function () {
      let place = autocomplete.getPlace().formatted_address;
      place = place.split(',');
      input.value = place[0];
    });
  }
}

module.exports = Prompt;
