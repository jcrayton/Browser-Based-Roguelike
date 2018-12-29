var playerCoords = {x: COLS / 2, y: ROWS / 2}

function move (coords) {
  if (coords == null) {
    return
  }
  else if (getCellContent(coords) != "") {
    return
  }
  console.log(getCellContent(coords))
  var currentCell = getCell(playerCoords)
  var toCell = getCell(coords)

  currentCell.innerHTML = ''
  toCell.innerHTML = chars.player
  playerCoords = coords
}
