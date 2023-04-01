document.addEventListener('DOMContentLoaded', function () {

    const boardSize = 9

    const gameBoard = document.getElementById('gameboard')
    const info = document.getElementById('info')

    for (let i = 0; i < boardSize; i++) {
        const cell = document.createElement('div')
        cell.classList.add('square')
        cell.id = i
        gameBoard.append(cell)
    }

    const cells = document.getElementsByClassName('square')

    let turn = 'circle'

    let currentCell = undefined

    let message = `${turn} move`

    info.innerHTML = message

    const wincells = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 6, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    function checkClassName(arr){
        console.log(arr)
        arr.map(item => console.log(cells[item].dataset.move))
    }

    function checkWin() {
        for(item of wincells){
           checkClassName(item)
        }
    }

    function addMove() {
        currentCell = this
        const cirle = document.createElement('div')
        cirle.classList.add(turn)
        currentCell.append(cirle)
        currentCell.dataset.move = turn
        currentCell.removeEventListener('click', addMove)
        if (turn === 'circle') {
            turn = 'cross'
        }
        else {
            turn = 'circle'
        }
        message = `${turn} move`
        info.innerHTML = message
        checkWin()
    }

    for (cell of cells) {
        cell.addEventListener('click', addMove)
    }

    

})