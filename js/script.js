const combineBtn = document.getElementById("combineBtn");
const resultElement = document.getElementById("result");

combineBtn.addEventListener("click", () => {
  const string1 = document.getElementById("string1").value;
  const string2 = document.getElementById("string2").value;
  const combinedString = combineStrings(string1, string2);
  resultElement.textContent = "Resultado: " + combinedString;
});

function combineStrings(str1, str2) {
  return str1 + " " + str2;
}
