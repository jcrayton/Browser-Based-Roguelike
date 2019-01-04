function objGen(type, x, y, d, l) {
  if (boardIsFull()) {
    return
  }

  // generate wall in random position (if x unspecified)
  if (x === undefined) {
    var test = false
    while (test === false) {
      var i = {x: getRandomInt(COLS), y: getRandomInt(ROWS)}
      if (getCellContent(i) === "") {
        setCell(i, type)
        test = true
      }
    }
  }

  // create straight line of objects (if d and l were specified)
  else if (d !== undefined && l !== undefined) {
    while (l !== 0) {
      var coords = {x: x, y: y}
      if (getCellContent(coords) === '') {
        setCell(coords, type)
      }
      switch (d) {
        case "n":
          y--
          break
        case "s":
          y++
          break
        case "e":
          x++
          break
        case "w":
          x--
          break
      }
      l--
    }
  } else {
    setCell({x: x, y: y}, type)
  }
}

function getRandomInt (max) {
  return Math.floor(Math.random() * Math.floor(max))
}
