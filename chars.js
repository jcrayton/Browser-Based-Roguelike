var chars = {
  player: '@',
  fox: 'f',
  wall: '#',
  hole: '0',
  boulder: '*',
  chest: '[',
  gold: '$',
  sword: '/',
  grass: 'w',
  fountain: 'Y'
}

var types = {
  immovable: [chars.wall, chars.hole],
  creature: [chars.player, chars.fox],
  movable: [chars.boulder, chars.chest],
  item: [chars.gold, chars.sword],
  terrain: [chars.grass, chars.fountain]
}
