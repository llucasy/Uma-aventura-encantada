function preload() {
    images = LoadImages()
    sounds = LoadSounds()
    musics = LoadMusics()
}

function setup() {
    cnv = createCanvas(windowWidth, windowHeight)
    screens = {
        initialScreen,
        gameScreen
    }
    screens[currentScreen]().setup()
}

function draw() {
    frameRate(7)
    screens[currentScreen]().draw()
}