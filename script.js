
const container = document.getElementById('container');
const button = document.getElementById('button');

let squaresPerSide = 16;

// Area = (Element width - border), squared. 
const containerArea = Math.pow(container.offsetWidth - 2, 2);

// Width squared, to calculate the total amount of squares.
function calcGridSize(squaresPerSide) {
    return Math.pow(squaresPerSide, 2);
}

// Square root of the container area divided by the area of each square - border
function calcSquareWidth(squaresPerSide) {
    return (Math.sqrt(containerArea / calcGridSize(squaresPerSide)) - 2);
}

function drawGrid(squaresPerSide) {
    // Append X new div elements with the class "box" to the container element.
    // To generate a grid layout
    for(let i = 1; i <= calcGridSize(squaresPerSide); i++) {
        const div = document.createElement("div");
        const squareWidth = calcSquareWidth(squaresPerSide);  
    
        div.style.width = `${squareWidth}px`;
        div.classList.add("box");
    
        container.appendChild(div);
    }
}

drawGrid(squaresPerSide);

button.addEventListener('click', function() {
    const userInput = parseInt(prompt("Input number of squares per size for the new grid (Min: 2, Max: 100)", "16"));
    userInput > 100 ? squaresPerSide = 100 : squaresPerSide = userInput;
    userInput < 1 ? squaresPerSide = 2 : squaresPerSide = userInput;

    drawGrid(squaresPerSide);
});





