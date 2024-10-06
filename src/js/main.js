import data from "./data.json";

// DOM Targeting
const cardsRow = document.querySelector("#cards-row");
const inpurEl = document.querySelector("input");

for (let pokemonObj of data) {
  const p = document.createElement("p");
  p.textContent = pokemonObj.name;
  cardsRow.appendChild(p);
}

console.log(cardsRow);

for (let pokemonObj of data) {
  console.log(pokemonObj.name);
}

// Target: to log all the data

// To target the input element
const inputEl = document.querySelector("input");
// Log the targetted element
// inputEl.focus();

// focus input on / keypress
document.addEventListener("keypress", function (event) {
  if (event.key === "/") {
    // Don't input (/)
    event.preventDefault();
    inputEl.focus();
  }
});
