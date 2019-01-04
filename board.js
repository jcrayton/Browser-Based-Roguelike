// this will need to include a greate array piece
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
      if (underlyingGrid[col][row].length === 0) {
        emptyCells.push({x: col, y: row})
      }
    }
  }
  return emptyCells
}

function boardIsFull () {
  for (r = 0; r < ROWS - 1; r++) {
    for (c = 0; c < COLS - 1; c++) {
      if (underlyingGrid[c][r].length === 0) {
        return false
      }
    }
  }
  return true
}

function setCell (coords, type) {
  if (Array.isArray(type) === true) {
    for (i = 0; i < char.length; i++) {
      underlyingGrid[coords.x][coords.y].push(String(type[i]))
    }
  } else if (type.char === '') {
    underlyingGrid[coords.x][coords.y] = []
  } else {
    underlyingGrid[coords.x][coords.y].push(type)
  }
  displayCell(coords)
}

// we would need to reassign values from one cell to
// another individually
function moveCell (origin, target, type) {
  underlyingGrid[origin.x][origin.y].splice(underlyingGrid[origin.x][origin.y].indexOf(type), 1)
  underlyingGrid[target.x][target.y].push(type)
  displayCell(origin)
  displayCell(target)
}

function renderCellHTML (coords, object) {
  var cell = getCell(coords)
  cell.innerHTML = object.char
  cell.style.color = object.color
}

// the idea is that this function would pick a val to display out of the items that are in the cell
function getDisplayItem (coords) {
  var cell = getCell(coords)
  var array = underlyingGrid[coords.x][coords.y]
  for (i = 0; i < array.length; i++) {
    if (types.immovable.includes(array[i]) || types.creature.includes(array[i]) || types.movable.includes(array[i]) === true) {
      return array[i]
    }
  }
  for (i = 0; i < array.length; i++) {
    if (types.item.includes(array[i]) === true) {
      return array[i]
    }
  }
  for (i = 0; i < array.length; i++) {
    if (types.terrain.includes(array[i]) === true) {
      return array[i]
    }
  }
  return types.empty[0]
}

function displayCell (coords) {
  var displayItem = getDisplayItem(coords)
  renderCellHTML(coords, displayItem)
}

function removeCell (coords, char) {
  underlyingGrid[coords.x][coords.y].splice(underlyingGrid[coords.x][coords.y].indexOf(char), 1)
  displayCell(coords)
}

function getCell (coords) {
  return document.getElementById('cell' + coords.y + 'x' + coords.x)
}

function getCellContent (coords) {
  return underlyingGrid[coords.x][coords.y]
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

function boardSwap (d) {
  // will need to deal with 1) the map and 2) the player
  saveBoard()
  clearBoard(d)
  switch (d) {
    case "u":
      mapPos.y--
      playerCoords.y = ROWS - 1
      break
    case "d":
      mapPos.y++
      playerCoords.y = 0
      break
    case "l":
      mapPos.x--
      if (Array.isArray(mapVals[mapPos.x]) === false) {
        mapVals[mapPos.x] = []
      }

      playerCoords.x = COLS - 1
      break
    case "r":
      mapPos.x++
      if (Array.isArray(mapVals[mapPos.x]) === false) {
        mapVals[mapPos.x] = []
      }

      playerCoords.x = 0
      break
  }
  if (typeof (mapVals[mapPos.x][mapPos.y]) === 'undefined') {
    populate()
  } else {
    refillBoard()
  }
  edgeCorrection()
  setCell(playerCoords, chars.player)
  return
}

function saveBoard() {
  setCell(playerCoords, '')
  if (Array.isArray(mapVals[mapPos.x]) === true) {
    mapVals[mapPos.x][mapPos.y] = underlyingGrid
  } else {
    mapVals[mapPos.x] = []
    mapVals[mapPos.x][mapPos.y] = underlyingGrid
  }
}

function clearBoard() {
  underlyingGrid = []
  for (var r = 0; r < COLS; ++r) {
    for (var c = 0; c < ROWS; ++c) {
      var cell = getCell({x: r, y: c})
      cell.innerHTML = ''
    }
  }
}

// TODO generalize so it takes in a grid and start coords
function refillBoard() {
  underlyingGrid = mapVals[mapPos.x][mapPos.y]
  for (var r = 0; r < COLS; ++r) {
    for (var c = 0; c < ROWS; ++c) {
      var cell = getCell({x: r, y: c})
      displayCell({x: r, y: c})
    }
  }
}
