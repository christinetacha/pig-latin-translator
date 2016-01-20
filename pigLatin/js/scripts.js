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
