//balikString

var x ='';
var kata ="hello world!";
function balikString(kata){
    for(i = kata.length -1; i >=0; i--){
    x = x + kata.length[i];
    }
    return x;
}

console.log(balikString(kata));