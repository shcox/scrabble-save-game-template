import {readFileSync} from "fs";
const dictionary = JSON.parse(readFileSync("./dictionary.json"));

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
 * This function will check if a word is valid, that is if it matches any of the words in the dictionary.
 * @param {string} word A string containing lowercase letters, with possible wildcards.
 * @returns {boolean} Returns whether the given word is a valid word.
 */
export function isValid(word) {
    // TODO
}