
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

const colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
    '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
    '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
    '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
    '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
    '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
    '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
    '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
    '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
    '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];

function colorIn(event) {
    const random_color = colorArray[(Math.floor( 
        Math.random() * colorArray.length))]; 
    if (event.target.id !== "container") event.target.style.backgroundColor = random_color;
};

// Set a delay on the color fading
var delayInMilliseconds = 5000;

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





