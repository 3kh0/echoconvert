const Charstring = (input) => {
    return length = input.length;
  };
  
  const reverseButton = document.getElementById('reverse-button');
  const inputText = document.getElementById('input-text');
  const outputText = document.getElementById('output-text');
  
  reverseButton.addEventListener('click', () => {
    let inputValue = inputText.value;
    let noofchars = Charstring(inputValue);
    outputText.value = noofchars;
  });
  
  const backButton = document.getElementById("back-button");
  backButton.addEventListener("click", function () {
    window.location.href = "/";
  });