import {readFileSync} from "fs";
const dictionary = JSON.parse(readFileSync("./dictionary.json"));

/**
 * This function will check if a word is valid, that is if it matches any of the words in the dictionary.
 * @param {string} word A string containing lowercase letters, with possible wildcards.
 * @returns {boolean} Returns whether the given word is a valid word.
 */
export function isValid(word) {
    // TODO
}

/**
 * This helper function will make a copy of a set of available tiles.
 * As you can see, this function is NOT exported. It is just a helper function for other functions in this file.
 * @param {Object<string, number>} availableTiles A mapping of available tiles to their amount.
 * @returns {Object<string, number>} A copy of the parameter. 
 */
function copyAvailableTiles(availableTiles) {
    // TODO
}

/**
 * This function checks whether a given word can be constructed with the available tiles.
 * The availableTiles object should not be modified.
 *
 * @param {Object<string, number>} availableTiles A collection of available tiles and their frequency.
 * @param {string} word The word a player wants to construct.
 * @returns {boolean} true if the word can be constructed with the available tiles, else false.
 */
export function canConstructWord(availableTiles, word) {
    // Use your previous solution or the class solution.
}

/**
 * We define the base score of a word the score obtained by adding each letter's score, without taking board position
 * into account. This function will compute and return the base score of a given word.
 *
 * @param {string} word The word that will be used to compute the base score.
 * @returns {number} The base score for the given word.
 */
export function baseScore(word) {
    // Use your previous solution or the class solution.
}

/**
 * Finds and returns every word from the dictionary that can be constructed with the given tiles.
 * The availableTiles object should not be modified.
 *
 * @param {Object<string, number>} availableTiles A collection of available tiles and their frequency.
 * @returns {Array<string>} All words that can be constructed with the given tiles. The array is empty if there are no words available to construct.
 */
export function possibleWords(availableTiles) {
    // Use your previous solution or the class solution.
}

/**
 * Finds and returns the word(s) with the highest base score from the dictionary, given a set of available tiles.
 * The availableTiles object should not be modified.
 *
 * @param {Object<string, number>} availableTiles A collection of available tiles and their frequency.
 * @returns {Array<string>} The word (or words if there are ties) with the highest base score that can be constructed with the given tiles. The array is empty if there are no words available to construct.
 */
export function bestPossibleWords(availableTiles) {
    // Use your previous solution or the class solution.
}