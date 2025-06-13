function greetUser() {
    const name = document.getElementById("nameInput").value.trim();
    const messageElement = document.getElementById("greetingMessage");

    if (name === "") {
        messageElement.textContent = "Please enter your name!";
    } else {
        messageElement.textContent = `Hello, ${name}! Welcome to the Greeting App.`;
    }
}
