const toBinary = (input) => {
  let output = '';
  for (let i = 0; i < input.length; i++) {
    let binary = input[i].charCodeAt().toString(2);
    output += binary.padStart(8, '0');
  }
  return output;
};

const fromBinary = (input) => {
  let output = '';
  for (let i = 0; i < input.length; i += 8) {
    let chunk = input.substr(i, 8);
    let decimal = parseInt(chunk, 2);
    let character = String.fromCharCode(decimal);
    output += character;
  }
  return output;
};

const toBinaryButton = document.getElementById('to-binary-button');
const fromBinaryButton = document.getElementById('from-binary-button');
const inputText = document.getElementById('input-text');
const outputText = document.getElementById('output-text');

toBinaryButton.addEventListener('click', () => {
  let inputValue = inputText.value;
  let binaryValue = toBinary(inputValue);
  outputText.value = binaryValue;
});

fromBinaryButton.addEventListener('click', () => {
  let inputValue = inputText.value;
  let originalValue = fromBinary(inputValue);
  outputText.value = originalValue;
});

const backButton = document.getElementById("back-button");
backButton.addEventListener("click", function () {
  window.location.href = "/";
});
