// DOM access
let btnCreator = document.querySelector("#creator")
let gridContainer = document.querySelector("#grid-container")


// create the div grid on click
btnCreator.addEventListener('click', () => {
    alert("Welcome grid");
    // create the row
    for (let i = 0; i < 16; i++) {
        let newDivRow = document.createElement('div');
        newDivRow.className = 'row';
        gridContainer.appendChild(newDivRow);

        // create the divs
        let gridRow = document.querySelectorAll('.row')
        for (let j = 0; j < 16; j++) {
            let newDiv = document.createElement('div');
            newDiv.className = 'square column';
            gridRow[i].appendChild(newDiv);
        }
    }
  });


// Set some attributes for the div (e.g., class, id, etc.)
// newDiv.className = 'newDivClass'; // You can set a class name if needed
// newDiv.id = 'newDivId'; // You can set an id if needed