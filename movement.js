function move (origin, coords, d, char) {
  if (char === undefined) {
    char = chars.player
  }
  if (coords == null) {
    if (char === chars.player) {
      return boardSwap(d)
    }
  }
  // else if (getDisplayItem(coords) == null){
  //   return origin
  // }
  var content = getDisplayItem(coords)
  // console.log(content)
  if (content.char === '' || types.terrain.includes(content)) {
    moveCell(origin, coords, char)
    return coords
  } else if (types.immovable.includes(content) === true) {
    return origin
  // } else if (types.creature.includes(content) === true) {
  //   console.log("oops")
  //   return origin
  } else if (types.movable.includes(content) === true) {
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
    else if (char != chars.player) {
      return coords
    }
    var slot = (document.getElementById('slot' + itemPos))
    itemPos++
    slot.innerHTML = content.char

    removeCell(coords, content)
    moveCell(playerCoords, coords, char)
    return coords
  }
  return origin
}

function moveCreatures () {
  for (var creature of activeCreatures) {
    // console.log(creature.char)
    // console.log(activeCreatures)
    if (!creature.friendly) {
      // TODO make it chase player
      // console.log("this dude's mean", creature.char)
      return
    }
    else {
      var newCoords = getRandCoords(creature.coords)

      // console.log('left', leftCoords);
      // console.log('is empty', isEmpty(leftCoords));
      if (isEmpty(newCoords)) {
        moveCell(creature.coords, newCoords, creature)
        creature.coords = newCoords
      }
    }
  }
}
