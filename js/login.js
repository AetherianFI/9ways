function checkForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value

    if (username == "" || password == "") {
        alert("You have to fill both username and password!")
        console.log("Form did not submit succesfully")

        return false;
    } else {
        console.log("Form submitted succesfully")
        return true;
    }

}