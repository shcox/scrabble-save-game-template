import {readFileSync} from "fs";
const dictionary = JSON.parse(readFileSync("./dictionary.json"));

/**
 * This function will check if a word is valid, that is if it matches any of the words in the dictionary.
 * @param {string} word A string containing lowercase letters, with possible wildcards.
 * @returns {boolean} Returns whether the given word is a valid word.
 */
export function isValid(word) {
    let valid = false;
    dictionary.forEach(str => {
        if (str === word) {
            valid = true;
        }
    });
    return valid;
}

/**
 * This helper function will make a copy of a set of available tiles.
 * As you can see, this function is NOT exported. It is just a helper function for other functions in this file.
 * @param {Object<string, number>} availableTiles A mapping of available tiles to their amount.
 * @returns {Object<string, number>} A copy of the parameter. 
 */
function copyAvailableTiles(availableTiles) {
    return JSON.parse(JSON.stringify(availableTiles));
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
    const usedLetters = {};
    let wordFailed = false;
    word.split('').forEach(letter => {
        if (letter in availableTiles || '*' in availableTiles) {
            if (!(letter in usedLetters) && (letter in availableTiles)) {
                usedLetters[letter] = 1;
            } else if (usedLetters[letter] + 1 <= availableTiles[letter]) {
                usedLetters[letter]++;
            }  else if ('*' in availableTiles) {
                if (!('*' in usedLetters)) {
                    usedLetters['*'] = 1;
                } else if (usedLetters['*'] + 1 <= availableTiles['*']) {
                    usedLetters['*']++;
                } else {
                    wordFailed = true;
                }
            } else {
                wordFailed = true;
            }
        } else {
            wordFailed = true;
        }
    });
    return !wordFailed;
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
    const score = {'*': 0, 'e': 1, 'a': 1, 'i': 1, 'o': 1, 'n': 1, 'r': 1, 't': 1,
        'l': 1, 's': 1, 'u': 1, 'd': 2, 'g': 2, 'b': 3, 'c': 3, 'm': 3, 'p': 3, 
        'f': 4, 'h': 4, 'v': 4, 'w': 4, 'y': 4, 'k': 5, 'j': 8, 'x': 8, 'q': 10,
        'z': 10};
    let wordScore = 0;
    word.split('').forEach(letter => {
        wordScore += score[letter];
    });
    return wordScore;
}

/**
 * Finds and returns every word from the dictionary that can be constructed with the given tiles.
 * The availableTiles object should not be modified.
 *
 * @param {Object<string, number>} availableTiles A collection of available tiles and their frequency.
 * @returns {Array<string>} All words that can be constructed with the given tiles. The array is empty if there are no words available to construct.
 */
export function possibleWords(availableTiles) {
    const words = [];
    const fs = require('fs');
    //const dict = JSON.parse(fs.readFileSync('dictionary.json', 'utf8'));
    dictionary.forEach(word => {
        if (canConstructWord(availableTiles, word)) {
            words.push(word);
        }
    });
    return words;
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
    let words = [];
    const hs = 0; //highest score
    const dict = possibleWords(availableTiles);
    dict.forEach(word => {
        if (baseScore(word) > hs) {
            words = [word];
        } else if (baseScore(word) === hs) {
            words.push(word);
        } 
    });
    return words;
}