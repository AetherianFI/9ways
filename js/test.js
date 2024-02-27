var POIjson = require("../POI.json");

for (let i = 0; i < Object.keys(POIjson["bus_stops"]).length; i++) {
    console.log(POIjson["bus_stops"][i]["name"])
}