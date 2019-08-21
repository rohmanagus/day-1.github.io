function shoutOut() {
    return "hallo function";
}

var text = shoutOut;

console.log(shoutOut(text)) // Menampilkan "Halo Function!" di console