function wallGen(x, y, d, l) {
  if (x == undefined) {

    console.log("single wall")
    var test = false
    while (test == false) {
      var i = {x: getRandomInt(COLS), y: getRandomInt(ROWS)}
      if (getCellContent(i) == "") {
        setCell(i, chars.wall)
        test = true
      }
    }
  }
  else if (d != undefined) {
    if (l != undefined) {

      console.log("long wall")
      while (l != 0) {
        setCell({x: x, y: y}, chars.wall);
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
    console.log("defined single wall")
    setCell({x: x, y: y}, chars.wall)
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
