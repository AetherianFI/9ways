// Checks if the user is logged in right now and updated the map height so that page doesn't become scrollable
function checkHeight() {
    if (localStorage.getItem("loggedInUser")) {
        document.getElementById("map").style.height = "91.7%";
    }
}

checkHeight()