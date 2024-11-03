let attempts = 0;
const correctNumber = "76662"; // Replace with your special number

function checkGuess() {
  const userGuess = document.getElementById("guess-input").value;
  const message = document.getElementById("message");

  if (userGuess === correctNumber) {
    window.location.href = "https://generic-keep-536155.framer.app/video"; // Replace with the path to the new page
  } else {
    attempts++;
    if (attempts >= 3) {
      message.textContent = "Hint: the password is my phone password";
    } else {
      message.textContent = `Incorrect! Attempt ${attempts} of 3.`;
    }
  }
}
