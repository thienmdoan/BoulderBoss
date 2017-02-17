const moving = require('./mover.js')
const renderThreeD = require('./world.js')
const showWeather = require('./weatherfunc.js')
const targets = require('./target.js')


renderThreeD();
targets();

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

document.body.addEventListener('click', () => {
  if(event.target.id === 'character'){
    var helpMes = prompt('Damsel: HELP! My grandpa is stuck at the top of this huge beautiful mountain! Will you help me?', 'I guess so');

    if(helpMes.toLowerCase() == 'no'){
      alert('Damsel: You suck');
    }
     else if(helpMes.toLowerCase() == 'i guess so'){
      alert("Damsel: Great! Move your cursor over the blue circles to start! Don't die up there!");
    }
    else {
      alert(`I don't understand`);
    }
  }
}, false);

document.body.addEventListener('mousedown', function() {
  const $camera = document.getElementById('camera');
  const cam = $camera.getAttribute('rotation');
  //console.log('camera', cam.y);
  moving(cam);
}, false)

const element = document.getElementsByClassName('blue');

document.body.addEventListener('click', function(){
  if(event.target.className === 'blue') {
    const $camera = document.getElementById('camera')
    const cam = $camera.getAttribute('position')
    const to = event.target.getAttribute('position')
//    console.log('camera', cam)
//    console.log('destination', to)
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

document.body.addEventListener('raycaster-intersected', function () {
  console.log('Player hit something!');
});
