console.log('COUNTER');
console.log('==============')
for (var nilai = 1; nilai <= 100; nilai++) {
    if (nilai % 2 == 0) {
        console.log(nilai + ' -Genap');
    } else if (nilai != 0) {
        console.log(nilai + '-Ganjil');
    }
}

console.log('CONTER 2')
for (var nilai2 = 1; nilai2 <= 100; nilai2++) {
    if (nilai2 % 3 == 0) {
        console.log(nilai2 + '-kelipatan 3')
    } else if (nilai2 != 0) {
        console.log(nilai2);
    }
}

console.log('CONTER 5')
for (var nilai3 = 1; nilai3 <= 100; nilai3++) {
    if (nilai3 % 6 == 0) {
        console.log(nilai3 + ' -kelipatan 6');
    } else if (nilai3 != 0) {
        console.log(nilai3);
    }
}

console.log('CONTER 9');
for (var nilai4 = 1; nilai4 <= 100; nilai4++) {
    if (nilai4 % 10 == 0) {
        console.log(nilai4 + ' -Kelipatan 10');
    } else if (nilai4 != 0) {
        console.log(nilai4);
    }
}