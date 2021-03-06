var COLS = 40
var ROWS = 20
var playerCoords = {x: COLS / 2, y: ROWS / 2}
var grid
var underlyingGrid = []
var savedGridOfCreatures = [[]]
var bag
var map
var itemPos = 0
var mapPos = {x:0, y:0}
var mapVals = [[]]
var activeCreatures = []


function init() {
  createGrid(ROWS, COLS)
  populate()
  setCell(playerCoords, chars.player)
  displayMap()
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
        playerCoords = move(playerCoords, getLeftCoords(), "l")
        break
      case "ArrowUp":
        playerCoords = move(playerCoords, getAboveCoords(), "u")
        break
      case "ArrowRight":
        playerCoords = move(playerCoords, getRightCoords(), "r")
        break
      case "ArrowDown":
        playerCoords = move(playerCoords, getBelowCoords(), "d")
        break
    }

    // update the rest of the game (creatures, etc)
    if (key == 'ArrowLeft' || key == 'ArrowUp' || key == 'ArrowRight' || key == 'ArrowDown' || key == 'k') {
      moveCreatures()
    }
  })
}
