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


var tileLayer = L.tileLayer(
    "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
        "attribution": "\u0026copy; \u003ca href=\"https://www.openstreetmap.org/copyright\"\u003eOpenStreetMap\u003c/a\u003e contributors", "maxNativeZoom": 19, "maxZoom": 19, "minZoom": 12
    }).addTo(map);

// Create layers for the bus stops and add layer to the map
var bus_stops_layer = L.layerGroup().addTo(map)


fetch("../databases/POI.json")
    .then(response => response.json())
    .then(data => {
        // Process the JSON data and create markers
        // For example:
        data.bus_stops.forEach(busStop => {
            var popup = L.popup({ "maxWidth": 400, "maxHeight": 300 });
            popup.setContent(`<div id="popup" style="width: 100.0%; height: 100.0%;"><h1 id="bus_stop_name">${busStop.name}</h1><br>Timetable for the bus stop:<p><code>Insert timetable here...</code></p></div>`);
            var bus_marker = L.marker([busStop.latitude, busStop.longitude]).addTo(bus_stops_layer);
            bus_marker.bindPopup(popup)
        });
    })
    .catch(error => console.error("Error loading JSON file:", error));


// Add length ruler to bottom left corner
var control_scale = L.control.scale().addTo(map)


// Create baselayer for bus stops
var baseLayers = {
    "Bus stops": bus_stops_layer
};


// Add layer control so that markers can be toggled on & off
var layer_control = L.control.layers(null, baseLayers).addTo(map);


// Add geocoder control (Search bar)
var geocoder = L.Control.geocoder({
    position: 'topright'
}).addTo(map);

// Add current mouse coordinates to the map
var mousePosition = L.control.mousePosition({ position: "bottomright" }).addTo(map);