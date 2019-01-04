function move (coords, d) {
  if (coords == null) {
    boardSwap(d)
    return
  }
  var content = getDisplayItem(coords)
  if (content.char === '' || types.terrain.includes(content)) {
    var currentCell = getCell(playerCoords)
    var toCell = getCell(coords)

    moveCell(playerCoords, coords, chars.player)
    playerCoords = coords

  }
  else if (types.immovable.includes(content) === true) {
    return
  }
  else if (types.creature.includes(content) === true) {
    return
  }
  else if (types.movable.includes(content) === true) {
    // need to switch to the target object
    // then get direction and check that it can also move
    // then move first the obj then the character
    var localObj = coords
    var localTar
    var x = coords.x
    var y = coords.y
    switch (d) {
      case "u":
        localTar = {x: x, y: y - 1}
        break
      case "d":
        localTar = {x: x, y: y + 1}
        break
      case "l":
        localTar = {x: x-1, y: y}
        break
      case "r":
        localTar = {x: x + 1, y: y}
        break
    }
    content = getDisplayItem(localTar)
    if (content.char === '' || types.terrain.includes(content)) {
      moveCell(localObj, localTar, getDisplayItem(localObj))
      moveCell(playerCoords, coords, chars.player)
      playerCoords = coords
    }
    return
  } else if (types.item.includes(content) === true) {
    if (itemPos === 10) {
      return
    }
    var slot = (document.getElementById('slot' + itemPos))
    itemPos++
    slot.innerHTML = content.char

    removeCell(coords, content)
    moveCell(playerCoords, coords, chars.player)
    playerCoords = coords
  }
}
