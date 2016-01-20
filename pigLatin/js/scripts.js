var pigLatin = function(word) {
  var firstLetter = word.charAt(0);
  word = word.substring(1);
  word = word + firstLetter;
  var newWord = word.concat("ay");
  return newWord;
};
