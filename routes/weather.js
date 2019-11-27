const express = require('express');
const request = require('request');

const router = express.Router();

const key = process.env.WEATHER_API_KEY;
const url = new URL('https://api.openweathermap.org/data/2.5/weather');
router.post('/', (req, res) => {


  if(req.body.q) {req.body.q = decodeURI(req.body.q)};
  console.log(req.body);
  const params = new URLSearchParams(req.body);
  params.append('appid', key);
  url.search = params.toString();

  request(url.href, (error, response, body) => {
    console.log('error:', error);
    console.log('statusCode:', response && response.statusCode);
    res.send(body); //json response
  });
});

router.get('/', (req, res) => {
  res.redirect('/');
});

module.exports = router;
