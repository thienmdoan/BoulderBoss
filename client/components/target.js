module.exports = function targets() {
var $sceneEl = document.getElementById('scene');

var $target = document.createElement('a-sphere');
$target.setAttribute('radius', '.2');
$target.setAttribute('color','blue');
$target.setAttribute('position', '.7 3.45 20.5');
$target.setAttribute('class', 'blue');

var $target1 = document.createElement('a-sphere');
$target1.setAttribute('radius', '.2');
$target1.setAttribute('color','blue');
$target1.setAttribute('position', '12.50 10.20 20');
$target1.setAttribute('class', 'blue');

var $target2 = document.createElement('a-sphere');
$target2.setAttribute('radius', '.2');
$target2.setAttribute('color','blue');
$target2.setAttribute('position', '10 13.5 21.5');
$target2.setAttribute('class', 'blue');

var $target3 = document.createElement('a-sphere');
$target3.setAttribute('radius', '.2');
$target3.setAttribute('color','blue');
$target3.setAttribute('position', '6 18 21.5');
$target3.setAttribute('class', 'blue');

var $target4 = document.createElement('a-sphere');
$target4.setAttribute('radius', '.2');
$target4.setAttribute('color','blue');
$target4.setAttribute('position', '-2.6 21.5 21.6');
$target4.setAttribute('class', 'blue');

var $target5 = document.createElement('a-sphere');
$target5.setAttribute('radius', '.2');
$target5.setAttribute('color','blue');
$target5.setAttribute('position', '-3 33 20.9');
$target5.setAttribute('class', 'blue');

var $target6 = document.createElement('a-sphere');
$target6.setAttribute('radius', '.2');
$target6.setAttribute('color','blue');
$target6.setAttribute('position', '2.4 33 23.91');
$target6.setAttribute('class', 'blue');

var $target7 = document.createElement('a-sphere');
$target7.setAttribute('radius', '.2');
$target7.setAttribute('color','blue');
$target7.setAttribute('position', '6 33 24.64');
$target7.setAttribute('class', 'blue');

var $target8 = document.createElement('a-sphere');
$target8.setAttribute('radius', '.2');
$target8.setAttribute('color','blue');
$target8.setAttribute('position', '7 40.5 21.7');
$target8.setAttribute('class', 'blue');

var $target9 = document.createElement('a-sphere');
$target9.setAttribute('radius', '.2');
$target9.setAttribute('color','blue');
$target9.setAttribute('position', '6.22 42.16 27');
$target9.setAttribute('class', 'blue');

var $target10 = document.createElement('a-sphere');
$target10.setAttribute('radius', '.2');
$target10.setAttribute('color','blue');
$target10.setAttribute('position', '3 44.25 27');
$target10.setAttribute('class', 'blue');

var $target11 = document.createElement('a-sphere');
$target11.setAttribute('radius', '.2');
$target11.setAttribute('color','blue');
$target11.setAttribute('position', '3 46 32.20');
$target11.setAttribute('class', 'blue');


$sceneEl.appendChild($target);
$sceneEl.appendChild($target1);
$sceneEl.appendChild($target2);
$sceneEl.appendChild($target3);
$sceneEl.appendChild($target4);
$sceneEl.appendChild($target5);
$sceneEl.appendChild($target6);
$sceneEl.appendChild($target7);
$sceneEl.appendChild($target8);
$sceneEl.appendChild($target9);
$sceneEl.appendChild($target10);
$sceneEl.appendChild($target11);

return $sceneEl;
};
