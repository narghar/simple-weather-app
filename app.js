if (process.env.NODE_ENV !== 'production') { require('dotenv').config(); };
const express = require('express');
const request = require('request');
const weatherAPI = require('./routes/weather');

const app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use('/api/weather', weatherAPI);

const port = process.env.PORT || 3000;


app.listen(port, () => {
  console.log(`Listening on port ${port}!`)
});

