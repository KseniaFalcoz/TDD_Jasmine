/*
 * Exercice sur les chaines de caractères.
 * Trouvez la façon de faire la plus optimal.
 * Il peut y avoir plusieur façon de faire.
 */

function tailleString(string){  // let tailleString = function(string){
    return string.length;
}

// 2
let replaceString = function(string){ // function replaceString(string){ 
    return string.replace('e', ' ');
}

// 3
let concatString = function(string1, string2){
    return string1 + string2;
}

// 4
let charAtString5 = function(string){
    return string.charAt(5);  // return string[5];
}

// 5
let show9characters = function(string){
    return string.substring(0, 9);
}

// 6
let upperCaseString = function(string){
    return string.toUpperCase();
}

// 7
let lowerCaseString = function(string){
    return string.toLowerCase();
}

// 8
let deleteSpace = function(string){
    return string.trim();
}

// 9
let typeString = function(){
    if (typeof '' === 'string'){
        return true;
    }
}

// 10
let extension = function(string){
    return string.split('.').pop();
}

// 11
let numberSpace = function(string){
    return string.split(' ').length - 1;
}

// 12
let reverseString = function(string){
    return string.split('').reverse().join('');
}