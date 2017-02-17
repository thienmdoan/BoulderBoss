const moving = require('./components/mover.js')
const renderThreeD = require('./components/world.js')
const showWeather = require('./components/weatherfunc.js')
const targets = require('./components/target.js')
const character = require('./components/character.js')


renderThreeD();
targets();
character();
//EVENT LISTENER FOR WEATHER FEATURE
document.body.addEventListener('click', function() {
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
}, false);

//EVENT LISTERNING FOR MOVING
document.body.addEventListener('mousedown', function() {
  const $camera = document.getElementById('camera');
  const cam = $camera.getAttribute('rotation');
  //console.log('camera', cam.y);
  moving(cam);
}, false)

const element = document.getElementsByClassName('blue');
//EVENT LISTENER FOR CLIMBING
document.body.addEventListener('click', function(){
  if(event.target.className === 'blue') {
    const $camera = document.getElementById('camera')
    const cam = $camera.getAttribute('position')
    const to = event.target.getAttribute('position')
    updateCamera($camera, event.target);
  }
});

function openWeatherQuery(city) {
 const weather = fetch(`/weather/${event.target.id}`);
 weather
  .then((result) => result.json())
  .then((result) => showWeather(result))
  .catch((error) => console.error(error));
}

function updateCamera($camera, $dest) {
  const step = 0.04
  let dest = $dest.getAttribute('position')
  let pos = $camera.getAttribute('position')

  Object.assign(dest, {
      x: dest.x + 1,
      z: dest.z - 9,
      y: dest.y + 1
    })
  $camera.setAttribute('position', dest)
}
//EVENT LISTENER FOR CHARACTER INTERACTION

document.body.addEventListener('raycaster-intersected', function () {
  const sceneEl = document.getElementById('scene');
  const charGirl = document.getElementById('girl');
  const gramps = document.getElementById('old');
  const starts = document.getElementById('start');
  var $message = document.createElement('a-entity');
  if(event.target.id == 'girl'){
    $message.setAttribute('text', `value:
    HELP! My gramps
    is stuck on top
    of the Mountain!; color: white`);
    $message.setAttribute('position', '37 0 27');
    $message.setAttribute('rotation', '90 0 0');
    $message.setAttribute('align', 'center');
    $message.setAttribute('scale', '100 100 100');
    $message.setAttribute('class', 'message');

    charGirl.appendChild($message);
    return charGirl;
  }
  else if(event.target.id == 'old'){
    $message.setAttribute('text', `value:
    HELP! I am trying
    to get away from some
    crazy girl that thinks
    I'm her gramps.; color: white`);
    $message.setAttribute('position', '37 0 35');
    $message.setAttribute('rotation', '90 0 0');
    $message.setAttribute('align', 'center');
    $message.setAttribute('scale', '100 100 100');
    $message.setAttribute('class', 'message');

    gramps.appendChild($message);
    return gramps;
  }
  else if(event.target.id == 'start'){
    $message.setAttribute('text', `value:
    To start climbing,
    move your cursor over
    the blue spheres!; color: white`);
    $message.setAttribute('position', '0 18 -4');
    $message.setAttribute('rotation', '180 90 -90');
    $message.setAttribute('align', 'center');
    $message.setAttribute('scale', '50 50 50');
    $message.setAttribute('class', 'message');

    starts.appendChild($message);
    return starts;
  }
});
//REMOVES MESSAGES FROM CHARACTER ONCE CURSOR LEAVES
document.body.addEventListener('raycaster-intersected-cleared', function () {
  const message = document.getElementsByClassName('message');
  while(message.length > 0){
    message[0].parentNode.removeChild(message[0]);
  }
})
