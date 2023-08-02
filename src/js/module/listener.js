const gameField = document.querySelector('.game-field');
const gameCells = gameField.querySelectorAll('.game-field--cell');
const sideChoiceX = document.querySelector('.side-choice--x');

gameField.addEventListener('click', evt => {
  const gameCellData = evt.target.dataset.cell;
  const gameCell = gameField.querySelector(
      `.game-field__cell--${gameCellData}`);

  sideChoiceX.checked ?
      gameCell.classList.toggle('cross') :
      gameCell.classList.toggle('zero');

  console.log(gameCell);
});
