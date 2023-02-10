const board = document.querySelector('#board')
const SQUARES_NUMBER = 20 ** 2
const colors = ['#8D4E7B', '#CE834A', 'pink', '#9193CE', '#87CE85', '#79CEC7', '#CECA4D', '#91CE93']
const red_color = '#EB2C2F'
const green_color = '#40B600'
const green_head = '#236500'

let apple_coor_x = 0
let apple_coor_y = 0

let player_coor_x = 11
let player_coor_y = 10

let player_body = []

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    //square.addEventListener('mouseover', () => setColor(square, colors[randomNumber(0, colors.length)]))

    //square.addEventListener('mouseleave', () => removeColor(square))

    board.append(square)
}

const allSquares = document.querySelectorAll('.square')
/*for (let i = 0; i < allSquares.length; i+=9) {
    allSquares[i].style.background = '#40B600'
}*/

//allSquares[39].style.background = '#40B600'

function main() {
    spawn_apple()
    spawn_player()
    const start_game = setInterval(() => {
        console.log('After timeout')
    },1000)
}

function setColor(element, color) {
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

function spawn_apple() {
    apple_coor_x = randomNumber(1, Math.sqrt(SQUARES_NUMBER)+1)
    apple_coor_y = randomNumber(1, Math.sqrt(SQUARES_NUMBER)+1)
    setColor(allSquares[getPoint(apple_coor_x, apple_coor_y)], red_color)
}

function spawn_player() {
    setColor(allSquares[getPoint(player_coor_x, player_coor_y)], green_head)
}

main()