const express = require("express");
const cors = require("cors");
const fs = require("fs");
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors()); // Use the cors middleware

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

app.post("/updateTimetable", (req, res) => {
    const timetableData = req.body;
    const a = JSON.stringify(timetableData);
    console.log(a);
    res.status(207);
    res.send("test response");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
