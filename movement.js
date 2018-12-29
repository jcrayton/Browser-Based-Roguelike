function move (coords) {
  var char = getCellContent(coords)
  if (coords == null) {
    return
  }
  else if (types.immovable.includes(char)) {
    return
  }
  console.log(getCellContent(coords))
  var currentCell = getCell(playerCoords)
  var toCell = getCell(coords)

  currentCell.innerHTML = ''
  toCell.innerHTML = chars.player
  playerCoords = coords
}
