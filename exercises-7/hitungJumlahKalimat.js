function hitungJumlahKata(kalimat) {
    // you can only write your code here!
    var x = 1;
    for (var i = 0; i < kalimat.length; i++) { // variabel i sama dengan NOL, maka i kurang dari panjang kalimat, i di tambah 1
        if (kalimat[i] === " ") { //jika kalimat samadengan samadengan " ",
            x++; //maka nilai x tambah 1
        }
    }
    return x; //kambalikan nilai x



}

// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5