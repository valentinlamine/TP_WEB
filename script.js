function random() {
    var x = Math.floor((Math.random() * 3) + 1);
    if (x == 1) {
        window.location.href = "overworld/desert/index.html";
    } else if (x == 2) {
        window.location.href = "overworld/plaine/index.html";
    } else if (x == 3) {
        window.location.href = "overworld/ile/index.html";
    }
}