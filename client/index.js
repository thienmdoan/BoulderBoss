/*
var entity = document.querySelector('a-entity')

entity.addEventListener('mouseenter', function() {
  entity.setAttribute( 'scale',
  {
    x: 0.05,
    y: 2,
    z: 5.9
  });
});

var num = Math.floor(Math.random() * 20);
*/

function renderThreeD() {
  var $sceneEl = document.getElementById('scene');
  var $entityEl = document.createElement('a-plane');
  $entityEl.setAttribute('color', 'tan');
  $entityEl.setAttribute('height', '100');
  $entityEl.setAttribute('width', '100');
  $entityEl.setAttribute('rotation', '-90 0 0');

  var $entityVid = document.createElement('a-video');
  $entityVid.setAttribute('src', '#video');
  $entityVid.setAttribute('width', '16');
  $entityVid.setAttribute('height', '9');
  $entityVid.setAttribute('position', '0 5 -10');
  $entityVid.setAttribute('on', 'click');

  var $entityControl = document.createElement('a-entity');
  $entityControl.setAttribute('position', '0 0 0');
  $entityControl.setAttribute('camera');
  $entityControl.setAttribute('look-controls');
  $entityControl.setAttribute('wasd-controls');

  var $plane1 = document.createElement('a-image');
  $plane1.setAttribute('src', 'patagonia.jpg');
  $plane1.setAttribute('position', '0 2.5 -6');
  $plane1.setAttribute('height','4');
  $plane1.setAttribute('width', '5');
  $plane1.setAttribute('id', 'patagonia');
  $plane1.setAttribute('class', 'location');

  var $plane2 = document.createElement('a-image');
  $plane2.setAttribute('src', 'yosemite.jpg');
  $plane2.setAttribute('position', '-5.5 2.5 -4');
  $plane2.setAttribute('height','4');
  $plane2.setAttribute('width', '5');
  $plane2.setAttribute('rotation', '0 40 0');
  $plane2.setAttribute('id', 'yosemite');
  $plane2.setAttribute('class', 'location');

  var $plane3 = document.createElement('a-image');
  $plane3.setAttribute('src', 'joshuatree.jpg');
  $plane3.setAttribute('position', '5.5 2.5 -4');
  $plane3.setAttribute('height','4');
  $plane3.setAttribute('width', '5');
  $plane3.setAttribute('rotation', '0 -40 0');
  $plane3.setAttribute('id', 'joshuatree');
  $plane3.setAttribute('class', 'location');

  var $sky = document.createElement('a-sky');
  $sky.setAttribute('src', '#skyTexture');

  var $animation = document.createElement('a-animation');
  $animation.setAttribute('attribute', 'rotation');
  $animation.setAttribute('begin', 'click');
  $animation.setAttribute('to','360 0 0');

  $sceneEl.appendChild($entityEl);
  $sceneEl.appendChild($sky);
  //$sceneEl.appendChild($entityVid);
  $sceneEl.appendChild($entityControl);

  $entityControl.appendChild($plane1);
  $entityControl.appendChild($plane2);
  $entityControl.appendChild($plane3);

  return $sceneEl;
}

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

}, false);

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
 const weather = fetch(`/weather/${event.target.id}`)
 weather
  .then((result) => result.json())
  .then((result) => showWeather(result))
  //USE CONSOLE LOG TO CHECK THE DATA
  //.then((result) => console.log(result))
  .catch((error) => console.error(error))
}


function showWeather(result) {
  var $sceneEl = document.getElementById('scene');

  var obj = JSON.parse(result);
  //USE CONSOLE LOG TO CHECK IF THE DATA IS COMING THROUGH
  //console.log(obj.weather[0].main);
  var $weather;
  var $cloud;
  var tempNum = (obj.main.temp).toFixed(0);
  var $temp = document.createElement('a-entity');
  $temp.setAttribute('bmfont-text', `text: ${tempNum} Degrees; color: white`);
  $temp.setAttribute('position', '-1 5.5 0');
  $temp.setAttribute('scale', '3 3 3');
  $temp.setAttribute('class', 'weather');

  var humidNum = (obj.main.humidity).toFixed(0);
  var $humidity = document.createElement('a-entity');
  $humidity.setAttribute('bmfont-text', `text: humidity ${humidNum}%; color: white`);
  $humidity.setAttribute('position', '0 -.2 0');
  $humidity.setAttribute('scale', '1 1 1');
  $humidity.setAttribute('class', 'weather');

  var windNum = (obj.wind.speed).toFixed(0);
  var $wind = document.createElement('a-entity');
  $wind.setAttribute('bmfont-text', `text: wind ${windNum}mph; color: #9e9e9a`);
  $wind.setAttribute('position', '0 -.2 0');
  $wind.setAttribute('scale', '1 1 1');
  $wind.setAttribute('class', 'weather');

  if(obj.weather[0].main == "Clouds" || "Rain"){
    $weather = document.createElement('a-collada-model');
    $weather.setAttribute('position', '0 3 -2.5');
    $weather.setAttribute('src', '#cloud');
    $weather.setAttribute('class', 'weather');
    $cloud = document.createElement('a-collada-model');
    $cloud.setAttribute('position', '1.5 1 -1');
    $cloud.setAttribute('src', '#cloud');
    $cloud.setAttribute('class', 'weather');
    $weather.appendChild($cloud);
  }
  else if(obj.weather[0].main == "Clear") {
    $weather = document.createElement('a-sphere');
    $weather.setAttribute('color', 'yellow');
    $weather.setAttribute('radius', '2');
    $weather.setAttribute('position', '0 3.5 -2.5');
    $weather.setAttribute('class', 'weather');
    $cloud = document.createElement('a-collada-model');
    $cloud.setAttribute('position', '1.5 -1.5 1.5');
    $cloud.setAttribute('src', '#cloud');
    $cloud.setAttribute('class', 'weather');
    $weather.appendChild($cloud);
  }
/*
  if(obj.weather[0].main == "Rain" || "Clear" || "Clouds"){
    $weather = document.createElement('a-collada-model');
    $weather.setAttribute('position', '0 3 -2.5');
    $weather.setAttribute('src', '#water');
    $weather.setAttribute('class', 'weather');
    $cloud = document.createElement('a-collada-model');
    $cloud.setAttribute('position', '1.5 1 -1');
    $cloud.setAttribute('src', '#cloud');
    $cloud.setAttribute('class', 'weather');
    $weather.appendChild($cloud);
  }
*/
  var $animation = document.createElement('a-animation');
  $animation.setAttribute('attribute', 'position');
  $animation.setAttribute('direction', 'alternate');
  $animation.setAttribute('to','0 3.7 -2.5');
  $animation.setAttribute('dur', '2000');
  $animation.setAttribute('repeat', 'indefinite');

  $sceneEl.appendChild($weather);
  $sceneEl.appendChild($temp);
  $weather.appendChild($animation);
  $temp.appendChild($humidity);
  $humidity.appendChild($wind);
  return $sceneEl;

}
