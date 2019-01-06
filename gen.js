function objGen (type, x, y, d, l) {
  if (boardIsFull()) {
    return
  }

  // generate wall in random position (if x unspecified)
  if (x === undefined) {
    var test = false
    while (test === false) {
      var coords = {x: getRandomInt(COLS), y: getRandomInt(ROWS)}
      if (getDisplayItem(coords).char === "") {
        setCell(coords, type)
        test = true
      }
    }
  }

  // create straight line of objects (if d and l were specified)
  else if (d !== undefined && l !== undefined) {
    while (l !== 0) {
      var coords = {x: x, y: y}
      if (getDisplayItem(coords).char === "") {
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

function newCreature (creature) {
  var obj = {
    char: creature.charObj.char,
    color: creature.charObj.color,
    hp: creature.hp,
    attack: creature.attack,
    aim: creature.aim,
    friendly: decideBoolean(creature.friendly),
    freq: creature.freq
  }
  console.log('creature', creature);
  console.log('obj', obj);
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
