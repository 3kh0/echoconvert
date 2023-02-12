const inputText = document.querySelector("#input-text");
const outputText = document.querySelector("#output-text");
const shiftOption = document.querySelector("#shift-option");
const convertButton = document.querySelector("#convert-button");
const backButton = document.getElementById("back-button");

convertButton.addEventListener("click", function () {
  let input = inputText.value;
  let shift = shiftOption.value;
  let output = "";
  for (let i = 0; i < input.length; i++) {
    let c = input.charCodeAt(i);
    if (c >= 65 && c <= 90) {
      output += String.fromCharCode((c - 65 + parseInt(shift)) % 26 + 65);
    } else if (c >= 97 && c <= 122) {
      output += String.fromCharCode((c - 97 + parseInt(shift)) % 26 + 97);
    } else {
      output += input[i];
    }
  }
  outputText.value = output;
});

backButton.addEventListener("click", function () {
  window.location.href = "/";
});