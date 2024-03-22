function swapWidgets() {
    var ww = document.getElementById("ww_694d20a26d11d");
    var player = document.getElementById("player");
    var temp = ww;
    ww = player;
    player = temp;
    temp.style.display = "none";
    player.style.display = "block";
}
setInterval(swapWidgets, 3600000); // вызов функции каждые 1 час