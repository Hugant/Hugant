
window.onload = function() {//??????
    var timer = setTimeout(function() {
        var opacity = 1;
        var interval = setInterval(function() {
            opacity -= 0.023;
            document.getElementById("upper_wallpaper").style.opacity = opacity + "";
            if (opacity <= 0) {
                clearInterval(interval);
            }
        }, 100);

    }, 1000);

}
