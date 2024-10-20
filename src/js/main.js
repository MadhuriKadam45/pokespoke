import { shuffle } from "fast-shuffle";
import Fuse from "fuse.js";

import data from "./data.json";
import { PokemonCard } from "./components/PokemonCard";

// DOM TARGETING
const inputEl = document.querySelector("input");
const cardsRowEl = document.querySelector("#cards-row");

function renderPokemon(list) {
  cardsRowEl.innerHTML = "";

  for (let pokeObj of list) {
    const pokemon = PokemonCard(
      pokeObj.image,
      pokeObj.name,
      pokeObj.description,
      pokeObj.link
    );
    cardsRowEl.appendChild(pokemon);
  }
}

function renderFilteredPokemon(term) {
  const fuse = new Fuse(data, {
    keys: ["name"],
  });

  const filtered = fuse.search(term).map((obj) => obj.item);
  renderPokemon(filtered);

  // const filtered = [];
  // for (let obj of data) {
  //   if (obj.name.toLowerCase().includes(term)) filtered.push(obj);
  // }
  // renderPokemon(filtered);
}

//  input element on change
inputEl.addEventListener("input", (event) => {
  const currValue = event.target.value.toLowerCase().trim();
  renderFilteredPokemon(currValue);

  // const filtered = [];
  // for (let obj of data) {
  //   if (obj.name.toLowerCase().includes(currvalue)) filtered.push(obj);
  // }
});

// Focus input on slash keypress
document.addEventListener("keyup", function (event) {
  if (event.key === "/") {
    inputEl.focus();
  }
});

renderPokemon(shuffle(data));

// import data from "./data.json";
// import { PokemonCard } from "./components/PokemonCard";

// // DOM TARGETING
// const inputEl = document.querySelector("input");
// const cardsRowEl = document.querySelector("#cards-row");

// for (let pokeObj of data) {
//   const pokemon = PokemonCard(pokeObj.image, pokeObj.name, pokeObj.description);
//   cardsRowEl.appendChild(pokemon);
// }

// // Focus input on slash keypress
// document.addEventListener("keyup", function (event) {
//   if (event.key === "/") {
//     inputEl.focus();
//   }
// });

// // import data from "./data.json";
// // import { PokemonCard } from "./components/PokemonCard";

// // console.log(data);
// // // DOM Targeting
// // const cardsRow = document.querySelector("#cards-row");
// // const inpurEl = document.querySelector("input");

// // // for (let pokemonObj of data) {
// // //   const p = document.createElement("p");
// // //   p.textContent = pokemonObj.name;
// // //   cardsRow.appendChild(p);
// // // }

// // for (let pokemonObj of data) {
// //   // const div = document.createElement("div");
// //   // div.classList.add("col");

// //   // div.innerHTML = `
// //   //   <div class="card">
// //   //   <img
// //   //     src="${pokemonObj.image}"
// //   //     class="card-img-top"
// //   //     alt="..."
// //   //   />
// //   //   <div class="card-body">
// //   //     <h5 class="card-title">${pokemonObj.name}</h5>
// //   //     <p class="card-text">
// //   //       ${pokemonObj.description}
// //   //     </p>
// //   //   </div>
// //   // </div>
// //   // `;

// //   cardsRow.appendChild(div);
// // }

// // for (let pokemonObj of data) {
// //   console.log(pokemonObj.name);
// // }

// // // Target: to log all the data

// // // To target the input element
// // const inputEl = document.querySelector("input");
// // // Log the targetted element
// // // inputEl.focus();

// // // focus input on / keypress
// // document.addEventListener("keypress", function (event) {
// //   if (event.key === "/") {
// //     // Don't input (/)
// //     event.preventDefault();
// //     inputEl.focus();
// //   }
// // });
