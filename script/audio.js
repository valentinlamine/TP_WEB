function PlaySound() {
    var sound = document.getElementById('sound2');
    sound.volume = 0.25;
    if (sound.paused) {
        sound.play();
        if (sound.currentTime > 0) {
            alert("Pour revenir à l'acceuil cliquez sur le titre de la page");
        }
    }
    else {
        sound.pause();
    }
}

function PlaySoundStart() {
    var sound = document.getElementById('sound2');
    sound.volume = 0.25;
    if (sound.paused) {
        sound.play();
    }
    else {
        sound.pause();
    }
}