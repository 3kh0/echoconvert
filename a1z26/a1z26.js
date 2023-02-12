const inputText = document.querySelector("#input-text");
const outputText = document.querySelector("#output-text");
const encodeButton = document.querySelector("#encode-button");
const decodeButton = document.querySelector("#decode-button");
const backButton = document.getElementById("back-button");

const a1z26Encoder = (text) => {
  let output = "";
  for (let i = 0; i < text.length; i++) {
    let charCode = text.charCodeAt(i);
    if (charCode >= 97 && charCode <= 122) {
      output += charCode - 96 + " ";
    } else if (charCode >= 65 && charCode <= 90) {
      output += charCode - 38 + " ";
    }
  }
  return output.trim();
};

const a1z26Decoder = (text) => {
  let output = "";
  let numbers = text.split(" ");
  for (let i = 0; i < numbers.length; i++) {
    let number = parseInt(numbers[i]);
    if (number >= 1 && number <= 26) {
      output += String.fromCharCode(number + 96);
    }
  }
  return output;
};

encodeButton.addEventListener("click", function () {
  let input = inputText.value;
  let output = a1z26Encoder(input);
  outputText.value = output;
});

decodeButton.addEventListener("click", function () {
  let input = inputText.value;
  let output = a1z26Decoder(input);
  outputText.value = output;
});

backButton.addEventListener("click", function () {
  window.location.href = "/";
});