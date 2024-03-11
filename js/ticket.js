document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".button-box");

    buttons.forEach(function (button) {
        const minusBtn = button.querySelector(".minus");
        const addBtn = button.querySelector(".add");
        const num = button.querySelector(".num");

        minusBtn.addEventListener("click", function () {
            let currentValue = parseInt(num.textContent);
            if (currentValue >= 1) {
                num.textContent = currentValue - 1;
            }
        });

        addBtn.addEventListener("click", function () {
            let currentValue = parseInt(num.textContent);
            num.textContent = currentValue + 1;
        });
    });
});
