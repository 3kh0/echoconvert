const reverseText = (input) => {
  return input.split('').reverse().join('');
};

const reverseButton = document.getElementById('reverse-button');
const inputText = document.getElementById('input-text');
const outputText = document.getElementById('output-text');

reverseButton.addEventListener('click', () => {
  let inputValue = inputText.value;
  let reversedValue = reverseText(inputValue);
  outputText.value = reversedValue;
});

const backButton = document.getElementById("back-button");
backButton.addEventListener("click", function () {
  window.location.href = "/";
});
