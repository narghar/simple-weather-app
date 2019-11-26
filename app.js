if (process.env.NODE_ENV !== 'production') { require('dotenv').config(); };
const express = require('express');
const request = require('request');
const app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.json());

const port = process.env.PORT || 3000;
const key = process.env.WEATHER_API_KEY;
const units = 'metric';
const lang = 'pl';

let url = `https://api.openweathermap.org/data/2.5/weather?appid=${key}&units=${units}&lang=${lang}&q=`;

app.post('/api/weather/', (req, res) => {
  let query = url + req.body.name;
  console.log(query);
  request(query, function (error, response, body) {
    console.log('error:', error);
    console.log('statusCode:', response && response.statusCode);
    res.json(JSON.parse(body)); //json response
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`)
});
