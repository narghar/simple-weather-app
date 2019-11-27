if (process.env.NODE_ENV !== 'production') { require('dotenv').config(); };
const express = require('express');
const request = require('request');
const app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.json());

const port = process.env.PORT || 3000;
const key = process.env.WEATHER_API_KEY;


const url = new URL('https://api.openweathermap.org/data/2.5/weather');

app.post('/api/weather/', (req, res) => {

  console.log(req.body)

  const params = new URLSearchParams(req.body);
  params.append('appid', key);
  url.search = params.toString();

  request(url.href, (error, response, body) => {
    console.log('error:', error);
    console.log('statusCode:', response && response.statusCode);
    res.send(body); //json response
  });
});

app.get('*', (req, res) => {
  res.redirect('/');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`)
});
