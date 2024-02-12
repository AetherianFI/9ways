import folium
from folium.plugins import LocateControl
import branca

min_lon, max_lon = 6.611773, 7.914522
min_lat, max_lat = 8.306199, 9.527200

# Base map, location of the mid-point & zoom
map = folium.Map(
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

# html code for the popup window on the marker
html = """
    <h1> Bus stop T1: Terminal </h1><br>
    Timetable for the bus stop:
    <p>
    <code>
        Insert timetable here...
    </code>
    </p>
    """

# Popup
iframe = branca.element.IFrame(html=html, width=400, height=200)
popup = folium.Popup(iframe, max_width=400)

# feature group & adding the popup text to marker
fg = folium.FeatureGroup(name="My Map")
fg.add_child(
    folium.Marker(
        location=[9.072264, 7.491302], popup=popup, icon=folium.Icon(color="red")
    )
)
map.add_child(fg)

# Gps tracking request through browser
location = LocateControl().add_to(map)

# Rendering + alternative methods commmented down below
map.show_in_browser()
# map.save("Map1.hmtl")
# map.render


# Things to add: A way to render only Nigeria's map, not the whole world
