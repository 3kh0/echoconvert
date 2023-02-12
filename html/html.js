const inputText = document.querySelector("#input-text");
const outputText = document.querySelector("#output-text");
const encodeButton = document.querySelector("#encode-button");
const decodeButton = document.querySelector("#decode-button");
const backButton = document.getElementById("back-button");

encodeButton.addEventListener("click", function () {
  outputText.value = encodeHtml(inputText.value);
});

decodeButton.addEventListener("click", function () {
  outputText.value = decodeHtml(inputText.value);
});

function encodeHtml(html) {
  return html.replace(/[<>&]/g, function (match) {
    switch (match) {
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case "&":
        return "&amp;";
      default:
        return match;
    }
  });
}

function decodeHtml(html) {
  return html.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");
}

backButton.addEventListener("click", function () {
  window.location.href = "/";
});