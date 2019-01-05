function move (origin, coords, d, char) {
  if (char === undefined) {
    char = chars.player
  }
  if (coords === null && char === chars.player) {
    return boardSwap(d)
  }
  var content = getDisplayItem(coords)
  if (content.char === '' || types.terrain.includes(content)) {
    moveCell(origin, coords, char)
    return coords
  } else if (types.immovable.includes(content) === true) {
    return origin
  } else if (types.creature.includes(content) === true) {
    return origin
  } else if (types.movable.includes(content) === true) {
    // need to switch to the target object
    // then get direction and check that it can also move
    // then move first the obj then the character
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
        localTar = {x: x+1, y: y}
        break
    }
    var temp = getDisplayItem(coords)
    move(coords, localTar, d, content)
    if (getDisplayItem(coords) !== temp) {
      moveCell(origin, coords, char)
      displayCell(coords)
      // displayCell(coords)
      return coords
    }
    displayCell(coords)
    return origin
  } else if (types.item.includes(content) === true) {
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
