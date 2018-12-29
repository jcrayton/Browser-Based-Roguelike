var COLS = 40
var ROWS = 20
var playerCoords = {x: COLS / 2, y: ROWS / 2}

function run () {
  createGrid(ROWS, COLS)
  setCell(playerCoords, chars.player)
  wallGen(3,3)
  wallGen(3,4)
  wallGen(3,5)
  wallGen(4,5)
  wallGen(5,5)
  wallGen(5,4)
  wallGen(5,3)

  // for (let i = 0; i < 100; i++) {
  //   wallGen()
  // }

  wallGen(8, 7, "w", 5)

  var audio = new Audio('http://ericskiff.com/music/Resistor%20Anthems/01%20A%20Night%20Of%20Dizzy%20Spells.mp3')
  audio.play()

  document.addEventListener('keydown', function (e) {
    // get key, or keyCode if key is null
    var key = e.key || e.keyCode
    switch (key) {
      case "ArrowLeft":
        move(getLeftCoords(), "l")
        break
      case "ArrowUp":
        move(getAboveCoords(), "u")
        break
      case "ArrowRight":
        move(getRightCoords(), "r")
        break
      case "ArrowDown":
        move(getBelowCoords(), "d")
        break
    }
  })
}
