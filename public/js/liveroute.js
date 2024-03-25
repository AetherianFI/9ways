var map = L.map('map').setView([8.96113, 7.2436], 12); 
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map); 

var coordinates = [
  [8.96113, 7.2436],
  [8.95349, 7.26371],
  [8.97266, 7.36307],
  [8.97698, 7.3726],
  [9.00804, 7.41695],
  [9.02931, 7.46921],
  [9.06688, 7.45305],
  [9.05485, 7.48441],
  [9.07054, 7.49532]
  
];

var marker = L.marker(coordinates[0]).addTo(map); 

var currentIndex = 0;

function animateMarker() {
  if (currentIndex === coordinates.length) return;
  var newPosition = coordinates[currentIndex];
  marker.setLatLng(newPosition);
  currentIndex++;
  setTimeout(animateMarker, 3000); 
}

animateMarker();
