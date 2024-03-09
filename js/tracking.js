// Map initialization
var map = L.map("map").setView([9.072264, 7.491302], 12);

// Get the location instantly after the code runs and page loads instead of waiting 5s
navigator.geolocation.getCurrentPosition(getPosition);

// Choose tiles that the map uses and set min and max zoom
var osm = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    minZoom: 12,
    attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

if (!navigator.geolocation) {
    console.log("Your browser doesn't support geolocation feature!");
} else {
    setInterval(() => {
        navigator.geolocation.getCurrentPosition(getPosition);
    }, 5000);
}

var marker, circle;

function getPosition(position) {
    // console.log(position)
    var lat = position.coords.latitude;
    var long = position.coords.longitude;
    var accuracy = position.coords.accuracy;

    if (marker) {
        map.removeLayer(marker);
    }

    // Define a custom bus icon
    var busIcon = L.icon({
        iconUrl: "../img/location.png", // Replace 'path/to/bus-icon.png' with the path to your bus icon image
        iconSize: [50, 50], // Set the size of your icon
        iconAnchor: [19, 38], // Set the anchor point of the icon
        popupAnchor: [0, -38], // Set the popup anchor point
    });

    marker = L.marker([lat, long], { icon: busIcon }); // Pass the custom icon to the marker

    var featureGroup = L.featureGroup([marker]).addTo(map);

    map.setView([lat, long], 16);

    console.log(
        "Your coordinate is: Lat: " +
            lat +
            " Long: " +
            long +
            " Accuracy: " +
            accuracy
    );
}

//If user is logged in then make the map visible, on default map is not visible
var username = localStorage.get("loggedInUser");
var tracking_map = document.getElementById("map");

if (username) {
    tracking_map.style.display = "block";
}
