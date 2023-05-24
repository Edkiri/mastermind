// No user no party
const username = sessionStorage.getItem("username");
if (!username) window.location = "../index.html";

// Agraga el username al título.
const usernameSpanLevel = document.querySelector("#level-section .username-span");
const usernameSpanPikcer = document.querySelector("#picker-section .username-span");
usernameSpanLevel.textContent = `"${username}"`;
usernameSpanPikcer.textContent = `"${username}"`;

// 'picker-section' es el id de la sección que contiene a los color picckers.
// Al iniciar tiene `display: none;` en css. Solo después de que el usuario haya elejido la
// dificultad, se le dará `display: 'flex';` via js para hacerlo visible, y se rendetizaran
// los colors pickers, según la dificultad.
const pickersSection = document.getElementById("picker-section");

// 'level-section' es el id de la sección que contiene los botones para que el usuario elija la dificultad.
// Después que el usuario elija dificultad, esta sección se esconde, dandole un `display: none;`
// y renderiza la 'picker-section', dandole `display: 'flex';`.
const levelSection = document.getElementById("level-section");

// Trae una lista con los 3 botones para elejir la dificultad; todos tienen la clase 'level-button'.
const levelButtons = document.querySelectorAll(".level-button");

import { levelOptions } from "./mastermind/game-state/level-options.js";
// Recorre la lista con los botones usando un `.forEach()` para agregarle un `addEventListerner` a cada uno.
levelButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Cada botón tiene un id único para leer la dificultad que elijió el usuario.
    // Estos ids son: 'level-easy', 'level-hard' y 'level-tryhard'.
    const buttonId = button.id;
    const difficulty = buttonId.split("-")[1];

    const { colorsQuantity, title } = levelOptions[difficulty];
    createPickers(colorsQuantity);

    const difficultySpan = document.getElementById("difficulty-span");
    difficultySpan.textContent = `"${title}"`;
    window.sessionStorage.setItem("difficulty", difficulty);

    levelSection.style.display = "none";
    pickersSection.style.display = "flex";
  });
});

// Estos son los colores por defecto previamente filtrados por el equipo de diseño. 
const DEFAULT_COLORS = ["#800080", "#0000FF", "#FFA500", "#008000", "#FF0000", "#FFFF00"];

const pickersContainer = document.getElementById("pickers-list");
function createPickers(quantity) {
  for (let i = 1; i <= quantity; i++) {
    const picker = document.createElement("input");
    picker.type = "color";
    picker.id = `picker-${i}`;
    picker.value = DEFAULT_COLORS[i - 1];
    pickersContainer.appendChild(picker);
  }
}

const playButton = document.getElementById("play-button");
playButton.addEventListener("click", () => {
  const pickers = Array.from(
    document.querySelectorAll("#pickers-list > input")
  );
  const colors = pickers.map((picker) => picker.value);
  sessionStorage.setItem("colors", JSON.stringify(colors));
  window.location = "./game.html";
});
