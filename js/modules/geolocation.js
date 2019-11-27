const getData = require('./dataProcessing');

function getGeolocation() {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function(position) {
            {
                query = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                }
                getData(query);
            }
          });
      } else {
        console.log("geolocation is turn of");
      }
}

//api.openweathermap.org/data/2.5/weather?
module.exports = getGeolocation;