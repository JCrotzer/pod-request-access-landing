const button = document.getElementById('submit');
const email = document.getElementById('email');
const error = document.getElementById('text');

let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

button.addEventListener("click", function () {
    const emailValue = email.value;
    // console.log(emailValue);

    if (emailValue.match(regex)) {
        error.style.visibility = "hidden";
    } else if (emailValue == "") {
        error.innerHTML = 'Oops! Please enter an email address';
        error.style.visibility = "visible";
    } else {
        error.innerHTML = 'Oops! Please check your email';
        error.style.visibility = "visible";
    }
});
