function run () {
  createGrid(20, 40, null);
  var someCell = document.getElementById('cell10x20');
  someCell.innerHTML = '@';
}

function createGrid (rows, cols, callback) {
  var grid = document.getElementById('grid');
  for (var r = 0; r < rows; ++r) {
    var row = grid.appendChild(document.createElement('tr'));
    row.classList.add('row');
    row.id = 'row'+r;
    for (var c = 0; c < cols; ++c) {
      var cell = row.appendChild(document.createElement('td'));
      cell.id = 'cell' + r + 'x' + c;
      cell.classList.add('cell');
      cell.addEventListener('click', callback);
    }
  }
}
