// DOM access
let btnCreator = document.querySelector("#creator")
let btnCleaner = document.querySelector("#cleaner")
let gridContainer = document.querySelector("#grid-container")

// grid dimension & tiles number
let gridDimension = 960
let numTiles = 0

// create the div grid on click
btnCreator.addEventListener('click', () => {
    
    //create prompt asking for tiles number
    while (numTiles <= 100) {
        numTiles = parseInt(prompt("How many tiles you want to play with?"));
    
        if (numTiles > 100) {
            alert("How greedy you are. Told ya, less than 100 please");
        }
    }

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
    
    // add hovering event
    let squares = document.querySelectorAll('.square');
        for (let k = 0; k < squares.length; k++) {
            squares[k].addEventListener("mouseout", () => {
                squares[k].classList.add('checked'); 
            });
        }

    // clean grids
    btnCleaner.addEventListener('click', () => {
        for (let k = 0; k < squares.length; k++) {
                squares[k].classList.remove('checked');
        }
    });
});

