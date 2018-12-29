function wallGen(x, y) {
  if (x == undefined) {
    setCell({x: getRandomInt(COLS), y: getRandomInt(ROWS)}, chars.wall)
  }
  else {
    setCell({x: x, y: y}, chars.wall)
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
