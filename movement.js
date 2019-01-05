function move (origin, coords, d, char) {
  if (char == undefined) {
    char = chars.player

  }
  if (coords == null) {
    if (char == chars.player) {
      return boardSwap(d)
      // return
    }
  }
  // else if (getDisplayItem(coords) == null){
  //   return origin
  //   // return
  // }
  var content = getDisplayItem(coords)
  if (content.char === '' || types.terrain.includes(content)) {
    moveCell(origin, coords, char)
    return coords

  }
  else if (types.immovable.includes(content) === true) {
    return origin
  }
  else if (types.creature.includes(content) === true) {
    return origin
  }
  else if (types.movable.includes(content) === true) {
    // need to switch to the target object
    // then get direction and check that it can also move
    // then move first the obj then the character
    var localTar
    var x = coords.x
    var y = coords.y
    switch (d) {
      case "u":
        localTar = getAboveCoords(coords)
        break
      case "d":
        localTar = getBelowCoords(coords)
        break
      case "l":
        localTar = getLeftCoords(coords)
        break
      case "r":
        localTar = getRightCoords(coords)
        break
    }
    var temp = getDisplayItem(coords)
    move (coords, localTar, d, content)
    if (getDisplayItem(coords) != temp) {
      moveCell(origin, coords, char)
      displayCell(coords)
      // displayCell(coords)
      return coords
    }
    displayCell(coords)
    return origin
  }
    else if (types.item.includes(content) === true) {
    if (itemPos === 10) {
      return origin
    }
    var slot = (document.getElementById('slot' + itemPos))
    itemPos++
    slot.innerHTML = content.char

    removeCell(coords, content)
    moveCell(playerCoords, coords, char)
    return coords
  }
}
