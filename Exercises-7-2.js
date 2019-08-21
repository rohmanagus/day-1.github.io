var row = 5;
var row2 = 0;
while (row2 < row) {
    var asteriks = '*';
    var s = 1;
    while (s < row) {
        asteriks = asteriks + '*';
        s++;
    }
    console.log(asteriks);
    row2++;
}