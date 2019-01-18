function displayMap() {
  map = document.getElementById('map')
  x = String(mapPos.x) + ',' + String(mapPos.y)
  map.innerHTML = x
  map.style.color = 'white'
}
