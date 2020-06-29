function LoadImages() {
    const bgInitialScreen = loadImage('images/scene/backgroundForest.png')
    
    let imgPlayer = [], imgFemale = [], imgSoldier = []
    for (let i = 0; i < 2; i++) {
        imgPlayer[i] = loadImage(`images/character/player_walk${i + 1}.png`)
        imgFemale[i] = loadImage(`images/character/female_walk${i + 1}.png`)
        imgSoldier[i] = loadImage(`images/character/soldier_walk${i + 1}.png`)
    }

    return {
        bgInitialScreen,
        imgPlayer,
        imgFemale,
        imgSoldier
    }
}

function LoadSounds() {

}

function LoadMusics() {
    const musicInitialScreen = loadSound('musics/trilha_jogo.mp3')

    return {
        musicInitialScreen
    }
}