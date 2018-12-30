var COLS = 40
var ROWS = 20
var playerCoords = {x: COLS / 2, y: ROWS / 2}
var superMap = []
var grid
var bag
var itemPos = 0

function init() {
  createGrid(ROWS, COLS)
  populate()
  var audio = new Audio('http://ericskiff.com/music/Resistor%20Anthems/01%20A%20Night%20Of%20Dizzy%20Spells.mp3')
  audio.play();
  inventory()
  run()
}

function inventory () {
  bag = document.getElementById('bag')
  for (var i = 0; i < 10; ++i) {
    var slot = bag.appendChild(document.createElement('ti'))
    slot.classList.add('slot')
    slot.id = 'slot' + i
  }
}

function run () {
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
