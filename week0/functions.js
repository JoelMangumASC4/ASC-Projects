




//-------------------------------------------------------------------------------Random Numbers------------------------------------------------------------
/*

function roll(n) {
    return Math.floor(Math.random() * n);
}

*/


//--------------------------------------------------------------------------------toJadenCase--------------------------------------------------------------
 //!toUppers all first letters of a word in a sentence!
 /*

String.prototype.toJadenCase = function () {//my code
  //...
  var phrase = '';
  var str = this.split(' ');//Userinput is loged as *****this*******
  for (var i = 0; i < str.length; i++) {
    var word = str[i];
    word = word.split('');
    phrase+=word[0].toUpperCase();
    for (var j = 1; j < word.length; j++) {
      phrase+=word[j].toLowerCase();
    }
    phrase +=  ' ';
  }

  return phrase;
};

*/

