// Function to validate registration form
function validateRegistration() {
    var email = document.getElementById('email').value.trim();
    var username = document.getElementById('username').value.trim();
    var password = document.getElementById('password').value;

    // Check if any field is empty
    if (email === '' || username === '' || password === '') {
        alert('Please fill in all fields.');
        return false;
    }

    // Additional validation logic can be added here

    return true;
}

// Handle registration form submission
document.getElementById('registerform').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Validate the form inputs
    if (validateRegistration()) {
        // Perform registration logic here
        alert('Registration successful!'); // Placeholder for actual registration logic
        // Redirect to login page or perform any other desired actions
        window.location.href = 'login.html';
    }
});
