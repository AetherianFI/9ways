var username = localStorage.getItem("loggedInUser");
var currentUser = document.getElementById("currentUser");

if (!username || username === "null") {
    currentUser.textContent = "Not logged in";
} else {
    var settings_box = document.getElementById("settings-box")
    settings_box.style.display = "block";

    currentUser.textContent = "Currently logged in as: " + username;

    var logoutButton = document.querySelector(".logout");
    logoutButton.addEventListener("click", () => {
        localStorage.clear();
        window.location.href = "login.html";
    });
};