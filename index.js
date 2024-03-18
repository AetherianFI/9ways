const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors()); // Use the cors middleware

app.use(express.static(path.join(__dirname, "public")));

// Receives POST requests from /saveFormData endpoit on port 3000
// Reads accounts.json and if there's already any data there then saves that to "existingData" variable
// New received data from POST request is also added to "existingData" variable and that is stringified and added to accounts.json
app.post("/saveFormData", (req, res) => {
    const formData = req.body;

    // Read existing data from the file (if it exists)
    fs.readFile("../databases/accounts.json", (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send("Error reading form data from accounts.json");
            return;
        }

        let existingData = [];
        if (data.length > 0) {
            existingData = JSON.parse(data);
            if (!Array.isArray(existingData)) {
                // Convert existingData to an array if it's not already one
                existingData = [existingData];
            }
        }

        // Push new form data to existing data
        existingData.push(formData);
        const jsonFormData = JSON.stringify(existingData);

        // Write the updated data back to the file
        fs.writeFile("../databases/accounts.json", jsonFormData, (err) => {
            if (err) {
                console.error(err);
                res.status(500).send("Error saving form data to accounts.json");
            } else {
                console.log("Form data saved successfully");
                res.status(200).send("Form data saved successfully");
            }
        });
    });
});

// Handles the request regarding timetable updates
app.post("/updateTimetable", (req, res) => {
    const timetableData = req.body;

    fs.readFile("../databases/POI.json", "utf8", (err, data) => {
        if (err) {
            console.log(err);
            res.status(500).send("Error reading POI.json file");
            return;
        } else {
            // Transforms data into json format
            let parsedData = JSON.parse(data);

            // get the index of the time dropdown menu
            let index = timetableData["timetable_index"];

            for (let i = 0; i < parsedData["bus_stops"].length; i++) {
                if (
                    parsedData["bus_stops"][i]["name"] ===
                    timetableData["bus_stop"]
                ) {
                    parsedData["bus_stops"][i]["timetable"][index] =
                        timetableData["updated_time"];
                }
            }
            var updatedParsedData = JSON.stringify(parsedData);

            // Write the updated data back to the file
            fs.writeFile("../databases/POI.json", updatedParsedData, (err) => {
                if (err) {
                    console.error(err);
                    res.status(500).send("Error writing to POI.json file");
                } else {
                    console.log("Data updated successfully");
                    res.status(200).send("Data updated successfully");
                }
            });
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
