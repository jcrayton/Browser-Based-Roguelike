function createGrid (rows, cols) {
  grid = document.getElementById('grid')
  for (var r = 0; r < rows; ++r) {
    var row = grid.appendChild(document.createElement('tr'))
    row.classList.add('row')
    row.id = 'row' + r
    for (var c = 0; c < cols; ++c) {
      var cell = row.appendChild(document.createElement('td'))
      cell.id = 'cell' + r + 'x' + c
      cell.classList.add('cell')
    }
  }
}

function getEmptyCoords () {
  var emptyCells = []
  for (var row = 0; row < ROWS; row++) {
    for (var col = 0; col < COLS; col++) {
      var coords = {x: col, y: row}
      if (getCellContent(coords) === '') {
        emptyCells.push(coords)
      }
    }
  }
  return emptyCells
}

function setCell (coords, char) {
  var cell = getCell(coords)
  cell.innerHTML = char
}

function getCell (coords) {
  return document.getElementById('cell' + coords.y + 'x' + coords.x)
}

function getCellContent (coords) {
  return getCell(coords).innerHTML
}

function getAboveCoords () {
  if (playerCoords.y === 0) {
    return null
  }
  return {x: playerCoords.x, y: playerCoords.y - 1}
}

function getBelowCoords () {
  if (playerCoords.y === ROWS - 1) {
    return null
  }
  return {x: playerCoords.x, y: playerCoords.y + 1}
}

function getLeftCoords () {
  if (playerCoords.x === 0) {
    return null
  }
  return {x: playerCoords.x - 1, y: playerCoords.y}
}

function getRightCoords () {
  if (playerCoords.x === COLS - 1) {
    return null
  }
  return {x: playerCoords.x + 1, y: playerCoords.y}
}

function boardSwap(d) {
  //will need to deal with 1) the map and 2) the player
  saveBoard()
  clearBoard(d)
  switch (d) {
    case "u":
      mapPos.y--
      playerCoords.y = ROWS-1
      break
    case "d":
      mapPos.y++
      playerCoords.y = 0
      break
    case "l":
      mapPos.x--
      playerCoords.x = COLS-1
      break
    case "r":
      mapPos.x++
      playerCoords.x = 0
      break
  }
  console.log(mapPos)
  setCell(playerCoords, chars.player)
  if (mapVals[mapPos.x][mapPos.y] == undefined) {
    // populate()
  }
  else {
    refillBoard()
  }
  return
}

function saveBoard() {
  setCell(playerCoords, "")
  console.log("within save")
  var savedGrid = []
  for (var r = 0; r < ROWS; ++r) {
    savedGrid.push([])
    for (var c = 0; c < COLS; ++c) {
      var cell = getCell({x: c, y: r})
      // console.log(c, r)
      savedGrid[r].push(cell.innerHTML)
      // console.log(savedGrid[c][r])
    }
  }
  if (Array.isArray(mapVals[mapPos.x]) == true) {
    mapVals[mapPos.x][mapPos.y] = savedGrid
  }
  else {
    mapVals[mapPos.x] = []
    mapVals[mapPos.x][mapPos.y] = savedGrid
  }
  console.log(mapPos.x, mapPos.y)
}

// function saveBoard() {
//   setCell(playerCoords, "")
//   console.log("within save")
//   var savedGrid = []
//   for (var r = 0; r < ROWS; ++r) {
//     savedGrid.push([])
//     for (var c = 0; c < COLS; ++c) {
//       var cell = getCell({x: c, y: r})
//       // console.log(c, r)
//       savedGrid[r].push(cell.innerHTML)
//       // console.log(savedGrid[c][r])
//     }
//   }
//   if (mapPos.x >= 0) {
//     if (mapPos.y >= 0) {
//       mapVals[mapPos.x][mapPos.y] = savedGrid
//     }
//     else {
//       mapVals1[mapPos.x][mapPos.y*(-1)] = savedGrid
//     }
//   }
//   else {
//     if (mapPos.y >= 0) {
//       mapVals3[mapPos.x][mapPos.y] = savedGrid
//     }
//     else {
//       mapVals2[mapPos.x][mapPos.y*(-1)] = savedGrid
//     }
//   }
//   mapVals[mapPos.x][mapPos.y] = savedGrid
//   console.log(mapPos.x, mapPos.y)
// }

function clearBoard(d) {
  for (var r = 0; r < ROWS; ++r) {
    for (var c = 0; c < COLS; ++c) {
      var cell = getCell({x: c, y: r})
      cell.innerHTML = ""
    }
  }
}

function refillBoard() {
  var savedGrid = mapVals[mapPos.x][mapPos.y]
  for (var r = 0; r < ROWS; ++r) {
    for (var c = 0; c < COLS; ++c) {
      var cell = getCell({x: c, y: r})
      cell.innerHTML = savedGrid[r][c]
    }
  }
    setCell(playerCoords, chars.player)
}
