const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});

function togglePassword(inputId, icon) {
    let passwordInput = document.getElementById(inputId);
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    } else {
        passwordInput.type = "password";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const signUpForm = document.querySelector(".sign-up form");
    const signInForm = document.querySelector(".sign-in form");

    function createWarningMessage(form) {
        let warning = form.querySelector(".warning-message");
        if (!warning) {
            warning = document.createElement("div");
            warning.classList.add("warning-message");
            warning.style.color = "red";
            warning.style.marginBottom = "10px";
            warning.style.fontSize = "12px";
            warning.textContent = "Please fill in all fields before submitting.";
            form.prepend(warning);
        }
    }

    function validateForm(event, form) {
        event.preventDefault();
        const inputs = form.querySelectorAll("input");
        let isEmpty = false;

        inputs.forEach(input => {
            if (input.value.trim() === "") {
                isEmpty = true;
            }
        });

        let warning = form.querySelector(".warning-message");
        if (isEmpty) {
            if (!warning) {
                createWarningMessage(form);
            }
        } else {
            if (warning) warning.remove();
            window.location.href = "homepage.html";
        }
    }

    signUpForm.addEventListener("submit", function (event) {
        validateForm(event, signUpForm);
    });

    signInForm.addEventListener("submit", function (event) {
        validateForm(event, signInForm);
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const dropdown = document.querySelector(".dropdown");
    const dropdownMenu = document.querySelector(".dropdown-menu");

    dropdown.addEventListener("mouseenter", () => {
        dropdownMenu.style.display = "block";
        setTimeout(() => {
            dropdownMenu.style.opacity = "1";
            dropdownMenu.style.transform = "translateY(0)";
        }, 10);
    });

    dropdown.addEventListener("mouseleave", () => {
        dropdownMenu.style.opacity = "0";
        dropdownMenu.style.transform = "translateY(10px)";
        setTimeout(() => {
            dropdownMenu.style.display = "none";
        }, 300);
    });
});