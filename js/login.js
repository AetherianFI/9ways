// Checks if user is logged in and makes the top white bar visible and shows the current user that's logged in
function checkIfLoggedIn() {
    var username = localStorage.getItem("loggedInUser");
    if (username) {
        // Makes the top white bar visible and shows the logged in user
        document.getElementById("log-in-header").style.display = "flex";
        document.getElementById("loggedAs").innerHTML = `Logged in as ${username}`;
    }
}


// Check login status when page loads
checkIfLoggedIn();


// Clears localstorage from then usernames and refreshes the page
function clearStorage() {
    localStorage.clear();
    window.location.reload();
}


// Runs after loginform is submitted
function checkLogin(event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    fetch("../databases/accounts.json")
        .then((response) => response.json())
        .then((data) => {
            if (data.hasOwnProperty(username)) {
                if (data[username] === password) {
                    localStorage.setItem("loggedInUser", username);
                    checkIfLoggedIn()
                    window.location.href = "../html/map.html";
                } else {
                    alert("Wrong password");
                }
            } else {
                alert("Username not found");
            }
        })
        .catch((error) => {
            console.error("Error fetching JSON:", error);
        });
}