import ".../js/Domain/domain.js"
export default class Game {
  start() {
    console.log('game started');
  }
}
export {GameSavingData, readGameSaving as loadGame, writeGameSaving as saveGame}
class GameSavingData {
}

function readGameSaving() {
}

function writeGameSaving() {
}