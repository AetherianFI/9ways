var map = L.map("map", {
    center: [9.072264, 7.491302],
    crs: L.CRS.EPSG3857,
    maxBounds: [[8.8, 7.15], [9.2, 7.8]],
    zoom: 12,
    zoomControl: true,
    preferCanvas: false,
}
);


var tileLayer = L.tileLayer(
    "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
        "attribution": "\u0026copy; \u003ca href=\"https://www.openstreetmap.org/copyright\"\u003eOpenStreetMap\u003c/a\u003e contributors", "maxNativeZoom": 19, "maxZoom": 19, "minZoom": 12
    }).addTo(map);


fetch("../POI.json")
    .then(response => response.json())
    .then(data => {
        // Process the JSON data and create markers
        // For example:
        data.bus_stops.forEach(busStop => {
            L.marker([busStop.latitude, busStop.longitude]).addTo(map);
        });
    })
    .catch(error => console.error("Error loading JSON file:", error));

// Add length ruler to bottom left corner
var controlscale = L.control.scale().addTo(map)