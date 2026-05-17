/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Creates a new score board with an initial entry.
 *
 * @returns {Record<string, number>} new score board
 */
export function createScoreBoard() {
  const highScoreBoard = {
    'The Best Ever': 1000000
  };
  return highScoreBoard;
}

/**
 * Adds a player to a score board.
 *
 * @param {Record<string, number>} scoreBoard
 * @param {string} player
 * @param {number} score
 * @returns {Record<string, number>} updated score board
 */
export function addPlayer(scoreBoard, player, score) {
  scoreBoard[player] = score;
  return scoreBoard;
}

/**
 * Removes a player from a score board.
 *
 * @param {Record<string, number>} scoreBoard
 * @param {string} player
 * @returns {Record<string, number>} updated score board
 */
export function removePlayer(scoreBoard, player) {
  // assuming player exists because the instruction says
  // "if player vioalte the rules"
  delete scoreBoard[player];
  return scoreBoard;
}

/**
 * Increases a player's score by the given amount.
 *
 * @param {Record<string, number>} scoreBoard
 * @param {string} player
 * @param {number} points
 * @returns {Record<string, number>} updated score board
 */
export function updateScore(scoreBoard, player, points) {
  // assume player exists cause instructions 
  // "If a player finishes another game "
  scoreBoard[player] += points;
  return scoreBoard
}

/**
 * Applies 100 bonus points to all players on the board.
 *
 * @param {Record<string, number>} scoreBoard
 * @returns {Record<string, number>} updated score board
 */
export function applyMondayBonus(scoreBoard) {
  for (const [k,v] of Object.entries(scoreBoard)) {
  // for (const [k,v] of Object.entries(scoreBoard)) {
    // would not work if simply `v+=100` because in this for loop enclosing block, it creates 2 new labels pointing to box of our object. 
  // which means simply reassigning label k,v wont work. we need to reassign the label of scoreboard Object
    scoreBoard[k] = v+100;
  }
  return scoreBoard;
}
