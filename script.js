// DOM access
let btnCreator = document.querySelector("#creator")
let btnCleaner = document.querySelector("#cleaner")
let btnClassic = document.querySelector("#classic")
let btnRainbow = document.querySelector("#rainbow")
let btnDarkener = document.querySelector("#darkener")
let gridContainer = document.querySelector("#grid-container")
let squares = document.querySelectorAll('.square');

// grid dimension & tiles number
let gridDimension = 800
let numTiles = 0

// create the div grid on click
btnCreator.addEventListener('click', () => {
    
    //create prompt asking for tiles number
    do {
        numTiles = parseInt(prompt("How many tiles you want to play with? (max 100)"));
        if (numTiles > 100) {
            alert("How greedy you are. Told ya, less than 100 please");
        }
    } while (numTiles > 100);
    
    // create the column
    for (let i = 0; i < numTiles; i++) {
        let newDivColumn = document.createElement('div');
        newDivColumn.className = 'column';
        gridContainer.appendChild(newDivColumn);

        // create the divs
        let gridColumns = document.querySelectorAll('.column')
        for (let j = 0; j < numTiles; j++) {
            let newDiv = document.createElement('div');
            newDiv.className = 'square row';
            newDiv.style.height = gridDimension / numTiles + 'px';
            newDiv.style.width = gridDimension / numTiles + 'px';
            gridColumns[i].appendChild(newDiv);
        }
    }

    //disable the #creator button
    btnCreator.disabled = true;

    // // add hovering event
    // let squares = document.querySelectorAll('.square');
    //     for (let k = 0; k < squares.length; k++) {
    //         squares[k].addEventListener("mouseout", () => {
    //             squares[k].classList.add('checked');
    //             squares[k].style.opacity = 0.1;

    //         });
    //     }
});


// clean grids
btnCleaner.addEventListener('click', () => {
    for (let k = 0; k < squares.length; k++) {
            squares[k].classList.remove('checked');
            squares[k].style.backgroundColor = "initial";
            squares[k].style.opacity = "initial";        
    }
});

// add hovering event
btnClassic.addEventListener('click', () => {
    for (let k = 0; k < squares.length; k++) {
        squares[k].addEventListener("mouseout", () => {
            squares[k].classList.add('checked');
        });
    }
});

// rainbow hovering event
btnRainbow.addEventListener('click', () => {
    let randomHexColorCode = () => {
        let n = (Math.random() * 0xfffff * 1000000).toString(16);
        return '#' + n.slice(0, 6);
    };

    let squares = document.querySelectorAll('.square');
    for (let k = 0; k < squares.length; k++) {
        squares[k].addEventListener("mouseout", () => {
            let randomColor = randomHexColorCode();
            squares[k].style.backgroundColor = randomColor;
        });
    }
});

// add gray shades event
btnDarkener.addEventListener('click', () => {
    let squares = document.querySelectorAll('.square');
    for (let k = 0; k < squares.length; k++) {
    squares[k].addEventListener("mouseout", () => {
        squares[k].classList.add('checked');
        let computedStyle = window.getComputedStyle(squares[k]);
        let opacityCurrent = computedStyle.getPropertyValue('opacity');
        squares[k].style.opacity = parseFloat(opacityCurrent) + 0.1;
        console.log(opacityCurrent)
    });
    }
});