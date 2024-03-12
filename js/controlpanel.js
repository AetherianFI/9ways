// Goes through the POI.json and adds all busstops from there into the dropdown menu
var drop_down_menu = document.getElementById("bus_stop_list");

fetch("../databases/POI.json")
    .then((response) => response.json())
    .then((data) => {
        data.bus_stops.forEach((busStop) => {
            var bus_stop_element = document.createElement("option");
            bus_stop_element.textContent = busStop.name;
            drop_down_menu.add(bus_stop_element);
        });
    });

/*var elementti = document.createElement("option");
elementti.textContent = "testi123";
drop_down_menu.add(elementti);*/
