function pasanganTerbesar(num) {
    var angka;
    var perbandingan = 0;
    var str = String(num);

    for (var i = 0; i < str.length; i++) {
        angka = Number(str[i] + str[i + 1]); //angka sama dengan nilai Number(str[i]+str[i+1])

        if (angka > perbandingan) { //jika nilai angka kurang dari nilai banding(perbandingan)
            perbandingan = angka; //maka nilai banding sama dengan nilai angka
        }
    }
    return perbandingan; // kembalikan nilai perbandingan.
}

console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99