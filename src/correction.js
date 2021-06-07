/*
 * Exercice sur les chaines de caractères.
 * Trouvez la façon de faire la plus optimal.
 * Il peut y avoir plusieur façon de faire.
 */

//Donner la taille de la chaine de caractères
function tailleString(texte) {

    return texte.length;
}
//Remplacer le premier e de la chaine par un espace
var replaceString = function (texte) {
  // var result = texte.replace('e', ' ');
    return texte.replace('e', ' ');
}
//Concatener les deux chaines de caractères

//Méthode Louiza : 
//  var concatString = function(texte){
//   return texte.concat();

// Correction :
var concatString = function(texte1 , texte2){
 var result = texte1 + ' ' + texte2;
  return result; 
}
//Afficher le cinquième caractère de la chaine
//Méthode Sandy : 

// show = function(texte){
//   return texte[4];
// }


//correction : 
var showChar = function(texte){
  var result = texte.charAt(4);
  return result;
}
//Afficher les 9 premiers caractères d'une chaîne
//Méthode Louiza: 
// var showChar9 = function(texte){
//   var result = texte.substr(0,9);
//   return result;
// }
//correction : 
var showChar9 = function(texte){
  var result = texte.substring(0, 9);
  return result;
}

//Mettre en majuscule la chaine
var majString = function(texte){
  return texte.toUpperCase();
}
//Mettre en minuscule la chaine
var minString = function(texte){
  var result = texte.toLowerCase();
  return result;
}
//Supprimer les espaces avant et après la chaine
var deleteSpace = function(texte){
  return texte.trim();
}
//Afficher true si le parametre d\'entrée de la fonction est de type string
let getBoolean = function(texte){
  if(typeof texte === 'string'){
    return true;
  }
}

//Méthode Louiza
// var getBoolean = function(texte){
//   return texte.toString(true);
// }
let typeOfExtension = function(string){
  return string.split('.').pop();
}
//Compter le nombre d\'espace dans la chaine
let numberSpace = function(string){
  let result = string.split(' ').length -1;
  return result;
}
//Inverser une chaine de caractères
let reverseString = function(string){
  let result = string.split('').reverse('').join('');
  return result;
}