function populate () {
  for (var r = 0; r < COLS + 1; ++r) {
    underlyingGrid.push([])
    for (var c = 0; c < ROWS + 1; ++c) {
      underlyingGrid[r].push([])
    }
  }

  objGen(chars.boulder)
  objGen(chars.sword)

  for (let i = 0; i < 10; i++) {
    objGen(chars.wall)
  }

  // random lines of walls at random lengths
  for (let i = 0; i < 40; i++) {
    var l = getRandomInt(7)
    var d = (getRandomInt(2) === 0) ? 's' : 'e'
    var maxX = 0
    var maxY = 0
    if (d === 's') {
      maxX = COLS
      maxY = ROWS - l - 1
    } else {
      maxX = COLS - l - 1
      maxY = ROWS
    }
    objGen(chars.wall, getRandomInt(maxX), getRandomInt(maxY), d, l)
  }

  for (let i = 0; i < 80; i++) {
    objGen(chars.grass)
  }
}

function renderChunk (mapPiece) {
  var savedGrid = []
  for (var r = 0; r < COLS + 1; ++r) {
    savedGrid.push([])
    for (var c = 0; c < ROWS + 1; ++c) {
      savedGrid[r].push([])
    }

    // for (let i = 0; i < 5; i++) {
    //   objGen(chars.grass)
    // }
    console.log(mapPiece)
    if (Array.isArray(mapVals[mapPiece.x]) === true) {
      mapVals[mapPiece.x][mapPiece.y] = savedGrid
    } else {
      mapVals[mapPiece.x] = []
      mapVals[mapPiece.x][mapPiece.y] = savedGrid
    }
  }

}
function edgeCorrection () {
  var x = mapPos.x
  var y = mapPos.y
  var savedGrid

  if (typeof (mapVals[x][y - 1]) != 'undefined') {
    savedGrid = mapVals[x][y - 1]
    for (var c = 0; c < COLS; ++c) {
      underlyingGrid[c][0] = savedGrid[c][ROWS - 1]
      displayCell({x:c, y:0})
    }
  }
  if (typeof (mapVals[x][y + 1]) != 'undefined') {
    savedGrid = mapVals[x][y + 1]
    for (var c = 0; c < COLS; ++c) {
      underlyingGrid[c][ROWS - 1] = savedGrid[c][0]
      displayCell({x:c, y:ROWS-1})
    }
  }
  if (Array.isArray(mapVals[mapPos.x - 1]) === true) {
    if (typeof(mapVals[x - 1][y]) !== 'undefined') {
      savedGrid = mapVals[x - 1][y]
      for (var r = 0; r < ROWS; ++r) {
        underlyingGrid[0][r] = savedGrid[COLS - 1][r]
        displayCell({x:0, y:r})
      }
    }
  }
  if (Array.isArray(mapVals[mapPos.x + 1]) === true) {
    if (typeof (mapVals[x + 1][y]) !== 'undefined') {
      savedGrid = mapVals[mapPos.x+1][mapPos.y]
      for (var r = 0; r < ROWS; ++r) {
        underlyingGrid[COLS - 1][r] = savedGrid[0][r]
        displayCell({x:COLS-1, y:r})
      }
    }
  }
}
