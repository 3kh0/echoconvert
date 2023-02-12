const inputText = document.querySelector("#input-text");
const outputText = document.querySelector("#output-text");
const convertButton = document.querySelector("#convert-button");
const shiftInput = document.querySelector("#shift-input");
const backButton = document.getElementById("back-button");

convertButton.addEventListener("click", function () {
  const shift = parseInt(shiftInput.value);
  let output = "";
  for (let i = 0; i < inputText.value.length; i++) {
    let charCode = inputText.value.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) {
      charCode = (charCode - 65 + shift) % 26 + 65;
    } else if (charCode >= 97 && charCode <= 122) {
      charCode = (charCode - 97 + shift) % 26 + 97;
    }
    output += String.fromCharCode(charCode);
  }
  outputText.value = output;
});

backButton.addEventListener("click", function () {
  window.location.href = "/";
});
