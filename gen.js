function randWallGen() {
  setCell({x: getRandomInt(COLS), y: getRandomInt(ROWS)}, chars.wall)
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
