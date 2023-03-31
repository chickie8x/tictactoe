document.addEventListener('DOMContentLoaded', function () {

    const boardSize = 9

    const gameBoard = document.getElementById('gameboard')

    for (let i = 0; i < boardSize; i++) {
        const cell = document.createElement('div')
        cell.classList.add('square')
        cell.id = i
        gameBoard.append(cell)
    }

    const cells = document.getElementsByClassName('square')
    console.log(cells)
    for (cell of cells){
        cell.addEventListener('click', function(e) {
            console.log(e.target.id)
        })
    }


})