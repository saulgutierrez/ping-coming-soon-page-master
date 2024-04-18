let button = document.querySelector(".button");
let noEmail = document.querySelector(".no-email");
let noValidEmail = document.querySelector(".no-valid-email");

button.addEventListener('click', function(e) {
    let email = document.querySelector(".email");
    let emailValidation = validateEmail(email.value);

    e.preventDefault();
    // No email
    if (email.value == "") {
        noValidEmail.style.opacity = "0%";
        email.style.border = "1px solid red";
        email.style.color = "red";
        noEmail.style.opacity = "100%";
    } else if (email.value != "" && emailValidation == false) { // No valid email
        noEmail.style.opacity = "0%";
        email.style.border = "1px solid red";
        email.placeholder = document.querySelector(".email");
        email.style.color = "red";
        noValidEmail.style.opacity = "100%";
    } else {
        email.style.border = "1px solid #d6daed";
        email.placeholder = "";
        noEmail.style.opacity = "0%";
        noValidEmail.style.opacity = "0%";
        email.style.color = "#0a0303";
    }
});

function validateEmail(email) {
    var atPos = email.indexOf("@");
    var dotPos = email.lastIndexOf(".");
    return atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;
}