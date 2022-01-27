const main = document.querySelector('#container');

// Create the grid on reset button click 

let button = document.querySelector('#reset-button');

button.addEventListener('click', () => {
    let squares = document.querySelectorAll('.grid-square');
    squares.forEach((square) => {
        main.removeChild(square);
    });

    let gridSize = prompt('Enter the side length of your grid (max = 100): ', 16); // Ex. 5 will be a 5x5 grid;
    createGrid(gridSize);
});

function createGrid(n) {
    if (n <= 100){
        let squareLength = 500 / n;      // Formula for side length of each grid square
        for (let i = 0; i < n**2; i++){            
            let div = document.createElement('div');    // Create a div for each square (gridSize ** 2)
            div.classList.add('grid-square');
            setAttributes(div, { style: `height: ${squareLength}px; width: ${squareLength}px;`});   // Give each div dimensions of squareLength
            div.addEventListener('mouseover', () => {
                div.style.background = "yellowgreen";   // Div (grid square) will change color on mouseover event
            });
            main.appendChild(div);
        }

        let clear = document.querySelector('#clear-button');  
        clear.addEventListener('click', () => {        // On click we reset the background of all grid squares to white
            let grid = document.querySelectorAll('.grid-square'); 
            grid.forEach((square) => {
                square.style.background = "white";
            });
        })
    } else {
        alert('Please enter a value no greater than 100');
        let n = prompt('Enter the side length of your grid (max = 100): ', 16);
        createGrid(n);
    };
}

function setAttributes(el, attrs) {
    Object.keys(attrs).forEach(key => el.setAttribute(key, attrs[key])); // Function to set mulitple attributes at once
}

createGrid(16);
