(function () {
  var y = document.getElementById('yr');
  if (y) y.textContent = new Date().getFullYear();
  var buttons = document.querySelectorAll('.filters button');
  var items = document.querySelectorAll('.pubs li');
  buttons.forEach(function (b) {
    b.addEventListener('click', function () {
      buttons.forEach(function (x) { x.classList.remove('on'); });
      b.classList.add('on');
      var f = b.dataset.f;
      items.forEach(function (li) {
        li.hidden = f !== 'all' && li.dataset.t.split(' ').indexOf(f) === -1;
      });
    });
  });
})();
