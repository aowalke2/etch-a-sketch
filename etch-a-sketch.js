const GRID_WIDTH = 600;
const gameContainer = document.querySelector('.game');
//const grid = document.querySelector('.grid');
const colorPicker = document.getElementById('color');
const normalButton = document.getElementById('normal')
const rainbowButton = document.getElementById('rainbow')
const eraserButton = document.getElementById('eraser')
const clearButton = document.getElementById('clear')
const slider = document.getElementById('slider')
const sliderText = document.querySelector('.grid-size')


function makeSquare(grid, gridSize){
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.width = GRID_WIDTH/gridSize + 'px';
    square.style.height = GRID_WIDTH/gridSize + 'px';
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = colorPicker.value;
    });
    grid.appendChild(square)
}

function makeGrid(gridSize){
    const grid = document.createElement('div');
    grid.classList.add('grid')
    grid.style.width = GRID_WIDTH + 'px';
    gameContainer.appendChild(grid);
    for(let i = 1; i <= gridSize**2; i++){
        makeSquare(grid, gridSize);
    }
}

function unmakeGrid(){
    let gameNodeList = gameContainer.childNodes;
    gameContainer.removeChild(gameNodeList.item(gameNodeList.length-1));
}

slider.addEventListener('input', () => {
    gridSize = slider.value;
    sliderText.textContent = `Grid Size: ${gridSize} x ${gridSize}`;
});

let gridSize = slider.value;
makeGrid(gridSize);

clearButton.addEventListener('click', () => {
    unmakeGrid();
});