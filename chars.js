var chars = {
  player: '@',
  fox: 'f',
  wall: '#',
  hole: '0',
  boulder: '*',
  chest: '[',
  gold: '$',
  sword: '/'
}

var types = {
  immovable: [chars.wall, chars.hole],
  creature: [chars.player, chars.fox],
  boulder: [chars.boulder, chars.chest],
  items: [chars.gold, chars.sword]
}
