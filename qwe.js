// Написать программу , которая подсчитывает значения от 5 до 500, чтобы она писала , какое значение четное или нечетное.
var wallaper = 500;
var b = "";

while (wallaper > 5) {
    b = b + wallaper + " четное <br> ";
    
    if (wallaper>5) {
        b = b + (wallaper-1)
            + " нечетное <br> ";
    }

    else {
        b = b + " все <br> ";
    }

   wallaper = wallaper - 2;

}






document.write(b) ;