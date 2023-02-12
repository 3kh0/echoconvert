const inputText = document.querySelector("#input-text");
const keyInput = document.querySelector("#key-input");
const outputText = document.querySelector("#output-text");
const encodeButton = document.querySelector("#encode-button");
const decodeButton = document.querySelector("#decode-button");
const backButton = document.getElementById("back-button");

encodeButton.addEventListener("click", function () {
  const input = inputText.value;
  const key = keyInput.value;
  outputText.value = vigenereEncode(input, key);
});

decodeButton.addEventListener("click", function () {
  const input = inputText.value;
  const key = keyInput.value;
  outputText.value = vigenereDecode(input, key);
});

function vigenereEncode(input, key) {
  let output = "";
  input = input.toUpperCase();
  key = key.toUpperCase();
  for (let i = 0, j = 0; i < input.length; i++) {
    let c = input.charCodeAt(i);
    if (isUppercase(c)) {
      output += String.fromCharCode((c - 65 + key.charCodeAt(j % key.length) - 65) % 26 + 65);
      j++;
    } else {
      output += input.charAt(i);
    }
  }
  return output;
}

function vigenereDecode(input, key) {
  let output = "";
  input = input.toUpperCase();
  key = key.toUpperCase();
  for (let i = 0, j = 0; i < input.length; i++) {
    let c = input.charCodeAt(i);
    if (isUppercase(c)) {
      output += String.fromCharCode((c - 65 - (key.charCodeAt(j % key.length) - 65) + 26) % 26 + 65);
      j++;
    } else {
      output += input.charAt(i);
    }
  }
  return output;
}

function isUppercase(c) {
  return c >= 65 && c <= 90;
}

backButton.addEventListener("click", function () {
  window.location.href = "/";
});