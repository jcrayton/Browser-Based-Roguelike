function createGrid (rows, cols, callback) {
  var grid = document.getElementById('grid');
  for (var r = 0; r < rows; ++r) {
    var row = grid.appendChild(document.createElement('div'));
    for (var c = 0; c < cols; ++c) {
      var cell = row.appendChild(document.createElement('div'));
      cell.id = r + 'x' + c;
      cell.addEventListener('click', callback);
    }
  }
}
