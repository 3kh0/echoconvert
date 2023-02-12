const morseCode = {
  'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.',
  'G': '--.', 'H': '....', 'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..',
  'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.',
  'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
  'Y': '-.--', 'Z': '--..', '0': '-----', '1': '.----', '2': '..---',
  '3': '...--', '4': '....-', '5': '.....', '6': '-....', '7': '--...',
  '8': '---..', '9': '----.', ' ': '/', '.': ''
};

const reverseMorseCode = {};
for (let key in morseCode) {
  reverseMorseCode[morseCode[key]] = key;
}

const toMorse = (input) => {
  let output = '';
  for (let i = 0; i < input.length; i++) {
    let character = input[i].toUpperCase();
    let code = morseCode[character];
    output += code + ' ';
  }
  return output;
};

const fromMorse = (input) => {
  let output = '';
  let inputArray = input.split(' ');
  for (let i = 0; i < inputArray.length; i++) {
    let code = inputArray[i];
    let character = reverseMorseCode[code];
    output += character;
  }
  return output;
};

const toMorseButton = document.getElementById('to-morse-button');
const fromMorseButton = document.getElementById('from-morse-button');
const inputText = document.getElementById('input-text');
const outputText = document.getElementById('output-text');

toMorseButton.addEventListener('click', () => {
  let inputValue = inputText.value;
  let morseValue = toMorse(inputValue);
  outputText.value = morseValue;
});

fromMorseButton.addEventListener('click', () => {
  let inputValue = inputText.value;
  let originalValue = fromMorse(inputValue);
  outputText.value = originalValue;
});

const backButton = document.getElementById("back-button");
backButton.addEventListener("click", function () {
  window.location.href = "/";
});
