// DOM access
let btnCreator = document.querySelector("#creator")
let btnCleaner = document.querySelector("#cleaner")
let gridContainer = document.querySelector("#grid-container")

// var od the tile number
let numTiles = 24
let gridDimension = 960

// create the div grid on click
btnCreator.addEventListener('click', () => {
    
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

