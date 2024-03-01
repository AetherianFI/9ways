function checkLogin() {
    event.preventDefault()

    var username = document.getElementById("username").value
    var password = document.getElementById("password").value

    fetch("../databases/accounts.json")
        .then(response => response.json())
        .then(data => {
            if (data.hasOwnProperty(username)) {
                if (data[username] === password) {
                    window.location.href = "../html/map.html"
                } else {
                    alert("Wrong password")
                }
            } else {
                alert("Username not found")
            }
        })
        .catch(error => {
            console.error("Error fetching JSON:", error)
        })
}

// Add event listener to the form
document.getElementById("loginForm").addEventListener("submit", checkLogin);