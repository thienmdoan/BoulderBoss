const moving = require('./mover.js')
const renderThreeD = require('./world.js')
const showWeather = require('./weatherfunc.js')
renderThreeD();

document.body.addEventListener('mousedown', function() {
  event.preventDefault();
  if (event.target.id === 'patagonia') {
    openWeatherQuery('patagonia');
  }
  else if (event.target.id === 'joshuatree') {
    openWeatherQuery('joshuatree');
  }
  else if (event.target.id === 'yosemite') {
    openWeatherQuery('yosemite');
  }

  var cloud = document.getElementsByClassName('cloud');
  var weather = document.getElementsByClassName('weather');
  if(event.target.className == 'location'){
    while(weather.length > 0){
      weather[0].parentNode.removeChild(weather[0]);
      }
    }

  if(event.target.className === 'weather' || 'location'){
    // console.log('clicked!');
   }
  //else if(!event.target.className === 'weather' || 'location') {
  const $camera = document.getElementById('camera');
  const cam = $camera.getAttribute('rotation');
  console.log('camera', cam.y);
  moving(cam);
  //}
  event.stopPropagation();
}, false);

function openWeatherQuery(city) {
 const weather = fetch(`/weather/${event.target.id}`);
 weather
  .then((result) => result.json())
  .then((result) => showWeather(result))
  .catch((error) => console.error(error));
}
/*
document.body.addEventListener('mousedown', function() {

  var cloud = document.getElementsByClassName('cloud');
  var weather = document.getElementsByClassName('weather');
  if(event.target.className == 'location'){
    while(weather.length > 0){
      weather[0].parentNode.removeChild(weather[0]);
      }
    }
}, false);

function openWeatherQuery(city) {
 const weather = fetch(`/weather/${event.target.id}`);
 weather
  .then((result) => result.json())
  .then((result) => showWeather(result))
  .catch((error) => console.error(error));
}

document.addEventListener('mousedown', function () {
    if(event.target.className === 'weather' || 'location'){
       console.log('clicked!');
     }
    else if(!event.target.className === 'weather' || 'location') {
    const $camera = document.getElementById('camera');
    const cam = $camera.getAttribute('rotation');
    console.log('camera', cam.y);
    moving(cam);
  }
});
*/
