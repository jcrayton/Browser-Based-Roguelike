function wallGen(x, y) {
  // random wall generation
  if (x == undefined) {
    var done = false
    while (!done) {
      var x = getRandomInt(COLS)
      var y = getRandomInt(ROWS)
      if (getCellContent({x: x, y: y}) == '') {
        done = true
        setCell({x: x, y: y}, chars.wall)
      }
    }
  }
  // wall generation at set coords
  else {
    setCell({x: x, y: y}, chars.wall)
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
