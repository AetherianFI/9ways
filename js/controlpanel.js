var drop_down_menu = document.getElementById("bus_stop_list");
var timetable = document.getElementById("timetable");
var time_list = document.getElementById("time_selection");

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

            // Clears the previous times that have been added to the selection element
            time_list.textContent = "";

            // Goes through all the busstops from the selectedIndex busstop and adds them to selection element
            data.bus_stops[selectedIndex].timetable.forEach((timetable) => {
                var single_time = document.createElement("option");
                single_time.textContent = `${timetable}`;
                time_list.add(single_time);
            });
        });
    });

function updateTimetables(event) {
    event.preventDefault();
}
