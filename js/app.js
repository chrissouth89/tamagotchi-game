/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/
const state = {
    boredom: 0,
    hunger: 0,
    sleepiness: 0,
}

let timer;
let gameOver;


/*------------------------ Cached Element References ------------------------*/

// span elements
const boredomStatEl = document.getElementById('boredom-stat')
const hungerStatEl = document.getElementById('hunger-stat')
const sleepStatEl = document.getElementById('sleepiness-stat')

// button elements
const playBtnEl = document.getElementById('play')
const feedBtnEl = document.getElementById('feed')
const sleepBtnEl = document.getElementById('sleep')
const resetBtnEl = document.getElementById('restart')

// status element
const gameMessageEl = document.getElementById('message')


/*-------------------------------- Functions --------------------------------*/
const init = () => {
    resetBtnEl.classList.add('hidden')
    gameMessageEl.classList.add('hidden')
    state.boredom = 0
    state.hunger = 0
    state.sleepiness = 0
    gameOver = false;
    render()
    clearInterval(timer)
    timer = setInterval(runGame, 2000)
}

const runGame = () => {
    console.log('running game')
    updateStates()
    checkGameOver()
    render()
}

const render = () => {
    boredomStatEl.textContent = state.boredom
    hungerStatEl.textContent = state.hunger
    sleepStatEl.textContent = state.sleepiness

    if(gameOver === true) {
        clearInterval(timer)
        resetBtnEl.classList.remove('hidden')
        gameMessageEl.classList.remove('hidden')
    }
}

const updateStates = () => {
    state.boredom += getRandomNum();
    state.hunger += getRandomNum();
    state.sleepiness += getRandomNum();
}

const getRandomNum = () => {
    let num = Math.floor(Math.random() * 4)
    return num
}

const checkGameOver = () => {
    if(state.boredom >=10 || state.hunger >= 10 || state.sleepiness >= 10) {
        gameOver = true;
    } else {
        gameOver = false;
    }
}

const playBtnClick = () => {
    state.boredom = 0
    render()
}

const feedBtnClick = () => {
    state.hunger = 0
    render()
}

const sleepBtnClick = () => {
    state.sleepiness = 0
    render()
}

init()

/*----------------------------- Event Listeners -----------------------------*/
playBtnEl.addEventListener('click', playBtnClick)
feedBtnEl.addEventListener('click', feedBtnClick)
sleepBtnEl.addEventListener('click', sleepBtnClick)
resetBtnEl.addEventListener('click', init)

// 1) Define the required variables used to track the state of the game.

// 2) Store cached element references.

// 3) Upon loading, the game state should be initialized, and a function should 
//    be called to render this game state.

// 4) The state of the game should be rendered to the user.

// 5) Handle the game over logic. 

// 6) Handle each instance of a player clicking a button with the use of a 
//    `handleClick()` function.

// 7) Create reset functionality.
