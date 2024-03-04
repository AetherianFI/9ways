// Map initialization 
var map = L.map('map').setView([9.072264, 7.491302], 12);

//osm layer
var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});
osm.addTo(map);

if (!navigator.geolocation) {
    console.log("Your browser doesn't support geolocation feature!")
} else {
    setInterval(() => {
        navigator.geolocation.getCurrentPosition(getPosition)
    }, 5000);
}

var marker, circle;

function getPosition(position) {
    // console.log(position)
    var lat = position.coords.latitude
    var long = position.coords.longitude
    var accuracy = position.coords.accuracy

    if (marker) {
        map.removeLayer(marker)
    }

    if (circle) {
        map.removeLayer(circle)
    }

    // Define a custom bus icon
    var busIcon = L.icon({
        iconUrl: '../img/location.png', // Replace 'path/to/bus-icon.png' with the path to your bus icon image
        iconSize: [50, 50], // Set the size of your icon
        iconAnchor: [19, 38], // Set the anchor point of the icon
        popupAnchor: [0, -38] // Set the popup anchor point
    });

    marker = L.marker([lat, long], { icon: busIcon }); // Pass the custom icon to the marker
    circle = L.circle([lat, long], { radius: accuracy })

    var featureGroup = L.featureGroup([marker]).addTo(map)

    map.fitBounds(featureGroup.getBounds())

    console.log("Your coordinate is: Lat: " + lat + " Long: " + long + " Accuracy: " + accuracy)
}