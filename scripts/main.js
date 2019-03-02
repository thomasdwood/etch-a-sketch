const resetButton = document.querySelector('.reset');
resetButton.addEventListener('click', function() { resetGrid () });

createGrid(16);

function createGrid(gridSize) {
    
    let itemSize = 960 / gridSize;

    let container = document.getElementById('containter');
    let grid = document.createElement('div');
    grid.setAttribute('id', 'grid')
    container.appendChild(grid);
    
    console.log(container)
    for (i = 0; i < gridSize; i++) {
        let row = document.createElement('div');
        row.classList.add('row');
        grid.appendChild(row);
        
        for (j = 0; j < gridSize; j++) {
            let item = document.createElement('div');
            //item.setAttribute('style', `height:${itemSize}px; width:${itemSize}px;`);
            item.style.height = `${itemSize}px`;
            item.style.width = `${itemSize}px`;
            item.addEventListener("mouseover", function(event) { turnOnPixel(event) });
            row.appendChild(item);
        }
    }
}

function turnOnPixel(event) {
    //event.target.classList.add('on');

    let color = event.target.style.backgroundColor

    if (color.substring(0,3) != "rgb") {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        event.target.style.backgroundColor = `rgb(${r},${g},${b}`;
    }

    
    var opacity = event.target.style.opacity;
    console.log("opacity:",opacity)

    
    if (opacity < 1.0) {
        console.log("IM HERE")
        event.target.style.opacity = (opacity + .1)
    }
    //console.log("modified opacity:",opacity)

    
}

function resetGrid() {
    let grid = document.getElementById('grid');
    grid.remove();
    var size = prompt("How Many Pixels?");
    if (size != null) {
        createGrid(size);
    }
}
