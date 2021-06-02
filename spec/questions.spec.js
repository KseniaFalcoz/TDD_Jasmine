describe('Les chaines de caractères : ', function () {   //on décrit la fonctionnalité
// "it" indique le comportement attendu
    it('Donner la taille d\'une chaine de caractères', function () {
      // on crée un exemple
        var result = tailleString('Ce texte à une certaine taille');
        // on donne le reésultat attendu
        expect(result).toEqual(30);
    });

// 2
  it('Remplacer le premier e d\'une chaine par un espace', function () {
    var result = replaceString('Ce texte a une certaine taille');
    expect(result).toEqual('C  texte a une certaine taille');
  });

// 3
  it('Concatener deux chaines de caractères', function () {
    var result = concatString('abcdef', '12345');
    expect(result).toEqual('abcdef12345');
    });

// 4
  it('Afficher le cinquième caractère d\'une chaine', function () {
    var result = charAtString5('Ce texte a une certaine taille');
    expect(result).toEqual('x');
  });

// 5
  it('Afficher les 9 premiers caractères d\'une chaîne de caractère', function () {
    var result = show9characters('Ce texte a une certaine taille');
    expect(result).toEqual('Ce texte ');
  });
  
// 6
  it('Mettre en majuscule la chaine', function () {
    var result = upperCaseString('abcdef');
    expect(result).toEqual('ABCDEF');
  });

// 7
  it('Mettre en minuscule la chaine', function () {
    var result = lowerCaseString('ABCDEF');
    expect(result).toEqual('abcdef');
  });

// 8
  it('Supprimer les espaces avant et après la chaine', function () {
    var result = deleteSpace(' abcdef ');
    expect(result).toEqual('abcdef');
  });

// 9
  it('Afficher true si le parametre d\'entrée de la fonction est de type string', function () {
    var result = typeString('Ce texte a une certaine taille');
    expect(result).toEqual(true);  // .toBeTrue();
  });

// 10
  it('Afficher l\'extension du fichier', function () {
    var result = extension('001.jpg');
    expect(result).toEqual('jpg');
  });

// 11
  it('Compter le nombre d\'espace dans la chaine', function () {
    var result = numberSpace('Ce texte a une certaine taille');
    expect(result).toEqual(5);
  });

// 12
  it('Inverser une chaine de caractères', function () {
    var result = reverseString('12345678');
    expect(result).toEqual('87654321');
  });

});
