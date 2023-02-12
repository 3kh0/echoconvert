// Get references to the HTML elements
const inputText = document.querySelector("#input-text");
const slopeInput = document.querySelector("#slope-input");
const interceptInput = document.querySelector("#interception-input");
const outputText = document.querySelector("#output-text");
const convertButton = document.querySelector("#convert-button");
const backButton = document.getElementById("back-button");

// Define the conversion function
function convertText() {
  let input = inputText.value;
  let slope = slopeInput.value;
  let intercept = interceptInput.value;
  let output = "";

  // Convert each character in the input string
  for (let i = 0; i < input.length; i++) {
    let charCode = input.charCodeAt(i);
    // Only convert alphabetical characters
    if (charCode >= 65 && charCode <= 90) {
      charCode = (slope * (charCode - 65) + intercept) % 26;
      charCode += 65;
    } else if (charCode >= 97 && charCode <= 122) {
      charCode = (slope * (charCode - 97) + intercept) % 26;
      charCode += 97;
    }
    output += String.fromCharCode(charCode);
  }

  outputText.value = output;
}

// Add an event listener to the convert button
convertButton.addEventListener("click", convertText);

// Add an event listener to the back button
backButton.addEventListener("click", function () {
  window.location.href = "/";
});