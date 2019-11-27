const getData = require('./dataProcessing');

function getGeolocation() {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(success, error)
    } else {
        console.log("geolocation is turn of");
    }

    function success(position) {
        query = {
            lat: position.coords.latitude,
            lon: position.coords.longitude,
        }
        getData(query);
    }

    function error(position) {
        place = {
            q: 'Warszawa'
        };
        getData();
    }
}


//api.openweathermap.org/data/2.5/weather?
module.exports = getGeolocation;
