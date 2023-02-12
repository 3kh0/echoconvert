const inputText = document.querySelector("#input-text");
const outputText = document.querySelector("#output-text");
const convertButton = document.querySelector("#convert-button");
const backButton = document.getElementById("back-button");

const spellingAlphabet = {
  a: "Alpha",
  b: "Bravo",
  c: "Charlie",
  d: "Delta",
  e: "Echo",
  f: "Foxtrot",
  g: "Golf",
  h: "Hotel",
  i: "India",
  j: "Juliett",
  k: "Kilo",
  l: "Lima",
  m: "Mike",
  n: "November",
  o: "Oscar",
  p: "Papa",
  q: "Quebec",
  r: "Romeo",
  s: "Sierra",
  t: "Tango",
  u: "Uniform",
  v: "Victor",
  w: "Whiskey",
  x: "X-ray",
  y: "Yankee",
  z: "Zulu",
  " ": "(space)"
};

convertButton.addEventListener("click", function() {
  let input = inputText.value.toLowerCase();
  let output = "";
  for (let i = 0; i < input.length; i++) {
    let letter = input[i];
    output += spellingAlphabet[letter] + " ";
  }
  outputText.value = output;
});

backButton.addEventListener("click", function () {
  window.location.href = "/";
});
