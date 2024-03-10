var username = localStorage.getItem("loggedInUser");
var currentUser = document.getElementById("loggedInUser");
var notLoggedIn = document.querySelector(".notLoggedIn");
var loggedIn = document.querySelector(".loggedIn");

// shows not logged in text if user isnt logged in and shows the username and settings when user is logged in
if (username) {
    notLoggedIn.style.display = "none";
    currentUser.textContent = "Currently logged in as: " + username;

    // Adds event listeneder to logout button that clears localstorage and redirects to login page when clicked
    var logoutButton = document.getElementById("logoutButton");
    logoutButton.addEventListener("click", () => {
        localStorage.clear();
        window.location.href = "login.html";
    });
} else {
    loggedIn.style.display = "none";
}
