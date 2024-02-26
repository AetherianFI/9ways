import folium
from folium.plugins import LocateControl, MousePosition, Geocoder
import json

# Coordinates that create a square around Abuja
min_lon, max_lon = 7.15, 7.8
min_lat, max_lat = 8.8, 9.2

# Base map, location of the mid-point & zoom
map = folium.Map(
    max_bounds=True,
    location=[9.072264, 7.491302],
    zoom_start=12,
    min_zoom=12,
    max_zoom=18,
    min_lat=min_lat,
    max_lat=max_lat,
    min_lon=min_lon,
    max_lon=max_lon,
    # Delete comment from the 2 rows under to use different map layout
    # tiles="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png",
    # attr='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>',
)


folium.CircleMarker([max_lat, min_lon], tooltip="Upper Left Corner").add_to(map)
folium.CircleMarker([min_lat, min_lon], tooltip="Lower Left Corner").add_to(map)
folium.CircleMarker([min_lat, max_lon], tooltip="Lower Right Corner").add_to(map)
folium.CircleMarker([max_lat, max_lon], tooltip="Upper Right Corner").add_to(map)

# Accessing the json where busstops are located
with open("POI.json") as file:
    data = json.load(file)

# Feature group
bus_stops = folium.FeatureGroup(name="Bus stops")

# Go through all the stops in the json and add all of them to the map as markers
for i in range(len(data["bus_stops"])):

    bus_stop_name = data["bus_stops"][i]["name"]
    html_with_name = f'<h1 id="bus_stop_name">{bus_stop_name}</h1><br>Timetable for the bus stop:<p><code>Insert timetable here...</code></p>'

    # Create a Popup object with the HTML content
    popup = folium.Popup(html_with_name, max_width=400)

    # Color and icon style of the marker
    color = data["bus_stops"][i]["color"]
    icon = data["bus_stops"][i]["icon"]

    # Add marker to the feature group
    bus_stops.add_child(
        folium.Marker(
            location=[
                data["bus_stops"][i]["latitude"],
                data["bus_stops"][i]["longitude"],
            ],
            popup=popup,
            icon=folium.Icon(color=color, icon=icon, prefix="fa"),
        )
    )
    # Add feature group to the map
    map.add_child(bus_stops)

# Gps tracking request through browser
location = LocateControl().add_to(map)

# Add current mouse coordinates
mouse = MousePosition().add_to(map)

# Add layercontrol UI
layer_control = folium.LayerControl().add_to(map)

# Add search plugin
search = Geocoder().add_to(map)

# Renders the map without creating html file
# map.show_in_browser()

# Rendering + alternative methods commmented down below
map.save("map.html")
