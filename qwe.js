// Написать программу , которая подсчитывает значения от 5 до 500, чтобы она писала , какое значение четное или нечетное.
var wallaper = 500;
var b = "";

while (wallaper > 5) {

    if (wallaper % 2) {
        b = b + wallaper + " нечетное <br>";
    }

    else {
        b = b + wallaper + " четное <br>";
    }

   wallaper = wallaper - 1;

}
document.write(b);
