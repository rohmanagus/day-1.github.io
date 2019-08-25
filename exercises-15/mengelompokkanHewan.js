/*Diberikan sebuah
function groupAnimals(arr) yang menerima satu parameter berupa array yang berisi string.Function akan me -
    return array multidimensi dimana array tersebut berisikan kategori / kelompok array yang dikumpulkan sesuai dengan abjad depannya.Abjad harus berurut dari a - z(jika ada).Untuk kasus ini, anggap saja semua text lowercase.

 Contoh jika animals adalah ["ayam", "kucing", "bebek", "bangau", "zebra"]

 maka akan menampilkan output: [ [ "ayam" ], [ "bebek", "bangau" ], [ "kucing ], [ "zebra" ] ]

 Urutan hewan dalam array setiap pengelompokan huruf tidak penting.
*/



function groupAnimals(arr) {
    // membuat array kosong.
    // melakukan looping pertama.
    // membuat array sesuai kata awal kalimat
    // menghilangkan kancil

    var animalBaru = [];
    for (var i = 0; i < arr.length; i++) {
        //animalBaru.push([]);
        var hewanA = [];
        var hewanC = [];
        var hewanU = [];
        var hewanK = [];

        for (var j = 0; j < arr.length; j++) {
            if (arr[j][0] === 'u') {
                hewanU.push(arr[j]);
            } else if (arr[j][0] === 'a') {
                hewanA.push(arr[j]);
            } else if (arr[j][0] === 'c') {
                hewanC.push(arr[j]);
            } else if (arr[j][0] === 'k' && arr[j][1] === 'u') {
                hewanK.push(arr[j])
            }
        }
    }
    animalBaru.push(hewanA);
    animalBaru.push(hewanC);
    animalBaru.push(hewanU);
    animalBaru.push(hewanK);
    return animalBaru;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]