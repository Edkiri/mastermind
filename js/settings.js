// No user no party
const username = sessionStorage.getItem("username");
if (!username) window.location = "../index.html";

const usernameSpan = document.getElementById("username-span");
usernameSpan.textContent = username;

// Una lista con los botones de los niveles
const pickersSection = document.getElementById("picker-section");
pickersSection.style.display = "none";

// Recorre la lista.
// A cada botón le mete addEventListener con el evento click y una funcion anonima.
// Dentro de la función anónima, lee el id de cada boton;
// La última letra del id es el numero 4, 5, 6 y según esos número crea las bubbles y los pickers
// .split("-") nos devolveria => ["levelOne", "4"] Luego a ese ["levelOne", "4"][1] y te traes el número

const levelButtons = document.querySelectorAll(".level-button");
import { levelOptions } from "./mastermind/game-state/level-options.js";
const difficultySpan = document.getElementById("difficulty-span");

levelButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonId = button.id;
    const difficulty = buttonId.split("-")[1];
    createPickers(levelOptions[difficulty].colors);
    document.getElementById("level-section").style.display = "none";
    pickersSection.style.display = "flex";
    difficultySpan.textContent = difficulty;
    window.sessionStorage.setItem("difficulty", difficulty);
  });
});

const pickersContainer = document.getElementById("pickers-list");
const DEFAULT_COLORS = ["#65e66e","#ffe770","#85e0ff","#ff8af5","#ff9924","#67cccc"];
function createPickers(quantity) {
  for (let i = 1; i <= quantity; i++) {
    const picker = document.createElement("input");
    picker.type = "color";
    picker.id = `picker-${i}`;
    picker.value = DEFAULT_COLORS[i - 1];
    pickersContainer.appendChild(picker);
    picker.oninput = () => {
      const currentBubble = document.getElementById(`bubble-${i}`);
      currentBubble.style.backgroundColor = picker.value;
    };
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
