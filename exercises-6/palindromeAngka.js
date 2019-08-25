/*

Diberikan sebuah function angkaPalindrome(angka) yang menerima satu parameter angka. Function akan me-return angka selanjutnya yang mengandung nilai angka palindrome. Contoh, jika angka adalah 27, maka function akan me-return nilai 33 karena angka 33 adalah angka palindrom.

*/

function angkaPalindrome(num) {
    // you can only write your code here!

    var nomor = num.toString();

    var nomor1 = num.toString().lastIndexOf(num.toString());

    var palindrome = nomor[0] + nomor1[0];

    var counter;

    do {
        num++;

        return num;

    } while (nomor[0] === nomor1[0])

}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001