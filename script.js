// DOM access
let btnCreator = document.querySelector("#creator")
let gridContainer = document.querySelector("#grid-container")

// Create a new div element
let newDiv = document.createElement('div');
newDiv.innerHTML = 'This is a new div!';
newDiv.className = 'square'; 

// create the div grid on click
btnCreator.addEventListener('click', () => {
    alert("Hello World");
    gridContainer.appendChild(newDiv);
  });


// Set some attributes for the div (e.g., class, id, etc.)
// newDiv.className = 'newDivClass'; // You can set a class name if needed
// newDiv.id = 'newDivId'; // You can set an id if needed