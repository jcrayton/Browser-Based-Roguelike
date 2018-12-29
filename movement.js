function move (coords, d) {
  var content = getCellContent(coords)
  if (coords == null) {
    return
  }
  else if (content == "") {
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
    //need to switch to the target object
    //then get direction and check that it can also move
    //then move first the obj then the character


    return
  }
}
