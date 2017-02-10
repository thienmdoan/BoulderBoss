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


const renderThreeD = () => {
  var sceneEl = document.getElementById('scene');
  var entityEl = document.createElement('a-plane');
  entityEl.setAttribute('color', 'tan');
  entityEl.setAttribute('height', '100');
  entityEl.setAttribute('width', '100');
  entityEl.setAttribute('rotation', '-90 0 0');

  var entityVid = document.createElement('a-video');
  entityVid.setAttribute('src', '#video');
  entityVid.setAttribute('width', '16');
  entityVid.setAttribute('height', '9');
  entityVid.setAttribute('position', '0 5 -10');
  entityVid.setAttribute('on', 'click');

  var entityControl = document.createElement('a-entity');
  entityControl.setAttribute('position', '0 0 0');
  entityControl.setAttribute('camera');
  entityControl.setAttribute('look-controls');
  entityControl.setAttribute('wasd-controls');

  var plane1 = document.createElement('a-image');
  plane1.setAttribute('src', 'patagonia.jpg');
  plane1.setAttribute('position', '0 2.5 -6');
  plane1.setAttribute('height','4');
  plane1.setAttribute('width', '5');
  plane1.setAttribute('id', 'patagonia');

  var plane2 = document.createElement('a-image');
  plane2.setAttribute('src', 'yosemite.jpg');
  plane2.setAttribute('position', '-5.5 2.5 -4');
  plane2.setAttribute('height','4');
  plane2.setAttribute('width', '5');
  plane2.setAttribute('rotation', '0 40 0');
  plane2.setAttribute('id', 'yosemite');

  var plane3 = document.createElement('a-image');
  plane3.setAttribute('src', 'joshuatree.jpg');
  plane3.setAttribute('position', '5.5 2.5 -4');
  plane3.setAttribute('height','4');
  plane3.setAttribute('width', '5');
  plane3.setAttribute('rotation', '0 -40 0');
  plane3.setAttribute('id', 'joshuatree');

  var sky = document.createElement('a-sky');
  sky.setAttribute('src', '#skyTexture');
/*
//  for (let i = 0; i < 5; i++){

    var tree = document.createElement('a-collada-model');
    tree.setAttribute('src','#tree');
    tree.setAttribute('position', '10, 0, -5');
    sceneEl.appendChild(tree);
    var tree6 = document.createElement('a-collada-model');
    tree.setAttribute('src','#tree');
    tree.setAttribute('position', '-10, 0, -5');
    sceneEl.appendChild(tree6);
//  }
*/
  sceneEl.appendChild(entityEl);
  sceneEl.appendChild(sky);
  //sceneEl.appendChild(entityVid);
  sceneEl.appendChild(entityControl);

  entityControl.appendChild(plane1);
  entityControl.appendChild(plane2);
  entityControl.appendChild(plane3);
  return sceneEl;
};

renderThreeD();

document.body.addEventListener('click',() => {

  if (event.target.id === 'patagonia') {
    openWeatherQuery('patagonia');
  }
  else if (event.target.id === 'joshuatree') {
    openWeatherQuery('joshuatree');
  }
  else if (event.target.id === 'yosemite') {
    openWeatherQuery('yosemite');
  }
} );

const openWeatherQuery = (city) => {
 weather = fetch(`/weather/${event.target.id}`)
 weather
  .then((result) => result.json())
  .then((result) => showWeather(result))
  //.then((result) => console.log(result))
  .catch((error) => console.error(error))
}

var showWeather = (result) => {
  var sceneEl = document.getElementById('scene');

  var obj = JSON.parse(result);
  //console.log(obj.weather[0].main);
//  var $temp = document.createElement('a-entity');
//  var $humid = document.createElement('a-entity');
  var weather;
  var cloud;
  if(obj.weather[0].main == 'Cloud'){
    weather = document.createElement('a-collada-model');
    weather.setAttribute('position', '-1 2.5 0');
    weather.setAttribute('src', '#cloud');
    weather.setAttribute('id', 'cloud');
  }
  else if(obj.weather[0].main == "Clear") {
    cloud = document.createElement('a-collada-model');
    cloud.setAttribute('position', '1.5 -1.5 1.5');
    cloud.setAttribute('src', '#cloud');
    cloud.setAttribute('class', 'sun');
    weather = document.createElement('a-sphere');
    weather.setAttribute('color', 'yellow');
    weather.setAttribute('radius', '2');
    weather.setAttribute('position', '0 4.5 -2.5');
    weather.setAttribute('class', 'sun');
  }
  weather.appendChild(cloud);
  sceneEl.appendChild(weather);

  return sceneEl;

};

document.body.addEventListener('click', () => {
  var cloud = document.getElementsByClassName('cloud');
  var sun = document.getElementsByClassName('sun');
  if(event.target.className == 'sun'){
    while(sun.length > 0){
      sun[0].parentNode.removeChild(sun[0]);
      }
    }
  if(event.target.className == 'cloud'){
    while(cloud.length > 0){
      cloud[0].parentNode.removeChild(cloud[0]);
      }
    }
}, false);
