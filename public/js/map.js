// Create base map and set the location to Abuja, Nigeria
var map = L.map("map", {
    center: [9.05, 7.491302],
    crs: L.CRS.EPSG3857,
    maxBounds: [
        [8.8, 7.15],
        [9.2, 7.8],
    ],
    zoom: 14,
    zoomControl: true,
    preferCanvas: false,
});

// Choose tiles that the map uses and set min and max zoom
var tileLayer = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    minZoom: 11,
    attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

// Create layers for the different busstops routes
var airport_to_city = L.markerClusterGroup({
    disableClusteringAtZoom: 13,
}).addTo(map);
var route_2 = L.markerClusterGroup({ disableClusteringAtZoom: 13 }).addTo(map);
var route_3 = L.markerClusterGroup({ disableClusteringAtZoom: 13 }).addTo(map);

// Create busIcon
var busIconRoute1 = L.icon({
    iconUrl: "../img/b.png",
    iconSize: [80, 80], // Set the size of the icon
    iconAnchor: [15, 30], // Set the anchor point of the icon
    popupAnchor: [0, -30], // Set the popup anchor point
});

var busIconRoute2 = L.icon({
    iconUrl: "../img/a.png",
    iconSize: [80, 80], // Set the size of the icon
    iconAnchor: [15, 30], // Set the anchor point of the icon
    popupAnchor: [0, -30], // Set the popup anchor point
});

var busIconRoute3 = L.icon({
    iconUrl: "../img/e.png",
    iconSize: [80, 80], // Set the size of the icon
    iconAnchor: [15, 30], // Set the anchor point of the icon
    popupAnchor: [0, -30], // Set the popup anchor point
});

// Fetch bus stop data from JSON file
fetch("../databases/POI.json")
    .then((response) => response.json())
    .then((data) => {
        // Process the JSON data and create markers
        // For example:
        data.bus_stops.forEach((busStop) => {
            var popup = L.popup({ maxWidth: 400, maxHeight: 300 });
            popup.setContent(
                `<div id="popup" style="width: 100.0%; height: 100.0%;"><h1>${busStop.id}. ${busStop.name}</h1><br>Timetable for the bus stop:<p>${busStop.timetable}</p></div>`
            );

            var busIcon;
            if (busStop.route === 1) {
                busIcon = busIconRoute1;
            } else if (busStop.route === 2) {
                busIcon = busIconRoute2;
            } else if (busStop.route === 3) {
                busIcon = busIconRoute3;
            }

            var bus_marker = L.marker([busStop.latitude, busStop.longitude], {
                icon: busIcon,
            });

            if (busStop.route === 1) {
                bus_marker.addTo(airport_to_city);
            } else if (busStop.route === 2) {
                bus_marker.addTo(route_2);
            } else if (busStop.route === 3) {
                bus_marker.addTo(route_3);
            }

            bus_marker.bindPopup(popup);
        });
    })
    .catch((error) => console.error("Error loading JSON file:", error));

// Add length ruler to bottom left corner
var control_scale = L.control.scale().addTo(map);

// Create baselayer for bus stops
var baseLayers = {
    "Airport to City": airport_to_city,
    "Route 2": route_2,
    "Route 3": route_3,
};

// Add layer control so that markers can be toggled on & off
var layer_control = L.control.layers(null, baseLayers).addTo(map);

// Add geocoder control (Search bar)
var geocoder = L.Control.geocoder({
    position: "topright",
    expand: "hover",
}).addTo(map);

// Add current mouse coordinates to the map
var mousePosition = L.control
    .mousePosition({ position: "bottomright" })
    .addTo(map);
