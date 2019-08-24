//Diberikan sebuah function palindrome(kata) yang menerima satu parameter. Function tersebut akan mengembalikan nilai true jika kata merupakan palindrome, dan false jika bukan. Kata palindrome adalah sebuah kata yang jika dibalik, tetap sama. Contoh, 'katak' dibalik tetaplah 'katak'.


function palindrome(kata) {
    // you can only write your code here!
    var tamp = '';
    for (var i = kata.length - 1; i >= 0; i--) { //var i sama dengan panjang.kata dikurang -1; maka i lebih besar dari sama dengan nol, var i kurangi 1.
        tamp += kata[i]; //tampung kata dari var i
    }

    if (tam === kata) { // jika tampung sama dengan kata maka hasil true, namun jika tidak maka false
        return true;
    } else {
        return false;
    }
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false