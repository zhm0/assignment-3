// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR() {
    let newRow = document.createElement("tr");
    let grid = document.getElementById("grid");

    if (numCols === 0) {
        ++numCols;
    }

    for (let i = 0; i < numCols; ++i) {
        let box = document.createElement("td");
        box.onclick = function() {
            this.style.backgroundColor = colorSelected;
        };
        newRow.appendChild(box);
    }
    grid.appendChild(newRow);
    ++numRows;
}

// Add a column
function addC() {
    if (numRows === 0) {
        let newRow = document.createElement("tr");
        let grid = document.getElementById("grid");
        let box = document.createElement("td");
        box.onclick = function() {
            this.style.backgroundColor = colorSelected;
        };
        newRow.appendChild(box);
        grid.appendChild(newRow);
        ++numRows;
    }
    else {
        for (let i = 0; i < numRows; ++i) {
            let currentRow = document.querySelectorAll("tr")[i];
            let box = document.createElement("td");
            box.onclick = function() {
                this.style.backgroundColor = colorSelected;
            };
            currentRow.appendChild(box);
        }
    }
    ++numCols;
}

// Remove a row
function removeR() {
    if (numRows !== 0) {
        let grid = document.getElementById("grid"); 
        let lastRow = grid.lastElementChild; 
        grid.removeChild(lastRow);
        --numRows;
        if (numRows === 0) {
            numCols = 0;
        }
    }
}

// Remove a column
function removeC() {
    if (numCols !== 0) {
        if (numCols === 1) {
            let grid = document.getElementById("grid"); 
            while (numRows > 0) {
                let lastrow = grid.lastElementChild; 
                grid.removeChild(lastrow);
                --numRows;
            }
        }
        else {
            let rows = document.querySelectorAll("tr");
            for (let i = 0; i < numRows; ++i) {
                let lastRow = rows[i].lastElementChild;
                rows[i].removeChild(lastRow);
            }
        }
        --numCols;
    }
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    let rows = document.querySelectorAll("tr");
    for (let i = 0; i < numRows; ++i) {
        let currentRow = rows[i].querySelectorAll("td");
        currentRow.forEach(cell => {
            if (!cell.style.backgroundColor) {
                cell.style.backgroundColor = colorSelected;
            }
        })
    }
}

// Fill all cells
function fillAll(){
    let rows = document.querySelectorAll("tr");
    for (let i = 0; i < numRows; ++i) {
        let currentRow = rows[i].querySelectorAll("td");
        currentRow.forEach(cell => {
            cell.style.backgroundColor = colorSelected;
        })
    }
}

// Clear all cells
function clearAll(){
    let rows = document.querySelectorAll("tr");
    for (let i = 0; i < numRows; ++i) {
        let currentRow = rows[i].querySelectorAll("td");
        currentRow.forEach(cell => {
            cell.style.backgroundColor = null;
        })
    }
}