var ay = "ay"
var pigLatin = function(word) {
  var firstLetter = word.charAt(0);
    if (firstLetter === "a" || firstLetter === "e" || firstLetter === "i" || firstLetter === "o" || firstLetter === "u"){
    return word + ay;
  } else {
    word = word.substring(1);
    word = word + firstLetter;
    var newWord = word.concat(ay);
    return newWord;
  }
};
var pigLoop = function(word) {
  var word = "steal";
  var ay = "ay";
  var newWord;
  var firstLetter = word.charAt(0);
    for (i = 0; i < word.length; i ++){
        if (firstLetter === "a" || firstLetter === "e" || firstLetter === "i" || firstLetter === "o" || firstLetter === "u") {
          newWord = word + ay;
          return newWord;
      } else {
        word = word.substring(1);
        finalWord = word + firstLetter;
        return finalWord
        firstLetter = word.charAt(0);
      }
    };
  };
