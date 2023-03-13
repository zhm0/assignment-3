// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR() {
    let newrow = document.createElement("tr");;

    if (numCols === 0)
    {
        ++numCols;
    }

    for (let i = 0; i < numCols; ++i)
    {
        let box = document.createElement("td");
        box.onclick = function() {
            this.style.backgroundColor = colorSelected;
        };
        newrow.appendChild(box);
    }

    document.getElementById("grid").appendChild(newrow);
    ++numRows;
}

// Add a column
function addC() {
    if (numRows === 0)
    {
        addR();
    }
    else
    {
        for (let i = 0; i < numRows; ++i)
        {
            let box = document.createElement("td");
            box.onclick = function() {
                this.style.backgroundColor = colorSelected;
            };
            document.querySelectorAll("tr")[i].appendChild(box);
        }
        ++numCols;
    }
}

// Remove a row
function removeR() {
    let grid = document.getElementById("grid"); 
    let lastrow = grid.lastElementChild; 
    grid.removeChild(lastrow);
    --numRows;
}

// Remove a column
function removeC() {
    alert("Clicked Remove Col"); // Replace this line with your code.
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    alert("Clicked Fill All Uncolored"); // Replace this line with your code.
}

// Fill all cells
function fillAll(){
    alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}