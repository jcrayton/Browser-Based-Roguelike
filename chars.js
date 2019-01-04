var chars = {
  player: {char: '@', color: 'white'},
  fox: {char: 'f', color: 'orange'},
  wall: {char: '#', color: 'white'},
  hole: {char: '0', color: 'white'},
  boulder: {char: '*', color: 'white'},
  chest: {char: '[', color: 'white'},
  gold: {char: '$', color: 'yellow'},
  sword: {char: '/', color: 'white'},
  grass: {char: '~', color: 'green'},
  fountain: {char: 'Y', color: 'blue'},
  empty: {char: '', color: 'magenta'}
}

var types = {
  immovable: [chars.wall, chars.hole],
  creature: [chars.player, chars.fox],
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
