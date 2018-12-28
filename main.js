var COLS = 40
var ROWS = 20

var playerCoords = {x: COLS / 2, y: ROWS / 2}

function run () {
  console.log('running')
  createGrid(ROWS, COLS, null)
  var startCell = getCell(playerCoords)
  startCell.innerHTML = '@'

  window.addEventListener('keypress', function (e) {
    console.log('keypress')
    // get key, or keyCode if key is null
    var key = e.key || e.keyCode

    // TODO I'm not actually sure what the values for key should be - I think
    // they might be strings and not numbers.
    switch (key) {
      case keyCodes.left:
        move(getLeftCoords())
        break
      case keyCodes.up:
        move(getAboveCoords())
        break
      case keyCodes.right:
        move(getRightCoords())
        break
      case keyCodes.down:
        move(getBelowCoords())
        break
    }
  })
}

function createGrid (rows, cols, callback) {
  var grid = document.getElementById('grid')
  for (var r = 0; r < rows; ++r) {
    var row = grid.appendChild(document.createElement('tr'))
    row.classList.add('row')
    row.id = 'row' + r
    for (var c = 0; c < cols; ++c) {
      var cell = row.appendChild(document.createElement('td'))
      cell.id = 'cell' + r + 'x' + c
      cell.classList.add('cell')
      cell.addEventListener('click', callback)
    }
  }
}

function move (coords) {
  console.log('move', coords)
  if (coords == null) {
    return
  }
  var currentCell = getCell(playerCoords)
  var toCell = getCell(coords)
  currentCell.innerHTML = ''
  toCell.innerHTML = '@'
}

function getCell (coords) {
  return document.getElementById('cell' + coords.y + 'x' + coords.x)
}

function getAboveCoords () {
  if (playerCoords.y === 0) {
    return null
  }
  return {x: playerCoords.x, y: playerCoords.y - 1}
}

function getBelowCoords () {
  if (playerCoords.y === ROWS - 1) {
    return null
  }
  return {x: playerCoords.x, y: playerCoords.y + 1}
}

function getLeftCoords () {
  if (playerCoords.x === 0) {
    return null
  }
  return {x: playerCoords.x - 1, y: playerCoords.y}
}

function getRightCoords () {
  if (playerCoords.x === COLS - 1) {
    return null
  }
  return {x: playerCoords.x + 1, y: playerCoords.y}
}

var keyCodes = {
  left: '37',
  up: '38',
  right: '39',
  down: '40'
}
