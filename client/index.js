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
  //<a-plane color="tan" height="100" width="100" rotation="-90 0 0"></a-plane>


  var entityVid = document.createElement('a-video');
  entityVid.setAttribute('src', '#video');
  entityVid.setAttribute('width', '16');
  entityVid.setAttribute('height', '9');
  entityVid.setAttribute('position', '0 5 -10');
  entityVid.setAttribute('on', 'click');
  //<a-video src="#video" begin="click" width="16" height="9" position="0 5 -10"></a-video>

  var entityControl = document.createElement('a-entity');
  entityControl.setAttribute('camera');
  entityControl.setAttribute('look-controls');
  entityControl.setAttribute('wasd-controls');
  //<a-entity camera look-controls wasd-controls></a-entity>
/*
  var entityBall = document.createElement('a-sphere');
  entityBall.setAttribute('alongpath');
  entityBall.alongpath.setAttribute('path', '2,2,-5 -2,1,-2.5 0,1,-1 5,10,4');

  /*<a-sphere
      color="red"
      radius="0.25"
      position="0 0 0"
    alongpath="path:2,2,-5 -2,1,-2.5 0,1,-1 5,10,4 ; closed:false; dur:10000; delay:1000; inspector:false;">
  </a-sphere>
  */
  var plane1 = document.createElement('a-plane');
  plane1.setAttribute('src', 'patagonia.jpg');
  plane1.setAttribute('position', '0 2.5 -6');
  plane1.setAttribute('height','4');
  plane1.setAttribute('width', '5');
  plane1.setAttribute('id', 'patagonia');

  var plane2 = document.createElement('a-plane');
  plane2.setAttribute('src', 'yosemite.jpg');
  plane2.setAttribute('position', '-5.5 2.5 -4');
  plane2.setAttribute('height','4');
  plane2.setAttribute('width', '5');
  plane2.setAttribute('rotation', '0 40 0');
  plane2.setAttribute('id', 'yosemite');

  var plane3 = document.createElement('a-plane');
  plane3.setAttribute('src', 'joshuatree.jpg');
  plane3.setAttribute('position', '5.5 2.5 -4');
  plane3.setAttribute('height','4');
  plane3.setAttribute('width', '5');
  plane3.setAttribute('rotation', '0 -40 0');
  plane3.setAttribute('id', 'joshua');

  /*
  <a-plane
   src="patagonia.jpg"
   position="0 2.5 -6"
   height="4"
   width="5">
   <a-animation attribute="rotation" begin="click" repeat="0" to="360 0 0"></a-animation>
 </a-plane>
 <a-plane
  src="yosemite.jpg"
  position="-5.5 2.5 -4"
  rotation="0 40 0"
  height="4"
  width="5">
  <a-animation attribute="rotation" begin="click" repeat="0" to="360 0 0"></a-animation>
</a-plane>
<a-plane
 src="joshuatree.jpg"
 position="5.5 2.5 -4"
 rotation="0 -40 0"
 height="4"
 width="5">
 <a-animation attribute="rotation" begin="click" repeat="0" to="360 0 0"></a-animation>
</a-plane>*/
  var sky = document.createElement('a-sky');
  sky.setAttribute('src', '#skyTexture');
//<a-sky src="#skyTexture"></a-sky>

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
/*
<a-collada-model
  src="#tree"
  position="10 0 -5">
</a-collada-model>
</a-scene>
*/
  //sceneEl.appendChild(entityBall);

  sceneEl.appendChild(entityEl);
  sceneEl.appendChild(sky);
  //sceneEl.appendChild(entityVid);
  sceneEl.appendChild(entityControl);
  sceneEl.appendChild(plane1);
  sceneEl.appendChild(plane2);
  sceneEl.appendChild(plane3);
  return sceneEl;
};

renderThreeD();
