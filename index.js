var COLS = 40
var ROWS = 20
var playerCoords = {x: COLS / 2, y: ROWS / 2}
var grid
var underlyingGrid = []
var bag
var map
var itemPos = 0
var mapPos = {x:0, y:0}
var mapVals = [[]]


function init() {
  createGrid(ROWS, COLS)

  console.log('contains fox', types.creature.includes({char: "f", color: "darkorange"}));

  console.log('type of fox char', getType(chars.fox))
  console.log('type of fox obj', getType(newCreature(creatures.fox)))
  console.log('type of fox creature', getType(creatures.fox));

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
  })
}
