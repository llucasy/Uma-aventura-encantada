function initialScreen () {

    function setup() {
        _button()
        musics.musicInitialScreen.loop()
    }

    function draw() {
        let number = toggle()
        image(images.bgInitialScreen, 0, 0, width, height)
        image(images.imgPlayer[number], (width - 80) /2, height / 1.8, 80, 110)
        image(images.imgFemale[number], (width - 80) / 2.5, height / 1.8, 80, 110)
        image(images.imgSoldier[number], (width - 80) / 1.65, height / 1.8, 80, 110)
        _text()
    }

    function _text() {
        fill(0)
        strokeWeight(2)
        stroke(245, 1)
        textAlign(CENTER)
        textSize(50)
        text('Uma aventura', width / 2, height / 8.9)
        textSize(150)
        text('Encantada', width / 2, height / 3.7)
        textSize(30)
        text('Era uma vez um lugar mágico, onde todos viviam felizes.', width / 2, height / 2.7)
        text('Até os monstrinhos e zombies se rebelarem...', width / 2, height / 2.4)
        textSize(20)
        text('Escolha um dos personagens:', width / 2, height / 1.9)
        textFont('Georgia')
    }

    function _button() {
        button = createButton('Iniciar a aventura')
        button.addClass('botao-tela-inicial')
        button.position(width / 7 * 2.4, height / 1.2)
        button.center('horizontal')
        button.size(400)
    }

    return {
        setup,
        draw
    }
}

function gameScreen() {

}