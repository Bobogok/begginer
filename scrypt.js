var digit = 500; //присваеваем переменной digit значение 500
var empty = ""; // присваеваем переменной empty значение ''

while (digit > 0) { //начало цикла с условием что digit будет больше 0

    if (digit % 2) { //условие if, то что digit остаток от деления будет == 2
        empty = empty + digit + " нечетное <br>";
    }

    else { //условие else выводит значеие, если у if было False
        empty = empty + digit + " четное <br>";
    }

    digit -= 1;
}
document.write(empty);
