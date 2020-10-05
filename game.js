import {shuffle} from './shuffle.js';

// ES6 modules are [actually strict by default](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode#Strict_mode_for_modules)
// Therefore, you can in fact comment this out or remove it.
// 'use strict';

const charscore = {'*': 0, 'e': 1, 'a': 1, 'i': 1, 'o': 1, 'n': 1, 'r': 1, 't': 1,
'l': 1, 's': 1, 'u': 1, 'd': 2, 'g': 2, 'b': 3, 'c': 3, 'm': 3, 'p': 3, 
'f': 4, 'h': 4, 'v': 4, 'w': 4, 'y': 4, 'k': 5, 'j': 8, 'x': 8, 'q': 10,
'z': 10};

const specials = [['3w', 'x', 'x', '2l', 'x', 'x', 'x', '3w', 'x', 'x', 'x', '2l', 'x', 'x', '3w'],
['x', '2w', 'x', 'x', 'x', '3l', 'x', 'x', 'x', '3l', 'x', 'x', 'x', '2w', 'x'],
['x', 'x', '2w', 'x', 'x', 'x', '2l', 'x', '2l', 'x', 'x', 'x', '2w', 'x', 'x'],
['2l', 'x', 'x', '2w', 'x', 'x', 'x', '2l', 'x', 'x', 'x', '2w', 'x', 'x', '2l'],
['x', 'x', 'x', 'x', '2w', 'x', 'x', 'x', 'x', 'x','2w', 'x', 'x', 'x', 'x'],
['x', '3l', 'x', 'x', 'x', '3l', 'x', 'x', 'x', '3l', 'x', 'x', 'x', '3l', 'x'],
['x', 'x', '2l', 'x', 'x', 'x', '2l', 'x', '2l', 'x', 'x', 'x', '2l', 'x', 'x'],
['3w', 'x', 'x', '2l', 'x', 'x', 'x', 'x', 'x', 'x', 'x', '2l', 'x', 'x', '3w'],
['x', 'x', '2l', 'x', 'x', 'x', '2l', 'x', '2l', 'x', 'x', 'x', '2l', 'x', 'x'],
['x', '3l', 'x', 'x', 'x', '3l', 'x', 'x', 'x', '3l', 'x', 'x', 'x', '3l', 'x'],
['x', 'x', 'x', 'x', '2w', 'x', 'x', 'x', 'x', 'x','2w', 'x', 'x', 'x', 'x'],
['2l', 'x', 'x', '2w', 'x', 'x', 'x', '2l', 'x', 'x', 'x', '2w', 'x', 'x', '2l'],
['x', 'x', '2w', 'x', 'x', 'x', '2l', 'x', '2l', 'x', 'x', 'x', '2w', 'x', 'x'],
['x', '2w', 'x', 'x', 'x', '3l', 'x', 'x', 'x', '3l', 'x', 'x', 'x', '2w', 'x'],
['3w', 'x', 'x', '2l', 'x', 'x', 'x', '3w','x', 'x', 'x', '2l', 'x', 'x', '3w']];

//function baseScore(word) {
 //   const score = {'*': 0, 'e': 1, 'a': 1, 'i': 1, 'o': 1, 'n': 1, 'r': 1, 't': 1,
   //     'l': 1, 's': 1, 'u': 1, 'd': 2, 'g': 2, 'b': 3, 'c': 3, 'm': 3, 'p': 3, 
     //   'f': 4, 'h': 4, 'v': 4, 'w': 4, 'y': 4, 'k': 5, 'j': 8, 'x': 8, 'q': 10,
       // 'z': 10};
    //let wordScore = 0;
    //word.split('').forEach(letter => {
    //    wordScore += score[letter];
    //});
    //return wordScore;
//}

