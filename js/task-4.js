const formEl = document.querySelector(".login-form")
const object = {
    email: 0,
    password: 0,
}
formEl.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const email = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();

    if (email === "" || password === "") {
        alert("All form fields must be filled in");
        return;
    }
    else {
        object.email = email;
        object.password = password;
    }

    console.log(object);
    form.reset();
}; 



