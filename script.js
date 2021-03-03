var pressed = 0;

function button() {
    if (pressed <= 1) {
        document.getElementById("roundedButton").style.color = "green";
        pressed++;
    }
    if (pressed >= 2) {
        document.getElementById("roundedButton").style.color = "blue";
        pressed = 0;
    }
}