let currentScreen = 'initialScreen'
let player = 2

//preload
let images, sounds, musics

//setup
let screens = {}

//draw
let number = 0
function toggle() {
    number++
    if (number >= 2) { number = 0}
    return number
}