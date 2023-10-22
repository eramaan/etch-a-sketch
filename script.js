// DOM access
let btnCreator = document.querySelector("#creator")
let gridContainer = document.querySelector("#grid-container")


// create the div grid on click
btnCreator.addEventListener('click', () => {
    
    // create the column
    for (let i = 0; i < 16; i++) {
        let newDivColumn = document.createElement('div');
        newDivColumn.className = 'column';
        gridContainer.appendChild(newDivColumn);

        // create the divs
        let gridColumns = document.querySelectorAll('.column')
        for (let j = 0; j < 16; j++) {
            let newDiv = document.createElement('div');
            newDiv.className = 'square row';
            gridColumns[i].appendChild(newDiv);
        }
    }
    
    // add hovering event
    let squares = document.querySelectorAll('.square');
        console.log(squares.length)
        for (let k = 0; k < squares.length; k++) {
            squares[k].addEventListener("mouseout", () => {
                squares[k].classList.add('checked'); 
            });
        }
});

