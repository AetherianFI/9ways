var username = localStorage.getItem("loggedInUser");
var currentUser = document.getElementById("loggedInUser");
var notLoggedIn = document.querySelector(".notLoggedIn");
var loggedIn = document.querySelector(".loggedIn");
var accountCreated = document.getElementById("accountCreated");

// shows not logged in text if user isnt logged in and shows the username and settings when user is logged in
if (username) {
    notLoggedIn.style.display = "none";
    currentUser.textContent = `Logged in as: ${username}`;

    // Fetches the creation date of the account that is logged in
    fetch("../databases/accounts.json")
        .then((response) => response.json())
        .then((data) => {
            const creationDate = data.find(
                (date) => date.username === username
            );
            const unix_to_date = new Date(parseInt(creationDate.creation_time));
            accountCreated.textContent = `Account created: ${unix_to_date}`;
        })

        .catch((error) => {
            console.error("Error fetching accounts.json:", error);
        });

    // Adds event listener to logout button that clears localstorage and refreshes the page
    var logoutButton = document.getElementById("logoutButton");
    logoutButton.addEventListener("click", () => {
        localStorage.clear();
        window.location.reload();
    });
} else {
    loggedIn.style.display = "none";
}
