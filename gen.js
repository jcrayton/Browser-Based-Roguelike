function randWallGen() {
  setCell({x: getRandomInt(ROWS), y: getRandomInt(COLS)}, chars.wall)
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
