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

    for (i = 0; i < word.length; i ++){
        var firstLetter = word.charAt(i);
        if (firstLetter === "a" || firstLetter === "e" || firstLetter === "i" || firstLetter === "o" || firstLetter === "u") {break;} {
          newWord = word + ay;
        }
      return newWord;
    }
  }

          //stop when vowel is reached
          //slice off preceeding cons and save in new variable
          //concat new variable to word
          //concat ay


          newWord = word + ay;
        }
      }
      return newWord;
    }




      } else {
        newWord = word.substring(i);
        finalWord = newWord + firstLetter;
      }
    }
};
