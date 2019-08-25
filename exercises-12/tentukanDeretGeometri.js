// Diberikan sebuah function tentukanDeretGeometri(arr) yang menerima satu parameter berupa array yang terdiri dari angka. Function tersebut akan mengembalikan true jika array dari parameter tersebut merupakan deret geometri. Deret geometri adalah sebuah deret dimana perbedaan setiap angka di deret tersebut konsisten secara perkalian. Contoh, [1, 3, 9, 27, 81] adalah deret aritmatika dengan pertambahan nilai sebesar pengalian 3, dan [1, 3, 9, 27, 48] bukanlah deret aritmatika karena tidak perbedaan selisih antar angka yang tidak konsisten secara perkalian (27 * 3 bukanlah 48!).


function tentukanDeretGeometri(arr) {
    var hasilBagi = arr[1] / arr[0]; //buat variabel hasilBagi
    var hasil = true; //buat nama var hasil
    for (var i = 0; i < arr.length - 1; i++) { //length dari bilangan deret di kurangin 1(satu), karena kita akan mengembalikkan nilai;
        var bagi = arr[i + 1] / arr[i]; //rumus bagi antara arr[i+1] dan arr[i]

        if (bagi !== hasilBagi) { //jika bagi tidak sama dengan hasilBagi, maka keluar true.
            hasil = false;
        }
    }
    return hasil;
}






// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false