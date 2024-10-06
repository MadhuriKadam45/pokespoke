// To target the input element
const inputEl = document.querySelector("input");
// Log the targetted element
// inputEl.focus();

document.addEventListener("keypress", function (event) {
  if (event.key === "/") {
    // Don't input (/)
    event.preventDefault();
    inputEl.focus();
  }
});
