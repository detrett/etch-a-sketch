
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

function cleanGrid(){
    container.textContent = '';
}

function drawGrid(squaresPerSide) {
    if(container.hasChildNodes) {
        cleanGrid();
    }
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

// Ensures input is between 2 and 100
function checkUserInput(userInput) {
    if(parseInt(userInput) > 100) {
        return 100;
    } else if (parseInt(userInput) < 2) {
        return 2;
    }
    return parseInt(userInput);
}

button.addEventListener('click', function() {
    const userInput = prompt("Input number of squares per size for the new grid (Min: 2, Max: 100)", "16");
    squaresPerSide = checkUserInput(userInput);

    drawGrid(squaresPerSide);
});

const colorArray = ['#e2eb98', '#93a392', '#adbf97', '#bad9a2', '#9dc4b5'];

function colorIn(event) {
    const random_color = colorArray[(Math.floor( 
        Math.random() * colorArray.length))]; 
    if (event.target.id !== "container") event.target.style.backgroundColor = random_color;
};

// Set a delay on the color fading
var delayInMilliseconds = 7500;

function colorOut(event) {
    if (event.target.id !== "container") {
        setTimeout(() => {
            event.target.style.backgroundColor = "white";
        }, delayInMilliseconds)
    }
};

container.addEventListener('mouseover', colorIn);

container.addEventListener('mouseout', colorOut);

drawGrid(squaresPerSide);





