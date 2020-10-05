import {Game} from './game.js';

// ES6 modules are [actually strict by default](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode#Strict_mode_for_modules)
// Therefore, you can in fact comment this out or remove it.
// 'use strict';

// TODO
const board = new Game();
board.render(document.getElementById('board'));
document.getElementById('playbutton').addEventListener('click', updateBoard);

function updateBoard() {
    const word = document.getElementById('word').value;
    const xcoord = document.getElementById('x').value;
    const ycoord = document.getElementById('y').value;
    const direction = document.getElementById('direction').value === 'horizontal';
    if (!(word === '') && !(xcoord === '') && !(ycoord === '')) {
        board.playAt(word, { x: xcoord, y: ycoord }, direction);
        console.log("success!");
    }
    board.render(document.getElementById('board'));
}


