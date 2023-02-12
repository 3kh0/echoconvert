const encryptButton = document.getElementById("encrypt-button");
const decryptButton = document.getElementById("decrypt-button");
const backButton = document.getElementById("back-button");
const inputText = document.getElementById("input-text");
const outputText = document.getElementById("output-text");

encryptButton.addEventListener("click", function () {
  const inputValue = inputText.value;
  const encodedValue = btoa(inputValue);
  outputText.value = encodedValue;
});

decryptButton.addEventListener("click", function () {
  const inputValue = inputText.value;
  const decodedValue = atob(inputValue);
  outputText.value = decodedValue;
});

backButton.addEventListener("click", function () {
  window.location.href = "/";
});
