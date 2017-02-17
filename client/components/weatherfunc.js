module.exports = function showWeather(result) {
  var $sceneEl = document.getElementById('scene');

  var obj = JSON.parse(result);
  //USE CONSOLE LOG TO CHECK IF THE DATA IS COMING THROUGH
  //console.log(obj.weather[0].main);
  var $weather;
  var $cloud;
  var tempNum = (obj.main.temp).toFixed(0);
  var $temp = document.createElement('a-entity');
  $temp.setAttribute('text', `value: ${tempNum} Degrees; color: white`);
  $temp.setAttribute('position', '4 5.8 0');
  $temp.setAttribute('align', 'center');
  $temp.setAttribute('scale', '10 10 10');
  $temp.setAttribute('class', 'weather');

  var humidNum = (obj.main.humidity).toFixed(0);
  var $humidity = document.createElement('a-entity');
  $humidity.setAttribute('text', `value: humidity ${humidNum}%; color: white`);
  $humidity.setAttribute('position', '0 -.05 0');
  $humidity.setAttribute('align', 'center');
  $humidity.setAttribute('scale', '1 1 1');
  $humidity.setAttribute('class', 'weather');

  var windNum = (obj.wind.speed).toFixed(0);
  var $wind = document.createElement('a-entity');
  $wind.setAttribute('text', `value: wind ${windNum}mph; color: #9e9e9a`);
  $wind.setAttribute('position', '0 -.05 0');
  $wind.setAttribute('align', 'center');
  $wind.setAttribute('scale', '1 1 1');
  $wind.setAttribute('class', 'weather');

  if(obj.weather[0].main == "Clouds"){
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
  else if(obj.weather[0].main == "Rain"){
    $weather = document.createElement('a-entity');
    $weather.setAttribute('position', '0 2.5 -2.5');
    $weather.setAttribute('rotation', '0 0 0');
    $weather.setAttribute('scale', '.2 .2 .2');
    $weather.setAttribute('ply-model', `src: #rain`);
    $weather.setAttribute('class', 'weather');

    $cloud = document.createElement('a-collada-model');
    $cloud.setAttribute('position', '0 6.3 6.8');
    $cloud.setAttribute('scale', '3.5 3.5 3.5');
    $cloud.setAttribute('src', '#cloud');
    $cloud.setAttribute('class', 'weather');
    $weather.appendChild($cloud);
  }

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
