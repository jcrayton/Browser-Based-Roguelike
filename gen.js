function getRandomEmptyCoords () {
  while (!boardIsFull()) {
    var coords = {x: getRandomInt(COLS), y: getRandomInt(ROWS)}
    if (getDisplayItem(coords).char === '') {
      return coords
    }
  }
}

function objGen (type, x, y, d, l) {
  if (boardIsFull()) {
    return
  }

  // generate obj in random position (if x unspecified)
  if (x === undefined) {
    setCell(getRandomEmptyCoords(), type)
  }

  // create straight line of objects (if d and l were specified)
  else if (d !== undefined && l !== undefined) {
    while (l !== 0) {
      var coords = {x: x, y: y}
      if (getDisplayItem(coords).char === '') {
        setCell(coords, type)
      }
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
      l--
    }
  } else {
    setCell({x: x, y: y}, type)
  }
}

// list of creature instances in the current map chunk

// instantiates creature, adds it to activeCreatures, and adds it to board
function creatureGen (creature) {
  var coords = getRandomEmptyCoords()
  var obj = {
    char: creature.char,
    color: creature.color,
    hp: creature.hp,
    attack: creature.attack,
    aim: creature.aim,
    friendly: decideBoolean(creature.friendly),
    freq: creature.freq,
    coords: coords
  }
  activeCreatures.push(obj)
  setCell(coords, obj)
  return obj
}

// probability of returning true is approx. "probability"
// probability should be between 0 and 1
function decideBoolean (probability) {
  return Math.random() < probability
}

function getRandomInt (max) {
  return Math.floor(Math.random() * Math.floor(max))
}
