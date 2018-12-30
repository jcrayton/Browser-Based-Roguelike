function move (coords, d) {
  if (coords == null) {
    boardSwap()
    return
  }
  var content = getCellContent(coords)
  if (content == "") {
    var currentCell = getCell(playerCoords)
    var toCell = getCell(coords)

    currentCell.innerHTML = ''
    toCell.innerHTML = chars.player
    playerCoords = coords

  }
  else if (types.immovable.includes(content) == true) {
    return
  }
  else if (types.creature.includes(content) == true) {
    return
  }
  else if (types.movable.includes(content) == true) {
    //need to switch to the target object
    //then get direction and check that it can also move
    //then move first the obj then the character
    var localObj = coords
    var localTar
    var x = coords.x
    var y = coords.y
    switch (d) {
      case "u":
        localTar = {x: x, y:y-1
        break
      case "d":
        localTar = {x: x, y:y+1}
        break
      case "l":
        localTar = {x: x-1, y: y}
        break
      case "r":
        localTar = {x: x+1, y:y}
        break
      }
      content = getCellContent(localTar)
      if (content == "") {
        var currentLocal = getCell(localObj)
        var toLocal = getCell(localTar)
        content = getCellContent(localObj)

        console.log(content)
        currentLocal.innerHTML = ''
        toLocal.innerHTML = content

        //do we want this bit?
        var currentCell = getCell(playerCoords)
        var toCell = getCell(coords)

        currentCell.innerHTML = ''
        toCell.innerHTML = chars.player
        playerCoords = coords
      }

    return
  }
}
