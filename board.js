function createGrid (rows, cols) {
  grid = document.getElementById('grid')
  for (var r = 0; r < rows; ++r) {
    var row = grid.appendChild(document.createElement('tr'))
    row.classList.add('row')
    row.id = 'row' + r
    for (var c = 0; c < cols; ++c) {
      var cell = row.appendChild(document.createElement('td'))
      cell.id = 'cell' + r + 'x' + c
      cell.classList.add('cell')
    }
  }
}

function getEmptyCoords () {
  var emptyCells = []
  for (var row = 0; row < ROWS; row++) {
    for (var col = 0; col < COLS; col++) {
      var coords = {x: col, y: row}
      if (getCellContent(coords) === '') {
        emptyCells.push(coords)
      }
    }
  }
  return emptyCells
}

function setCell (coords, char) {
  var cell = getCell(coords)
  cell.innerHTML = char
}

function getCell (coords) {
  return document.getElementById('cell' + coords.y + 'x' + coords.x)
}

function getCellContent (coords) {
  return getCell(coords).innerHTML
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

function boardSwap() {
  //will need to deal with 1) the map and 2) the player
  console.log(grid)
  return
}
