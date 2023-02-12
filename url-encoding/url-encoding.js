const inputText = document.querySelector("#input-text");
const outputText = document.querySelector("#output-text");
const convertButton = document.querySelector("#convert-button");
const backButton = document.getElementById("back-button");

convertButton.addEventListener("click", function () {
  const input = inputText.value;
  const encoded = encodeURIComponent(input);
  outputText.value = encoded;
});

backButton.addEventListener("click", function () {
  window.location.href = "/";
});