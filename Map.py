import folium
from folium.plugins import LocateControl
from folium.plugins import MousePosition
import branca
import json

# Coordinates that create a square around Abuja, doesnt work
min_lon, max_lon = 7.21, 7.56
min_lat, max_lat = 8.944, 9.2

# Base map, location of the mid-point & zoom
map = folium.Map(
    max_bounds=True,
    location=[9.072264, 7.491302],
    zoom_start=12,
    min_lat=min_lat,
    max_lat=max_lat,
    min_lon=min_lon,
    max_lon=max_lon,
)

folium.CircleMarker([max_lat, min_lon], tooltip="Upper Left Corner").add_to(map)
folium.CircleMarker([min_lat, min_lon], tooltip="Lower Left Corner").add_to(map)
folium.CircleMarker([min_lat, max_lon], tooltip="Lower Right Corner").add_to(map)
folium.CircleMarker([max_lat, max_lon], tooltip="Upper Right Corner").add_to(map)

# Alternative tile theme for folium.Map
# tiles="Cartodb Positron"

# Accessing the json where busstops are located
with open("busstops.json") as file:
    data = json.load(file)

# Feature group
fg = folium.FeatureGroup(name="My Map")

# Go through all the stops in the json and add all of them to the map as markers
for i in range(len(data["bus_stops"])):

    bus_stop_name = data["bus_stops"][i]["name"]
    html_with_name = f'<h1 id="bus_stop_name">{bus_stop_name}</h1><br>Timetable for the bus stop:<p><code>Insert timetable here...</code></p>'

    # Create a Popup object with the HTML content
    popup = folium.Popup(html_with_name, max_width=400)

    # Add marker to the feature group
    fg.add_child(
        folium.Marker(
            location=[
                data["bus_stops"][i]["latitude"],
                data["bus_stops"][i]["longitude"],
            ],
            popup=popup,
            icon=folium.Icon(color="red"),
        )
    )
    # Add feature group to the map
    map.add_child(fg)

# Gps tracking request through browser
location = LocateControl().add_to(map)

# Add current mouse coordinates
mouse = MousePosition().add_to(map)

# Rendering + alternative methods commmented down below
map.show_in_browser()
# map.save("index.hmtl")
# map.render


# Things to add: A way to render only Nigeria's map, not the whole world
