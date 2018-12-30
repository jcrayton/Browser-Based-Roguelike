function objGen(type, x, y, d, l) {
  if (x == undefined) {

    var test = false
    while (test == false) {
      var i = {x: getRandomInt(COLS), y: getRandomInt(ROWS)}
      if (getCellContent(i) == "") {
        setCell(i, type)
        test = true
      }
    }
  }
  else if (d != undefined) {
    if (l != undefined) {

      while (l != 0) {
        setCell({x: x, y: y}, type);
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
        l--;
      }
    }
  }
  else {
    setCell({x: x, y: y}, type)
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
