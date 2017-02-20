const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
//const router = require('server/router.js')

const app = express();

app.use(bodyParser.json());
app.use(express.static('./public'));

const API_KEY = process.env.MY_SECRET;
console.log(API_KEY);
const { PORT } = process.env;

const ROOT_URL = `http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}`

app.get('/weather/:city', (req, res) => {

  const url = `${ROOT_URL}&q=${req.params.city},us&units=imperial`

  request(url, (error, response, body) => {
    if (!error || response.statusCode === 200) {
      res.json(body);
    }
  });
});


app.listen(PORT || 3000, () => {
  console.log(`Listening on port ${PORT || 3000}`);
});

module.exports = app;
