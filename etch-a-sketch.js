const GRID_WIDTH = 600;
const gameContainer = document.querySelector('.game');
const colorPicker = document.getElementById('color');
const normalButton = document.getElementById('normal')
const rainbowButton = document.getElementById('rainbow')
const eraserButton = document.getElementById('eraser')
const clearButton = document.getElementById('clear')
const slider = document.getElementById('slider')
const sliderText = document.querySelector('.grid-size')
let gridSize = slider.value;
let grid;

function makeSquare(grid, gridSize){
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.width = GRID_WIDTH/gridSize + 'px';
    square.style.height = GRID_WIDTH/gridSize + 'px';
    if(rainbowButton.classList == 'active'){
        square.addEventListener('mouseover', () => {
            let randomColor = Math.floor(Math.random()*16777215).toString(16);
            square.style.backgroundColor = '#' + randomColor;
        });
    }
    else { //normal
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = colorPicker.value;
        });
    }
    grid.appendChild(square)
}

function makeGrid(gridSize){
    const grid = document.createElement('div');
    this.grid = grid 
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

makeGrid(gridSize);

slider.addEventListener('input', () => {
    gridSize = slider.value;
    sliderText.textContent = `Grid Size: ${gridSize} x ${gridSize}`;
    unmakeGrid();
    makeGrid(gridSize);
    normalButton.classList.add('active');
    rainbowButton.classList.remove('active');
    eraserButton.classList.remove('active');
});

clearButton.addEventListener('click', () => {
    gridSize = slider.value;
    unmakeGrid();
    makeGrid(gridSize);
    normalButton.classList.add('active');
    rainbowButton.classList.remove('active');
    eraserButton.classList.remove('active');
});

normalButton.addEventListener('click', () => {
    normalButton.classList.add('active');
    rainbowButton.classList.remove('active');
    eraserButton.classList.remove('active');
    unmakeGrid();
    makeGrid(gridSize);
});

rainbowButton.addEventListener('click', () => {
    normalButton.classList.remove('active');
    rainbowButton.classList.add('active');
    eraserButton.classList.remove('active');
    unmakeGrid();
    makeGrid(gridSize);
});

eraserButton.addEventListener('click', () => {
    normalButton.classList.remove('active');
    rainbowButton.classList.remove('active');
    eraserButton.classList.add('active');
    let squares = this.grid.childNodes;
    squares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'white';
        });
    });
});