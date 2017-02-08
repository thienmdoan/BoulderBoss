var entity = document.querySelector('a-entity')

entity.addEventListener('mouseenter', function() {
  entity.setAttribute( 'scale',
  {
    x: 0.05,
    y: 2,
    z: 5.9
  });
});
