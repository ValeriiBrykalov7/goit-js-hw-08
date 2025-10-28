const inputEL = document.querySelector("#name-input");
const spanEL = document.querySelector("#name-output");

inputEL.addEventListener("input", event => {
    const text = event.target.value.trim();
    if (text === "") {
        spanEL.textContent = "Anonymous"
    }
    else {
        spanEL.textContent = text;
    }
});
