var a = 0;
var turn = true;
setInterval(changeimg, 100);

function changeimg() {
    $("#changeimg2").css("opacity", 1 - a);
    $("#changeimg1").css("opacity", a);
    if (turn)
        a = a + 0.1;
    else
        a = a - 0.1;
    if (a >= 2.5)
        turn = false;
    if (a <= -1.5)
        turn = true;
};