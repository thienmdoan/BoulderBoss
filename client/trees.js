const tree = () => {
  var tree1 = document.createElement('a-collada-model');
    tree.setAttribute('src','#tree');
    tree.setAttribute('position', '10, 0, -5');
  var tree2 = document.createElement('a-collada-model');
    tree.setAttribute('src','#tree');
    tree.setAttribute('position', '10, 0, -10');
  var tree3 = document.createElement('a-collada-model');
    tree.setAttribute('src','#tree');
    tree.setAttribute('position', '-10, 0, -5');
  var tree4 = document.createElement('a-collada-model');
    tree.setAttribute('src','#tree');
    tree.setAttribute('position', '-10, 0, 0');
  var tree5 = document.createElement('a-collada-model');
    tree.setAttribute('src','#tree');
    tree.setAttribute('position', '15, 0, -5');
  var tree6 = document.createElement('a-collada-model');
    tree.setAttribute('src','#tree');
    tree.setAttribute('position', '-10, 0, -5');

    sceneEl.appendChild(tree1);
    sceneEl.appendChild(tree2);
    sceneEl.appendChild(tree3);
    sceneEl.appendChild(tree4);
    sceneEl.appendChild(tree5);
    sceneEl.appendChild(tree6);
    return sceneEl;
};
/*
<a-collada-model
  src="#tree"
  position="10 0 -5">
</a-collada-model>
</a-scene>
*/
module.exports = tree;
