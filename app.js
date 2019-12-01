if (process.env.NODE_ENV !== 'production') { require('dotenv').config(); };
const express = require('express');
const weatherAPI = require('./routes/weather');


const app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use('/api/weather', weatherAPI);

// All other routes
app.get('*', (req, res) => {
  res.redirect('/');
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listening on port ${port}!`)
});