export class Game {
    // Include your code from HW#3
    // You can use the solution when released
    constructor() {
        this.tiles = ['*', '*', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e',
        'e', 'e', 'e', 'e', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a',
        'i', 'i', 'i', 'i', 'i', 'i', 'i', 'i', 'i', 'o', 'o', 'o', 'o',
        'o', 'o', 'o', 'o', 'n', 'n', 'n', 'n', 'n', 'n', 'r', 'r', 'r',
        'r', 'r', 'r', 't', 't', 't', 't', 't', 't', 'l', 'l', 'l', 'l',
        's', 's', 's', 's', 'u', 'u', 'u', 'u', 'd', 'd', 'd', 'd', 'g',
        'g', 'g', 'b', 'b', 'c', 'c', 'm', 'm', 'p', 'p', 'f', 'f', 'h',
        'h', 'v', 'v', 'w', 'w', 'y', 'y', 'k', 'j', 'x', 'q', 'z'];
        this.tiles = shuffle(this.tiles);
        this.board = [];
        let i;
        for (i = 0; i < 15; i++) {
            this.board[i] = new Array(15);
        }
    }
    /**
     * This function removes the first n tiles from the bag and returns them.
     * If n is greater than the number of remaining tiles, this removes and returns all the tiles from the bag.
     * If the bag is empty, this returns an empty array.
     * @param {number} n The number of tiles to take from the bag.
     * @returns {Array<string>} The first n tiles removed from the bag.
     */
    takeFromBag(n) {
        const t = [];
        let i;
        for (i = 0; i < n; i++) {
            if (this.tiles.length > 0) {
                t.push(this.tiles.pop());
            }
        }
        return t;
    }

    /**
     * This function returns the current state of the board.
     * The positions where there are no tiles can be anything (undefined, null, ...).
     * @returns {Array<Array<string>>} A 2-dimensional array representing the current grid.
     */
    getGrid() {
        return this.board;
    }

    /**
     * This function will be called when a player takes a turn and attempts to place a word on the board.
     * It will check whether the word is valid and can be placed at the given position. If not, it'll return -1.
     * It will then compute the score that the word will receive and return it, taking into account special positions.
     * @param {string} word The word to be placed.
     * @param {Object<x|y, number>} position The position, an object with properties x and y. Example: { x: 2, y: 3 }.
     * @param {boolean} direction Set to true if horizontal, false if vertical. 
     * @returns {number} The score the word will obtain (including special tiles), or -1 if the word is invalid.
     */
    playAt(word, position, direction) {
        position.x -= 1;
        position.y -= 1;
        let xstart = position.x;
        let ystart = position.y;
        const chars = word.split('');
        let canplace = true; 
        let multiplier = 1;
        let score = 0;
        chars.forEach(c => {
            if (position.x >= 15 || position.y >= 15 || position.x < 0 || position.y < 0) {
                canplace = false;
            }
            else if ((this.board[position.y][position.x] === undefined) && canplace) {
                //this.board[position.y][position.x] = c;
                const mult = specials[position.y][position.x]; 
                if (mult === 'x') {
                    score += charscore[c];
                } else if (mult.charAt(1) === 'l') {
                    score += charscore[c] * parseInt(mult.charAt(0));
                } else {
                    score += charscore[c];
                    multiplier = multiplier * parseInt(mult.charAt(0));
                }    
            } else {
                canplace = false; 
            }
            if (direction === true) {
                position.x += 1;
            } else {
                position.y += 1;
            }
        });
        if (!canplace) {
            return -1;
        } else {
            chars.forEach(c => {
                this.board[ystart][xstart] = c;
                if (direction === true) {
                    xstart += 1;
                } else {
                    ystart += 1;
                }
            });
            return score * multiplier;
        }
    }

    /**
     * This method will take an HTMLElement, which will either be empty or contain the current grid, and render the
     * board in that element. For example, if we have a `<div id="board"></div>`, this should be called
     * `game.render(document.getElementById('board'))`.
     * @param {HTMLElement} element an HTMLElement to render the board into.
     */
    render(element) {
        if (element.innerHTML === '') {
            //render the board!
            let i = 0;
            for (i = 0; i < 225; i++) {
                const square = document.createElement("div");
                square.classList.add("grid-item");
                const mult = specials[Math.floor(i / 15)][i % 15];
                if (mult === '3w') {
                    square.classList.add('tripleWord');
                } else if (mult === '2w') {
                    square.classList.add('doubleWord');
                } else if (mult === '3l') {
                    square.classList.add('tripleLetter');
                } else if (mult === '2l') {
                    square.classList.add('doubleLetter');
                } else {
                    square.classList.add('normalSquare');
                }
                element.appendChild(square);
            }
        } else {
            const squares = element.childNodes;
            let i = 0;
            for (i = 0; i < 225; i++) {
                if (!(this.board[Math.floor(i / 15)][i % 15] === undefined)) {
                    squares[i].innerHTML = this.board[Math.floor(i / 15)][i % 15];
                }
            }
        }
    }
}