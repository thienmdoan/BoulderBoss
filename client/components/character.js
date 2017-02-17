module.exports = function character() {
  var $sceneEl = document.getElementById('scene');

  var $character = document.createElement('a-entity');
  $character.setAttribute('ply-model', `src: #character`);
  $character.setAttribute('position', '-7 0 14');
  $character.setAttribute('rotation', '-90 180 0');
  $character.setAttribute('scale', '.25 .25 .25');
  $character.setAttribute('id', 'girl');

  var $character2 = document.createElement('a-entity');
  $character2.setAttribute('ply-model', `src: #character2`);
  $character2.setAttribute('position', '-5 45.5 40');
  $character2.setAttribute('rotation', '-90 180 0');
  $character2.setAttribute('scale', '.25 .25 .25');
  $character2.setAttribute('id', 'old');

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

  $sceneEl.appendChild($character);
  $sceneEl.appendChild($character2);
  $character.appendChild($message);
  $message.appendChild($messageAnime);

  return $sceneEl;
};
