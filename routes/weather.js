const express = require('express');
const request = require('request');

const router = express.Router();

const key = process.env.WEATHER_API_KEY;
const units = 'metric';
const lang = 'pl';

let url = `https://api.openweathermap.org/data/2.5/weather?appid=${key}&units=${units}&lang=${lang}&`;

router.post('/', (req, res) => {
    let query;
    if (req.body.name) { 
      query = url + `q=${req.body.name}`;
    } else if (req.body.latitude && req.body.longitude) {
      query = url + `lat=${req.body.latitude}&lon=${req.body.longitude}`;
    }

    console.log(query);
    request(query, function (error, response, body) {
      console.log('error:', error);
      console.log('statusCode:', response && response.statusCode);
      res.json(JSON.parse(body)); //json response
    });
  });

module.exports = router;