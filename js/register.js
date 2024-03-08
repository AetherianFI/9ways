const registrationForm = document.getElementById("registrationForm");

registrationForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(registrationForm);
    const data = Object.fromEntries(formData);

    fetch("http://localhost:3000/saveFormData", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
});