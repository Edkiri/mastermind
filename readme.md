# Mastermind

Simulation of the Mastermind game built in HTML, CSS, and Vanilla Javascript. Check game rules [here](pages/rules.html).

![mastermind](images/board.png)

# Development

There are 4 views in the app:

* [index.html](./index.html) where the user enters their name. The username is stored in the sessionStorage. It uses [login.js](./js/login.js).
* [settings.html](./pages/settings.html), that use [settings.js](./js/settings.js) to allow the user to choose the difficulty level and select their colors.
* [game.html](./pages/game.html) game page. It uses the script [game.js](./js/mastermind/game-page/game.js), which is of `type="module"` in order to use import and export statement.
* And finally a [rules.html](./pages/rules.html) file to read the rules.


## Game State
I used the observer design pattern to update the board view as the game state changed. 

I created an [initial state](./js/mastermind/game-state/initial-state.js) that stores, among other things, the position of the board cells and their color. It creates rows based on [difficulty levels](./js/mastermind/game-state/levels.js) and colors choseen by the user.

In the development, I used Javacript exclusively, but I wrote the game state interface in Typescript for better visibility.

```ts
interface GameState {
  currentRowPosition: number;
  currentCellPosition: number;
  secretRow: SecretRow;
  public: {
    username: string;
    loss: boolean;
    victory: boolean;
    difficulty: {
      title: string;
      maxAttempts: number;
      colorsQuantity: number;
    };
    rows: Row[];
  },
};

// This is the secret combination to uncover.
interface SecretRow {
  secretCells: {
    position: number;
    color: string;
  }[]
}

// Each row of the board.
interface Row {
  position: number;
  cells: Cell[];
  clues: Clue[];
}

// Each cell of a row.
interface Cell {
  rowPosition: number;
  position: number;
  color: string | null;
}

// Each clue of a row. These are white or black according to the result.
interface Clue {
  color: string | null;
}
```
I did it this way because my intention is to make some kind of real-time viewer of other users' games. 

Then the public state will be shared, and the renderer will have the position of each cell, and its color.
## Game rendering

To render each row of the board, I created a function called [renderRows](./js/mastermind/game-page/render.js) that takes two arguments. The first argument is the HTML element where the rows will be rendered, and the second argument is the list of rows defined in the state.

## Game Subject

I created the [MastermindGame](./js/mastermind/game-state/MastermindGame.js) class that inherits from [Subject](./js/lib/Subject.js) to implement the observer design pattern. 

This class saves the initial state and is responsible for updating it.

There are three ways to update the state: adding a color, removing a color, and checking the result.

Each time the state is updated, the observers are notified.

## Game Observers

All the observers subscribed to the `MastermindGame` instance are in the [observers.js](./js/mastermind/game-page/observers.js) file. Those are:

* `CurrentCellObserver`: Add a yellow border to the cell to identify it as the current cell.
* `NextCellObserver`: Remove the yellow border when a color is deleted.
* `PreviusCellObserver`: Remove the yellow border when a color is added, and change the backgrounColor.
* `RowObserver`. Render black and white balls as a result of evaluating the response.
* `ControlButtonsObserver`. Disable or enable check and remove buttons.
* `VictoryOrLossObserver`. Display the defeat or victory modal based on the result.

## In future
I will create a backend api, with a socket connection in order to do:
* Real-time viewer of other users' games.
* Users will be able to send real-time suggestions.