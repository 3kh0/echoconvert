const base32Alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';

const encode = (input) => {
  let output = '';
  let binary = '';
  for (let i = 0; i < input.length; i++) {
    binary += input[i].charCodeAt().toString(2).padStart(8, '0');
  }
  for (let i = 0; i < binary.length; i += 5) {
    let chunk = binary.substr(i, 5);
    chunk = chunk.padEnd(5, '0');
    output += base32Alphabet[parseInt(chunk, 2)];
  }
  return output;
};

const decode = (input) => {
  let binary = '';
  for (let i = 0; i < input.length; i++) {
    let index = base32Alphabet.indexOf(input[i]);
    binary += index.toString(2).padStart(5, '0');
  }
  let output = '';
  for (let i = 0; i < binary.length; i += 8) {
    let chunk = binary.substr(i, 8);
    chunk = chunk.padEnd(8, '0');
    output += String.fromCharCode(parseInt(chunk, 2));
  }
  return output;
};

const encryptButton = document.getElementById('encrypt-button');
const decryptButton = document.getElementById('decrypt-button');
const inputText = document.getElementById('input-text');
const outputText = document.getElementById('output-text');

encryptButton.addEventListener('click', () => {
  let inputValue = inputText.value;
  let encodedValue = encode(inputValue);
  outputText.value = encodedValue;
});

decryptButton.addEventListener('click', () => {
  let inputValue = inputText.value;
  let decodedValue = decode(inputValue);
  outputText.value = decodedValue;
});

const backButton = document.getElementById("back-button");
backButton.addEventListener("click", function () {
  window.location.href = "/";
});
