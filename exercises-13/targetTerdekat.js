function targetTerdekat(arr) { // fungsi targetTerdekat dengan argument arr
    var index1 = 0 // var index1 sama dengan 0
    var index2 = 0 // var index2 sama dengan 0
    var tampung = 0 // var tampung sama dengan 0
    var arrX = [] // var arrX sama dengan array kosong

    if (arr.indexOf('x') === -1) { // jika arr indexOf 'x' sama dengan -1
        return 0 // maka kembalikan nilai 0
    } else { // jika salah maka
        for (var i = 0; i < arr.length; i++) { // i sama dengan 0, i lebih kecil dari panjang argument arr, true, i ditambah satu
            if (arr[i] === 'x') { // jika arr index loop i sama dengan 'x'
                index1 = i // var index1 = i
                arrX.push(index1) // var array arrX push index1 or i
            } else if (arr[i] === 'o') { // arr index loop i sama dengan 'o'
                index2 = i // maka index2 sama dengan i
            }

            var hasil = [] // var hasil sama dengan array kosong
            for (var j = 0; j < arrX.length; j++) { // var j sama dengan 0, j lebih kecil dari panjang arrX, true, j ditambah satu
                tampung = Math.abs(index2 - arrX[j]) // var tampung sama dengan Math.abs index2 dikurang arrX loop j
                hasil.push(tampung) // var hasil push hasil tampung
                hasil.sort() // hasil di sort
            }
        }
        return hasil[0] // mengembalikan nilai index 0 dari hasil 
    }
}

console.log(targetTerdekat(['', '', 'o', '', '', 'x', '', 'x'])); // 3
console.log(targetTerdekat(['o', '', '', '', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', '', '', '', 'x', 'x', 'o', ''])); // 1
console.log(targetTerdekat(['', '', 'o', ''])); // 0
console.log(targetTerdekat(['', 'o', '', 'x', 'x', '', '', 'x'])); // 2