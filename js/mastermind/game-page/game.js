import GameState from "../game-state/game-state.js";
import { createInitialState } from "../game-state/initial-state.js";
import { createHTMLElement } from "../utils/functions.js";
import renderRows from "./render-rows.js";

import {
  PreviusCellObserver,
  CurrentCellObserver,
  NextCellObserver,
  RowObserver,
} from "./observers.js";

// const colors = JSON.parse(sessionStorage.getItem("colors"));
const colors = ["red", "green", "blue", "yellow", "purple"];
const difficulty = sessionStorage.getItem("difficulty");
if (!colors.length || !difficulty) window.location = "../pages/settings.html";

// Crea el estado inicial.
// Este guarda las 'rows' del tablero según el nivel de dificultad.
// También la posición de las celdas y su color.
const initialState = createInitialState(difficulty, colors);

// Instancia una clase GameState; esta extiende de 'Subject' para aplicar el patrón de diseño observador.
const game = new GameState(initialState);

// Renderiza las filas 'rows' del tablero definidas en el estado inicial.
// Itera por cada 'row' del estado inicial y crea la row en el html. Busca el id="board" en el html.
renderRows(game.state.rows);

// Render Bubbles
const bubblesContainer = document.getElementById("bubbles-list");
colors.forEach((color) => {
  const bubble = createHTMLElement("button", "", ["bubble"]);
  bubble.style.backgroundColor = color;
  bubblesContainer.appendChild(bubble);
  bubble.addEventListener("click", () => {
    game.addColor(color);
  });
});

game.subscribe(new CurrentCellObserver());
game.subscribe(new PreviusCellObserver());
game.subscribe(new NextCellObserver());
game.subscribe(new RowObserver());

const removeButton = document.getElementById("remove-button");
removeButton.addEventListener("click", () => {
  game.removeColor();
});

const checkButton = document.getElementById("check-button");
checkButton.addEventListener("click", () => {
  game.checkSecret();
  console.log(game.state);
});

game.start();
