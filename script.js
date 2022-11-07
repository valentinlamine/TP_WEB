function random() {
    var x = Math.floor((Math.random() * 3) + 1);
    if (x == 1) {
        window.location.href = "overworld/random_1.html";
    } else if (x == 2) {
        window.location.href = "overworld/random_2.html";
    } else if (x == 3) {
        window.location.href = "overworld/random_3.html";
    }
}