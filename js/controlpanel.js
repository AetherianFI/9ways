// Goes through the POI.json and adds all busstops from there into the dropdown menu
var drop_down_menu = document.getElementById("bus_stop_list");
var timetables = document.getElementById("timetables");

fetch("../databases/POI.json")
    .then((response) => response.json())
    .then((data) => {
        data.bus_stops.forEach((busStop) => {
            var bus_stop_element = document.createElement("option");
            bus_stop_element.textContent = `${busStop.id}. ${busStop.name}`;
            drop_down_menu.add(bus_stop_element);
        });

        // Everytime new option is selected on the dropdown list it updated the selectedIndex variable and changes the timetable into correct one
        drop_down_menu.addEventListener("change", () => {
            var selectedIndex = drop_down_menu.selectedIndex;
            var timetable = data.bus_stops[selectedIndex].timetable;
            timetables.textContent = timetable;
        });
    });
