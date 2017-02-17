module.exports = function renderThreeD() {
  var $sceneEl = document.getElementById('scene');
  var $entityEl = document.createElement('a-plane');
  $entityEl.setAttribute('id', 'platform');
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
  $plane1.setAttribute('src', '#patagonia');
  $plane1.setAttribute('position', '0 5.5 -6');
  $plane1.setAttribute('height','4');
  $plane1.setAttribute('width', '5');
  $plane1.setAttribute('id', 'patagonia');
  $plane1.setAttribute('class', 'location');

  var $plane2 = document.createElement('a-image');
  $plane2.setAttribute('src', '#yosemite');
  $plane2.setAttribute('position', '-5.5 5.5 -4');
  $plane2.setAttribute('height','4');
  $plane2.setAttribute('width', '5');
  $plane2.setAttribute('rotation', '0 40 0');
  $plane2.setAttribute('id', 'yosemite');
  $plane2.setAttribute('class', 'location');

  var $plane3 = document.createElement('a-image');
  $plane3.setAttribute('src', '#joshuatree');
  $plane3.setAttribute('position', '5.5 5.5 -4');
  $plane3.setAttribute('height','4');
  $plane3.setAttribute('width', '5');
  $plane3.setAttribute('rotation', '0 -40 0');
  $plane3.setAttribute('id', 'joshuatree');
  $plane3.setAttribute('class', 'location');

  var $sky = document.createElement('a-sky');
  $sky.setAttribute('src', '#skyTexture');

  var $animation = document.createElement('a-animation');
  $animation.setAttribute('attribute', 'rotation');
  $animation.setAttribute('delay', '2000');
  $animation.setAttribute('to','360 0 0');

  var $boss = document.createElement('a-entity');
  $boss.setAttribute('text', `value: BoulderBoss; color: white`);
  $boss.setAttribute('class', 'weather');
  $boss.setAttribute('position', '5.5 9.5 -6.5');
  $boss.setAttribute('align', 'center');
  $boss.setAttribute('scale', '15 15 15');

  var $welcome = document.createElement('a-entity');
  $welcome.setAttribute('text', `value: Welcome!; color: white`);
  $welcome.setAttribute('class', 'weather');
  $welcome.setAttribute('position', '0 -0.05 0');
  $welcome.setAttribute('scale', '.9 .9 .9');

  var $character = document.createElement('a-entity');
  $character.setAttribute('ply-model', `src: #character`);
  $character.setAttribute('position', '-7 0 14');
  $character.setAttribute('rotation', '-90 180 0');
  $character.setAttribute('scale', '.25 .25 .25');

  var $character2 = document.createElement('a-entity');
  $character2.setAttribute('ply-model', `src: #character2`);
  $character2.setAttribute('position', '-5 45.5 40');
  $character2.setAttribute('rotation', '-90 180 0');
  $character2.setAttribute('scale', '.25 .25 .25');

  var $mountain = document.createElement('a-entity');
  $mountain.setAttribute('ply-model', `src: #mountain`);
  $mountain.setAttribute('position', '-4 0 42');
  $mountain.setAttribute('rotation', '-90 180 0');

  var $patasign = document.createElement('a-entity');
  $patasign.setAttribute('text', `value: Patagonia; color: white`);
  $patasign.setAttribute('position', '3 4 -4.5');
  $patasign.setAttribute('align', 'center');
  $patasign.setAttribute('scale', '10 10 10');

  var $yosesign = document.createElement('a-entity');
  $yosesign.setAttribute('text', `value: Yosemite; color: white`);
  $yosesign.setAttribute('position', '-3.25 4 -5.25');
  $yosesign.setAttribute('rotation', '0 40 0');
  $yosesign.setAttribute('align', 'center');
  $yosesign.setAttribute('scale', '10 10 10');

  var $joshsign = document.createElement('a-entity');
  $joshsign.setAttribute('text', `value: Joshua Tree; color: white`);
  $joshsign.setAttribute('position', '7.25 4 -1.5');
  $joshsign.setAttribute('rotation', '0 -40 0');
  $joshsign.setAttribute('align', 'center');
  $joshsign.setAttribute('scale', '10 10 10');

  var $message = document.createElement('a-box');
  $message.setAttribute('color','white');
  $message.setAttribute('position', '0 0 20');
  $message.setAttribute('id', 'character');
  $message.setAttribute('scale', '5 5 5');

  var $messageAnime = document.createElement('a-animation');
  $messageAnime.setAttribute('attribute', 'position');
  $messageAnime.setAttribute('direction', 'alternate');
  $messageAnime.setAttribute('to','0 0 22.5');
  $messageAnime.setAttribute('dur', '2000');
  $messageAnime.setAttribute('repeat', 'indefinite');

  $sceneEl.appendChild($entityEl);
  $sceneEl.appendChild($sky);
  $sceneEl.appendChild($character);
  $sceneEl.appendChild($character2);
  $sceneEl.appendChild($mountain);
  $sceneEl.appendChild($patasign);
  $sceneEl.appendChild($yosesign);
  $sceneEl.appendChild($joshsign);
  //$sceneEl.appendChild($entityVid);
  $sceneEl.appendChild($entityControl);
  $sceneEl.appendChild($boss);
  $boss.appendChild($welcome);
  $welcome.appendChild($animation);
  $entityControl.appendChild($plane1);
  $entityControl.appendChild($plane2);
  $entityControl.appendChild($plane3);
  $character.appendChild($message);
  $message.appendChild($messageAnime);

  return $sceneEl;
  };
