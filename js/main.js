console.log("Flux Fantasy Character Builder loaded!")

const message = document.getElementById("message");
const testButton = document.getElementById("testButton");

testButton.addEventListener("click", function() {
    message.textContent = "Welcome to the Flux Fantasy Character Builder!"
});
