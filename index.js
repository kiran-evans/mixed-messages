const randomMessages = [
    "Hello",
    "Hi",
    "How are you?",
    "This is a random message"
]

const generateMessage = () => {
    const randomNum = Math.floor(Math.random() * randomMessages.length);
    const randomMessage = randomMessages[randomNum];
    $("#message").html(`<p>${randomMessage}</p>`);
}