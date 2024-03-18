var drop_down_menu = document.getElementById("bus_stop_list");
var time_list = document.getElementById("time_selection");

// Goes through the POI.json and adds all busstops from there into the dropdown menu
fetch("../databases/POI.json")
    .then((response) => response.json())
    .then((data) => {
        data.bus_stops.forEach((busStop) => {
            var bus_stop_element = document.createElement("option");
            bus_stop_element.textContent = `${busStop.name}`;
            drop_down_menu.add(bus_stop_element);
        });

        // Everytime different bus stop is selected from the dropdown list it updated the selectedIndex variable and changes the timetable into one that matches the busstop
        drop_down_menu.addEventListener("change", () => {
            // Saves currently selected option from the select element into a variable
            var selectedIndex = drop_down_menu.selectedIndex;

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

// Regular expression for the new time user inputs (checks if the time is in xx.xx format)
let regex = /\b\d{2}\.\d{2}\b/;

const timetableForm = document.getElementById("timetableForm");

timetableForm.addEventListener("submit", (event) => {
    // Prevents normal form submission behaviour
    event.preventDefault();

    // Creates form from the data of the timetableForm
    const timetableData = new FormData(timetableForm);

    // Gets the index of the timetable dropdown menu and adds it to the request
    var timetableIndex = time_list.selectedIndex;
    timetableData.append("timetable_index", timetableIndex);

    // Changes data into dictionary datatype
    const data = Object.fromEntries(timetableData);

    // If new time is in correct format then send the POST request
    if (regex.test(data["updated_time"])) {
        fetch("http://localhost:3000/updateTimetable", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.text())
            .then((data) => console.log(data))
            .catch((error) => console.log(error));
    } else {
        alert("New time has to be in xx.xx format e.g. 08:27");
        console.log("Error in the new time format");
    }
});
