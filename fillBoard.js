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
    var d = (getRandomInt(2) == 0) ? 's' : 'e'
    var maxX = 0
    var maxY = 0
    if (d == 's') {
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
