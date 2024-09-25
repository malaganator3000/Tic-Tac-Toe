# Parametric Tic-Tac-Toe

## Description

Parametric Tic-Tac-Toe is a dynamic Tic-Tac-Toe game that allows the board size to be configurable. The game leverages matrices to represent the game grid and applies parametric equations to calculate the winner. Zustand is used to efficiently manage the game state.


## Features

- **Dynamic board size**: Set the size of the Tic-Tac-Toe board.
- **Matrix operations**: Uses matrix calculations to track moves and determine the winner.
- **Parametric equations**: With the help of parametric equations, supporting lines are created to iterate over the original matrix, allowing us to find the winner. The winning conditions are calculated using parametric formulas: 
  `x = x1 + tdx, y = y1 + tdy`.
- **State management**: Zustand is implemented to handle the game's state management.

## Getting Started

### Prerequisites

To run this project, you will need:

- Node.js (>= 18.x)
- npm (>= 6.x) or yarn

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/malaganator3000/Tic-Tac-Toe.git
    ```

2. Navigate to the project directory:
    ```bash
    cd Tic-Tac-Toe
    ```

3. Install dependencies:
    ```bash
    npm install
    ```
   or
    ```bash
    yarn install
    ```

4. Start the development server:
    ```bash
    npm dedv
    ```
   or
    ```bash
    yarn dev
    ```
## Key Files

- `src/components/Game.tsx`: Main component that initializes the game and board.
- `src/components/Board.tsx`: Renders the Tic-Tac-Toe board based on the matrix size.
- `src/components/Square.tsx`: Individual square components that handle user interaction.
- `src/math/calculateWinner.ts`: Contains the logic for calculating the winner using matrix manipulation and parametric equations.

## Winner Calculation

The winner is calculated by generating lines (rows, columns, and diagonals) using the parametric equation:
`x = x1 + tdx`, `y = y1 + tdy`, where `t` is the step along the line. The function `generateLine` constructs these lines, and `checkLine` verifies if all positions along a line have the same value.

Example from `src/math/calculateWinner.ts`:

```typescript
export const calculateWinner = <T>(matrix: Matrix<T>): T | null => {
  // Row and column checks
  for (let i = 0; i < matrix.length; i++) {
    const rowLine = generateLine([i, 0], [0, 1], matrix.length);
    const rowWinner = checkLine(rowLine, matrix);
    if (rowWinner) return rowWinner;

    const colLine = generateLine([0, i], [1, 0], matrix.length);
    const colWinner = checkLine(colLine, matrix);
    if (colWinner) return colWinner;
  }

  // Diagonal checks
  const firstDiagonal = generateLine([0, 0], [1, 1], matrix.length);
  const secondDiagonal = generateLine([0, matrix.length - 1], [1, -1], matrix.length);

  return checkLine(firstDiagonal, matrix) || checkLine(secondDiagonal, matrix);
};
```
