var playerCoords = {x: COLS / 2, y: ROWS / 2}

function move (coords) {
  var content = getCellContent(coords)
  console.log(content)
  if (coords == null) {
    return
  }
  else if (content == "") {
    console.log(getCellContent(coords))
    var currentCell = getCell(playerCoords)
    var toCell = getCell(coords)

    currentCell.innerHTML = ''
    toCell.innerHTML = chars.player
    playerCoords = coords
  }
  else if (types.immovable.includes(content) == true) {
    return
  }
  else if (types.creatures.includes(content) == true) {
    return
  }
  else if (types.movable.includes(content) == true) {
    return
  }
}
