var username = localStorage.getItem("loggedInUser");
var currentUser = document.getElementById("currentUser");

// shows not logged in text if user isnt logged in and shows the username and settings when user is logged in
if (!username || username === "null") {
    currentUser.textContent = "Not logged in";
} else {
    var settings_box = document.getElementById("settings-box")
    settings_box.style.display = "block";

    currentUser.textContent = "Currently logged in as: " + username;

    // Adds event listeneder to logout button that clears localstorage and redirects to login page when clicked
    var logoutButton = document.querySelector(".logout");
    logoutButton.addEventListener("click", () => {
        localStorage.clear();
        window.location.href = "login.html";
    });
};