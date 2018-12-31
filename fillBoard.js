function populate () {
  setCell(playerCoords, chars.player)

  objGen(chars.boulder)
  objGen(chars.sword)

  for (let i = 0; i < 10; i++) {
    objGen(chars.wall)
  }

  // random lines of walls at random lengths
  for (let i = 0; i < 60; i++) {
    var l = getRandomInt(7)
    var d = (getRandomInt(2) === 0) ? 's' : 'e'
    var maxX = 0
    var maxY = 0
    if (d === 's') {
      maxX = COLS
      maxY = ROWS - l - 1
    }
    else {
      maxX = COLS - l - 1
      maxY = ROWS
    }
    objGen(chars.wall, getRandomInt(maxX), getRandomInt(maxY), d, l)
  }
}

function edgeCorrection() {
  var x = mapPos.x
  var y = mapPos.y

  // console.log(mapVals[x][y-1])
  if (typeof(mapVals[x][y-1]) != 'undefined') {
    savedGrid = mapVals[x][y-1]
    for (var c = 0; c < COLS; ++c) {
      var cell = getCell({x: c, y: 0})
      cell.innerHTML = savedGrid[ROWS-1][c]
    }
  }
  // console.log(mapVals[x][y+1])
  if (typeof(mapVals[x][y+1]) != 'undefined') {
    savedGrid = mapVals[x][y+1]
    for (var c = 0; c < COLS; ++c) {
      var cell = getCell({x: c, y: ROWS-1})
      cell.innerHTML = savedGrid[0][c]
    }

  }
  if (Array.isArray(mapVals[mapPos.x-1]) == true) {
    if (typeof(mapVals[x-1][y]) != 'undefined') {
      savedGrid = mapVals[x-1][y]
      for (var r = 0; r < ROWS; ++r) {
        var cell = getCell({x: 0, y: r})
        cell.innerHTML = savedGrid[r][COLS-1]
      }

    }
  }
  if (Array.isArray(mapVals[mapPos.x+1]) == true) {
    if (typeof(mapVals[x+1][y]) != 'undefined') {
      savedGrid = mapVals[mapPos.x+1][mapPos.y]
      for (var r = 0; r < ROWS; ++r) {
        var cell = getCell({x: COLS-1, y: r})
        cell.innerHTML = savedGrid[r][0]
      }

    }
  }
}
