function wallGen(x, y) {
  if (x == undefined) {
    var test = false
    while (test == false) {
      var i = {x: getRandomInt(COLS), y: getRandomInt(ROWS)}
      if (getCellContent(i) == "") {
        setCell(i, chars.wall)
        test = true
      }
    }
  }
  else {
    setCell({x: x, y: y}, chars.wall)
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
