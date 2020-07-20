const fakeUsers = ["fake1@fake.com", "fake2@fake.com"];
const fakePasswords = ["fake1", "fake2", "fake3"];

const form = document.querySelector("form");
let loginCheck = false;
let passCheck = false;
form.addEventListener("focusout", () => {
    if (fakeUsers.includes(form.email.value)) {
        form.email.style.borderColor = "green";
        loginCheck = true;
    } else {
        form.email.style.borderColor = "red";
        loginCheck = false;
    }
    if (fakePasswords.includes(form.password.value)) {
        form.password.style.borderColor = "green";
        passCheck = true;
    } else {
        form.password.style.borderColor = "red";
        passCheck = false;
    }
})

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (loginCheck === true && passCheck === true) {
        document.getElementById("message").textContent = "You are logged in";
    } else {
        document.getElementById("message").textContent = "Wrong username or pasword";
    }

})
