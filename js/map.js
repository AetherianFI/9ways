// Create base map and set the location to Abuja, Nigeria
var map = L.map("map", {
    center: [9.05, 7.491302],
    crs: L.CRS.EPSG3857,
    maxBounds: [[8.8, 7.15], [9.2, 7.8]],
    zoom: 14,
    zoomControl: true,
    preferCanvas: false,
}
);

// Choose tiles that the map uses and set min and max zoom
var tileLayer = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    minZoom: 12,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


// Create layer for bus stops that Noa found
var random_bus_stops = L.layerGroup().addTo(map)


// Create layer for bus stops from airport to city
var airport_to_city = L.layerGroup().addTo(map)


// Create busIscon
var busIcon = L.icon({
    iconUrl: '../img/location.png', // Replace 'path/to/bus-icon.png' with the path to your bus icon image
    iconSize: [50, 50], // Set the size of your icon
    iconAnchor: [19, 38], // Set the anchor point of the icon
    popupAnchor: [0, -38] // Set the popup anchor point
})


fetch("../databases/POI.json")
    .then(response => response.json())
    .then(data => {
        // Process the JSON data and create markers
        // For example:
        data.bus_stops.forEach(busStop => {
            var popup = L.popup({ "maxWidth": 400, "maxHeight": 300 });
            popup.setContent(`<div id="popup" style="width: 100.0%; height: 100.0%;"><h1 id="bus_stop_name">${busStop.name}</h1><br>Timetable for the bus stop:<p><code>Insert timetable here...</code></p></div>`);
            var bus_marker = L.marker([busStop.latitude, busStop.longitude], { icon: busIcon })
            if (busStop.color === "red") {
                bus_marker.addTo(airport_to_city)
            } else {
                bus_marker.addTo(random_bus_stops)
            }
            bus_marker.bindPopup(popup)
        });
    })
    .catch(error => console.error("Error loading JSON file:", error));


// Add length ruler to bottom left corner
var control_scale = L.control.scale().addTo(map)


// Create baselayer for bus stops
var baseLayers = {
    "Airport to City": airport_to_city,
    "Random Bus Stops": random_bus_stops
};


// Add layer control so that markers can be toggled on & off
var layer_control = L.control.layers(null, baseLayers).addTo(map);


// Add geocoder control (Search bar)
var geocoder = L.Control.geocoder({
    position: 'topright',
    expand: "hover",
}).addTo(map);


// Add current mouse coordinates to the map
var mousePosition = L.control.mousePosition({ position: "bottomright" }).addTo(map);


// Handle form submission
/* var form = document.getElementById('routeForm');

form.addEventListener('submit', function (event) {

    event.preventDefault(); // Prevent the form from submitting normally

    // Get the start and end points from the form
    var start = document.getElementById('start').value;
    var end = document.getElementById('end').value;

    // Geocode start and end points
    geocoder.geocode(start, function (startResults) {
        var startCoords = startResults.length > 0 ? startResults[0].center : null;
        geocoder.geocode(end, function (endResults) {
            var endCoords = endResults.length > 0 ? endResults[0].center : null;

            // Update waypoints for routing control
            if (startCoords && endCoords) {
                control.setWaypoints([
                    L.latLng(startCoords.lat, startCoords.lng),
                    L.latLng(endCoords.lat, endCoords.lng)
                ]);
            } else {
                alert('Unable to geocode start or end point.');
            }
        });
    });
}); */

// For button creation
function createButton(label, container) {
    var btn = L.DomUtil.create('button', '', container);
    btn.setAttribute('type', 'button');
    btn.innerHTML = label;
    return btn;
}

// On click events
map.on('click', function(e) {
    var container = L.DomUtil.create('div'),
        startBtn = createButton('Start from this location', container),
        destBtn = createButton('Go to this location', container);

    L.popup()
        .setContent(container)
        .setLatLng(e.latlng)
        .openOn(map);
    
    L.DomEvent.on(startBtn, 'click', function() {
        routing.spliceWaypoints(0, 1, e.latlng);
        map.closePopup();
        });

    L.DomEvent.on(destBtn, 'click', function() {
        routing.spliceWaypoints(routing.getWaypoints().length - 1, 1, e.latlng);
        map.closePopup();
        });
});