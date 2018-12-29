var COLS = 40
var ROWS = 20

function run () {
  createGrid(ROWS, COLS, null)
  setCell(playerCoords, '@')
  setCell({x: 3, y: 3}, chars.wall)

  document.addEventListener('keydown', function (e) {
    // get key, or keyCode if key is null
    var key = e.key || e.keyCode
    switch (key) {
      case "ArrowLeft":
        move(getLeftCoords())
        break
      case "ArrowUp":
        move(getAboveCoords())
        break
      case "ArrowRight":
        move(getRightCoords())
        break
      case "ArrowDown":
        move(getBelowCoords())
        break
    }
  })
}

var chars = {
  player: '@',
  wall: '#'
}
