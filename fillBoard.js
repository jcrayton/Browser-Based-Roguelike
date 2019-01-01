function populate () {
  for (var r = 0; r < COLS+1; ++r) {
    underlyingGrid.push([])
    for (var c = 0; c < ROWS+1; ++c) {
      underlyingGrid[r].push([])
    }
  }

  setCell(playerCoords, chars.player)

  objGen(chars.boulder)
  objGen(chars.sword)

  for (let i = 0; i < 10; i++) {
    objGen(chars.wall)
  }

  // random lines of walls at random lengths
  for (let i = 0; i < 30; i++) {
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
  for (let i = 0; i < 80; i++) {
    objGen(chars.grass)
  }
}

function edgeCorrection() {
  var x = mapPos.x
  var y = mapPos.y
  var savedGrid

  // console.log(mapVals[x][y-1])
  if (typeof(mapVals[x][y-1]) != 'undefined') {
    savedGrid = mapVals[x][y-1]
    for (var c = 0; c < COLS; ++c) {
      // console.log(savedGrid[c][ROWS-1])
      setCell({x: c, y: 0}, "")
      setCell({x: c, y: 0}, savedGrid[c][ROWS-1])
    }
  }
  // console.log(mapVals[x][y+1])
  if (typeof(mapVals[x][y+1]) != 'undefined') {
    savedGrid = mapVals[x][y+1]
    for (var c = 0; c < COLS; ++c) {
      setCell({x: c, y: ROWS-1}, "")
      // console.log({x: c, y: ROWS-1})
      setCell({x: c, y: ROWS-1}, savedGrid[c][0])
      // console.log({x: c, y: ROWS-1})
    }

  }
  if (Array.isArray(mapVals[mapPos.x-1]) == true) {
    if (typeof(mapVals[x-1][y]) != 'undefined') {
      savedGrid = mapVals[x-1][y]
      for (var r = 0; r < ROWS; ++r) {
        setCell({x: 0, y: r}, "")
        setCell({x: 0, y: r}, savedGrid[COLS-1][r])
      }

    }
  }
  if (Array.isArray(mapVals[mapPos.x+1]) == true) {
    if (typeof(mapVals[x+1][y]) != 'undefined') {
      savedGrid = mapVals[mapPos.x+1][mapPos.y]
      for (var r = 0; r < ROWS; ++r) {
        setCell({x: COLS-1, y: r}, "")
        setCell({x: COLS-1, y: r}, savedGrid[0][r])
      }

    }
  }
}
