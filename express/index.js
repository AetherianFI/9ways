const express = require("express");
const cors = require("cors");
const fs = require("fs");
const app = express();
const port = 3000;


app.use(express.json());
app.use(cors()); // Use the cors middleware


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


app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})