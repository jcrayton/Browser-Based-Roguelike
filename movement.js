var playerCoords = {x: COLS / 2, y: ROWS / 2}

function move (coords) {
  if (coords == null) {
    return
  }
  var currentCell = getCell(playerCoords)
  var toCell = getCell(coords)
  currentCell.innerHTML = ''
  toCell.innerHTML = '@'
  playerCoords = coords
}
