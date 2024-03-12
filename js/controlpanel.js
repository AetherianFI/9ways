var drop_down_menu = document.getElementById("bus_stop_list");
var timetable = document.getElementById("timetable");

// Goes through the POI.json and adds all busstops from there into the dropdown menu
fetch("../databases/POI.json")
    .then((response) => response.json())
    .then((data) => {
        data.bus_stops.forEach((busStop) => {
            var bus_stop_element = document.createElement("option");
            bus_stop_element.textContent = `${busStop.id}. ${busStop.name}`;
            drop_down_menu.add(bus_stop_element);
        });

        // Everytime different bus stop is selected from the dropdown list it updated the selectedIndex variable and changes the timetable into one that matches the busstop
        drop_down_menu.addEventListener("change", () => {
            var selectedIndex = drop_down_menu.selectedIndex;
            var busstop_timetable = data.bus_stops[selectedIndex].timetable;
            // Adds timetable to the element with "timetables" id and separates the values with space
            timetable.textContent = busstop_timetable.join(" ");
        });
    });

function updateTimetables(event) {
    event.preventDefault();
}
