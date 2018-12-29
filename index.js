var COLS = 40
var ROWS = 20
var Pressed = false;


function run () {
  console.log('running')
  createGrid(ROWS, COLS, null)
  var startCell = getCell(playerCoords)
  startCell.innerHTML = '@'

  document.addEventListener('keydown', function (e) {
    console.log(e.code)
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
