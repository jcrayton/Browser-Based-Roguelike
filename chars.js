var chars = {
  player: {char: '@', color: 'white'},
  fox: {char: 'f', color: 'darkorange'},
  babaYaga: {char: 'B', color: 'limegreen'},
  firebird: {char: 'F', color: 'orange'},
  deer: {char: 'd', color: 'tan'},
  kolobok: {char: 'k', color: 'goldenrod'},
  wall: {char: '#', color: 'white'},
  hole: {char: '0', color: 'white'},
  boulder: {char: '*', color: 'lightgray'},
  chest: {char: '[', color: 'sienna'},
  gold: {char: '$', color: 'yellow'},
  sword: {char: '/', color: 'silver'},
  grass: {char: '~', color: 'green'},
  fountain: {char: 'Y', color: 'blue'},
  empty: {char: '', color: 'magenta'}
}

// takes an instance (eg a creature) and returns the version found in chars
function getCharObject (object) {
  return {
    char: object.char,
    color: object.color
  }
}

function contains(array, obj) {
    for (var i = 0; i < array.length; i++) {
      if (String(array[i]) == String(obj)) {
        return true
      }
    }
    return false
}

var types = {
  immovable: [chars.wall, chars.hole],
  creature: [chars.player, chars.fox, chars.babaYaga, chars.firebird, chars.deer,
              chars.kolobok],
  movable: [chars.boulder, chars.chest],
  item: [chars.gold, chars.sword],
  terrain: [chars.grass, chars.fountain],
  empty: [chars.empty]
}

var visibility = {
  high: [types.immovable, types.creature, types.movable],
  mid: [types.item],
  low: [types.terrain]
}

var creatures = {
  player: {
    ...chars.player,
    hp: 10,
    attack: 5,
    aim: 0.75,
    friendly: 1,
    freq: 0
  },
  fox: {
    ...chars.fox,
    hp: 4,
    attack: 3,
    aim: 0.7,
    friendly: 0.8,
    freq: 0.4
  },
  babaYaga: {
    ...chars.babaYaga,
    hp: 100,
    attack: 15,
    aim: 0.9,
    friendly: 0.5,
    freq: 0.1
  },
  firebird: {
    ...chars.firebird,
    hp: 20,
    attack: 8,
    aim: 0.5,
    friendly: 1,
    freq: 0.05
  },
  deer: {
    ...chars.deer,
    hp: 20,
    attack: 2,
    aim: 0.2,
    friendly: 0.9,
    freq: 0.7
  },
  kolobok: {
    ...chars.kolobok,
    hp: 1,
    attack: 0,
    aim: 0.2,
    friendly: 1,
    freq: 0.15
  }
}
