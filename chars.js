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

function getType (object) {
  var test = object
  if (object.charObj !== undefined) {
    // then object is an instance, not a member of the chars variable
    test = object.charObj
  }
  // console.log('test', test)
  for (var type in types) {
    // console.log('type', type)
    if (contains(type, test)) {
      return type
    }
  }
}

// from https://stackoverflow.com/questions/237104/how-do-i-check-if-an-array-includes-an-object-in-javascript?rq=1
function contains(a, obj) {
    var i = a.length;
    while (i--) {
       if (a[i] === obj) {
           return true;
       }
    }
    return false;
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
    charObj: chars.player,
    hp: 10,
    attack: 5,
    aim: 0.75,
    friendly: 1,
    freq: 0
  },
  fox: {
    charObj: chars.fox,
    hp: 4,
    attack: 3,
    aim: 0.7,
    friendly: 0.8,
    freq: 0.4
  },
  babaYaga: {
    charObj: chars.babaYaga,
    hp: 100,
    attack: 15,
    aim: 0.9,
    friendly: 0.5,
    freq: 0.1
  },
  firebird: {
    charObj: chars.firebird,
    hp: 20,
    attack: 8,
    aim: 0.5,
    friendly: 1,
    freq: 0.05
  },
  deer: {
    charObj: chars.deer,
    hp: 20,
    attack: 2,
    aim: 0.2,
    friendly: 0.9,
    freq: 0.7
  },
  kolobok: {
    charObj: chars.kolobok,
    hp: 1,
    attack: 0,
    aim: 0.2,
    friendly: 1,
    freq: 0.15
  }
}
