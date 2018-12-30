function populate() {
  setCell(playerCoords, chars.player)
  // wallGen(3,3)
  // wallGen(3,4)
  // wallGen(3,5)
  // wallGen(4,5)
  // wallGen(5,5)
  // wallGen(5,4)
  // wallGen(5,3)


  objGen(chars.boulder)

  for (let i = 0; i < 20; i++) {
    objGen(chars.wall)
  }

  // wallGen(8, 7, "w", 5)

}
