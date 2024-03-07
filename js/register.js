// Handle registration form submission
function checkRegistration(event) {
    event.preventDefault();

    var email = document.getElementById("email").value; // this isnt currently used for anything
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    let jsonData = JSON.parse(fs.read)

    // Perform registration logic here
    alert('Registration successful!');
    // Redirect to login page or perform any other desired actions
    window.location.href = 'login.html';
};