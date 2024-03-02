function checkIfLoggedIn() {
    var username = localStorage.getItem("loggedInUser");
    if (username) {
        document.getElementById("log-in-header").style.display = "flex";
        document.getElementById("loggedAs").innerHTML = "Logged in as " + username;
    }
}

// Check login status when page loads
checkIfLoggedIn();

function checkLogin() {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    fetch("../databases/accounts.json")
        .then((response) => response.json())
        .then((data) => {
            if (data.hasOwnProperty(username)) {
                if (data[username] === password) {
                    localStorage.setItem("loggedInUser", username);
                    document.getElementById("log-in-header").style.display = "flex";
                    document.getElementById("loggedAs").innerHTML = "Logged in as " + username;
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

// Add event listener to the form
document.getElementById("loginForm").addEventListener("submit", checkLogin);

// Clears localstorage from then usernames and refreshes the page
function clearStorage() {
    localStorage.clear();
    window.location.reload();
}
