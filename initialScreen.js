function initialScreen () {

    function setup() {
        _button()
        musics.musicInitialScreen.loop()
        cnv.mousePressed(_choose)
    }

    function draw() {
        let number = toggle()
        image(images.bgInitialScreen, 0, 0, width, height)
        image(images.imgPlayer[number], (width - 80) /2, height / 1.8, 80, 110)
        image(images.imgFemale[number], (width - 80) / 2.5, height / 1.8, 80, 110)
        image(images.imgSoldier[number], (width - 80) / 1.65, height / 1.8, 80, 110)
        _text()
        _choose('draw')        
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
        text('Escolha um dos personagens clicando nele:', width / 2, height / 1.9)
        textFont('Georgia')
    }

    function _button() {
        button = createButton('Iniciar a aventura')
        button.addClass('botao-tela-inicial')
        button.position(width / 7 * 2.4, height / 1.2)
        button.center('horizontal')
        button.size(400)
    }

    function _choose(clickOrDraw) {

        let bx = ((width - 80) /2)
        let by = (height / 1.78)
        let bSizeX = 80
        let bSizeY = 110

        if (clickOrDraw === 'draw') {drawChoose()}
        else {clickChoose()}

        function clickChoose() {
            if (
                (mouseX > (((width - 80) / 2.5))) &&
                (mouseX < (((width - 80) / 2.5) + bSizeX)) &&
                (mouseY > (by)) &&
                (mouseY < (by + bSizeY))
            ) {
                player = 1
            }

            if (
                (mouseX > (((width - 80) / 2))) &&
                (mouseX < (((width - 80) / 2) + bSizeX)) &&
                (mouseY > (by)) &&
                (mouseY < (by + bSizeY))
            ) {
                player = 2
            }

            if (
                (mouseX > (((width - 80) / 1.65))) &&
                (mouseX < (((width - 80) / 1.65) + bSizeX)) &&
                (mouseY > (by)) &&
                (mouseY < (by + bSizeY))
            ) {
                player = 3
            }
        }
    
        function drawChoose() {

            if (player === 1) { bx = ((width - 80) /2.5) } 
            if (player === 2) { bx = ((width - 80) /2) } 
            if (player === 3) { bx = ((width - 80) /1.65) }
            
            noFill()
            strokeWeight(3)
            stroke('red')
            rect(bx, by, bSizeX, bSizeY)
        }
    
    }

    return {
        setup,
        draw,
    }
}

function gameScreen() {

}
