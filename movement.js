function move (coords, d) {
  if (coords == null) {
    boardSwap(d)
    return
  }
  var content = getCellContent(coords)
  if (content == "") {
    var currentCell = getCell(playerCoords)
    var toCell = getCell(coords)

    setCell(playerCoords, '')
    setCell(coords, chars.player)
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
        localTar = {x: x, y:y-1}
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
      if (content == '') {
        setCell(localTar, getCellContent(localObj))
        setCell(localObj, '')

        setCell(playerCoords, '')
        setCell(coords, chars.player)
        playerCoords = coords
      }
    return
  }
  else if (types.item.includes(content) == true) {
    // superMap.push(content)
    if (itemPos == 10) {
      return
    }
    var slot = (document.getElementById('slot' + itemPos))
    itemPos++
    console.log(slot.innerHTML)
    slot.innerHTML = content
    console.log(slot.innerHTML)

    setCell(playerCoords, '')
    setCell(coords, chars.player)
    playerCoords = coords
  }
}
