const inputText = document.querySelector("#input-text");
const outputText = document.querySelector("#output-text");
const railsInput = document.querySelector("#rails-input");
const encodeButton = document.querySelector("#encode-button");
const decodeButton = document.querySelector("#decode-button");
const backButton = document.getElementById("back-button");

encodeButton.addEventListener("click", function () {
  const input = inputText.value;
  const rails = Number(railsInput.value);
  outputText.value = encode(input, rails);
});

decodeButton.addEventListener("click", function () {
  const input = inputText.value;
  const rails = Number(railsInput.value);
  outputText.value = decode(input, rails);
});

backButton.addEventListener("click", function () {
  window.location.href = "/";
});

function encode(input, rails) {
  let railArray = [];
  for (let i = 0; i < rails; i++) {
    railArray[i] = "";
  }

  let direction = -1;
  let rail = 0;
  for (let i = 0; i < input.length; i++) {
    railArray[rail] += input[i];

    if (rail === 0 || rail === rails - 1) {
      direction *= -1;
    }
    rail += direction;
  }

  return railArray.join("");
}

function decode(input, rails) {
  let railArray = [];
  for (let i = 0; i < rails; i++) {
    railArray[i] = "";
  }

  let index = 0;
  for (let i = 0; i < input.length; i++) {
    railArray[index] += input[i];
    index += 1;
    if (index === rails - 1 || index === 0) {
      direction *= -1;
    }
  }

  let rail = 0;
  let direction = -1;
  let result = "";
  for (let i = 0; i < input.length; i++) {
    result += railArray[rail][0];
    railArray[rail] = railArray[rail].slice(1);

    if (rail === 0 || rail === rails - 1) {
      direction *= -1;
    }
    rail += direction;
  }

  return result;
}