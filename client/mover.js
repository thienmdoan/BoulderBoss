
  module.exports = function moving(cam) {
    const $camera = document.getElementById('camera')
    const step = 0.04
    let pos = $camera.getAttribute('position')
    let interval;

    if(cam.y <= 22.5 && cam.y >= -22.5 ){
      interval = setInterval(function () {
          Object.assign(pos, {
            z: pos.z -= step, y: pos.y})
        $camera.setAttribute('position', pos)
      }, 16)}
//RIGHT
    if(cam.y <= -22.6 && cam.y >= -67.6 ){
      interval = setInterval(function () {
          Object.assign(pos, {
            z: pos.z -= step, x: pos.x += step, y: pos.y})
        $camera.setAttribute('position', pos)
      }, 16)}

    if(cam.y <= -67.7 && cam.y >= -112.7 ){
      interval = setInterval(function () {
          Object.assign(pos, {
            x: pos.x += step, y: pos.y})
        $camera.setAttribute('position', pos)
      }, 16)}
    if(cam.y <= -112.8 && cam.y >=-157.8){
      interval = setInterval(function () {
        Object.assign(pos, {
          x: pos.x += step, y: pos.z += step, y: pos.y })
          $camera.setAttribute('position', pos)
      }, 16)}
//LEFT
    if(cam.y <= 67.6 && cam.y >= 22.6){
      interval = setInterval(function () {
          Object.assign(pos, {
            z: pos.z -= step, x: pos.x -= step, y: pos.y})
        $camera.setAttribute('position', pos)
      }, 16)}

    if(cam.y <= 112.7 && cam.y >= 67.7 ){
      interval = setInterval(function () {
          Object.assign(pos, {
            x: pos.x -= step, y: pos.y})
        $camera.setAttribute('position', pos)
      }, 16)}
   if(cam.y <= 157.8 && cam.y >= 112.8 ){
      interval = setInterval(function () {
          Object.assign(pos, {
            x: pos.x -= step, y: pos.y})
        $camera.setAttribute('position', pos)
      }, 16)}
//BEHIND
    if(cam.y <= 202 && cam.y >= 157.9){
       interval = setInterval(function () {
           Object.assign(pos, {
             z: pos.z += step, y: pos.y})
         $camera.setAttribute('position', pos)
       }, 16)}
    if(cam.y <= -157.9 && cam.y >= -202){
       interval = setInterval(function () {
           Object.assign(pos, {
             z: pos.z += step, y: pos.y})
         $camera.setAttribute('position', pos)
       }, 16)}

    let timeout = setTimeout(function () {clearInterval(interval)}, 1300);
  }
