const board = document.querySelector('#board')
const SQUARES_NUMBER = 20 ** 2
const colors = ['#8D4E7B', '#CE834A', 'pink', '#9193CE', '#87CE85', '#79CEC7', '#CECA4D', '#91CE93']
const red_color = '#EB2C2F'
const green_color = '#40B600'

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))

    square.addEventListener('mouseleave', () => removeColor(square))

    board.append(square)
}

const allSquares = document.querySelectorAll('.square')
/*for (let i = 0; i < allSquares.length; i+=9) {
    allSquares[i].style.background = '#40B600'
}*/

//allSquares[39].style.background = '#40B600'

function setColor(element) {
    const color = colors[randomNumber(0, colors.length)]
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 20px ${color}`
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}

function randomNumber(min = 0, max = 1) {
    if (min >= max) { return max; }
    return Math.floor(Math.random() * (max - min) + min)
} 

function getPoint(x, y) {
    x -= 1
    y -= 1
    let num = (y * Math.sqrt(SQUARES_NUMBER)) + x

    return num
}

allSquares[getPoint(13, 15)].style.background = '#40B600'