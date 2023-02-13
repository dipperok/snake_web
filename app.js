const board = document.querySelector('#board')
const SQUARES_NUMBER = 20 ** 2
const colors = ['#8D4E7B', '#CE834A', 'pink', '#9193CE', '#87CE85', '#79CEC7', '#CECA4D', '#91CE93']
const red_color = '#EB2C2F'
const green_color = '#40B600'
const green_head = '#236500'

let apple_coor_x = 0
let apple_coor_y = 0

let score = 0

const config = {
    step: 0,
    maxStep: 6,
    sizeCell: 1,
}

const snake = {
    x: 10
    ,
    y: 10,
    dx: 1,
    dy: 0,
    tails: [],
    maxTails: 3
}

let apple = {
    x: 16,
    y: 16
}

let vectors = []

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
    update()
    const start_game = setInterval(() => {
        console.log('After timeout')
        spawn_player()
        snakeMove(snake.x, snake.y)
    },300)
    const clear_game = setInterval(() => {
        //for (let i = 0; i < SQUARES_NUMBER; i++) {
        //    setTimeout(removeColor(allSquares[i]), 1000000) 
        //}
        //spawn_apple()
    },400)
}
function update() {
    const update = setInterval(() => {
        get_apple()
    }, 50)
}

function snakeMove(x, y) {
    

    if ((snake.dx === 1 && snake.dy === 0) ) { 
        snake.x += 1
    }
    else if (snake.dx === 0 && snake.dy === -1) {
        snake.y -= 1
    }
    else if (snake.dx === -1 && snake.dy === 0) {
        snake.x -= 1
    }
    else if (snake.dx === 0 && snake.dy === 1) {
        snake.y += 1
    }
    
    if (snake.x === 21) {
        snake.x = 1
    }
    if (snake.x === 0){
        snake.x = 20
    }
    if (snake.y === 21) {
        snake.y = 1
    }
    if (snake.y === 0){
        snake.y = 20
    }
    //setTimeout(setColor(allSquares[getPoint(x, y)], red_color), 1000);
}

function moveLeft() {
    if (snake.dx === 1 && snake.dy === 0) {
        snake.dx = 0 
        snake.dy = -1
    }
    else if (snake.dx === 0 && snake.dy === -1) {
        snake.dx = -1 
        snake.dy = 0
    }
    else if (snake.dx === -1 && snake.dy === 0) {
        snake.dx = 0
        snake.dy = 1
    }
    else if (snake.dx === 0 && snake.dy === 1) {
        snake.dx = 1 
        snake.dy = 0
    }
}

function moveRight() {
    if (snake.dx === 1 && snake.dy === 0) {
        snake.dx = 0 
        snake.dy = 1
    }
    else if (snake.dx === 0 && snake.dy === 1) {
        snake.dx = -1 
        snake.dy = 0
    }
    else if (snake.dx === -1 && snake.dy === 0) {
        snake.dx = 0
        snake.dy = -1
    }
    else if (snake.dx === 0 && snake.dy === -1) {
        snake.dx = 1 
        snake.dy = 0
    }
}

function setColor(element, color) {
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 20px ${color}`
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000` 
}

function destroy(x, y) {
    allSquares[getPoint(x, y)].style.backgroundColor = '#1d1d1d'
    allSquares[getPoint(x, y)].style.boxShadow = `0 0 2px #000` 
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
    //apple_coor_x = randomNumber(1, Math.sqrt(SQUARES_NUMBER)+1)
    //apple_coor_y = randomNumber(1, Math.sqrt(SQUARES_NUMBER)+1)
    apple_coor_x = apple.x
    apple_coor_y = apple.y
    setColor(allSquares[getPoint(apple_coor_x, apple_coor_y)], red_color)
}

function spawn_player() {
    setColor(allSquares[getPoint(snake.x, snake.y)], green_head)
}

function get_apple() {
    if (snake.x === apple.x && snake.y === apple.y) {
        destroy(apple.x, apple.y)
        give_score(1)
        console.log(score)
        apple.x = randomNumber(1, 21)
        apple.y = randomNumber(1, 21)
        spawn_apple()
    }
}

function give_score(num) {
    score += 1
}



main()