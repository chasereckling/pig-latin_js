var pigLatin = function(word) {
  if (vowelFinder(word)) {
    return isVowel(word);
  } else {
    return "something";
  }
};

var vowelFinder = function(word) {
  var vowels = ["a", "e", "i", "o", "u"];
  var firstLetter = word[0];

  for (var i in vowels) {
    for (var j in firstLetter) {
        if (vowels[i] == firstLetter[j]) {
          return true;
      }
    }
  }
};

var vowel = function(letter) {
  if (letter === "a" || letter === "e" || letter === "o" || letter === "i" || letter === "u") {
    return true;
  }
};


var isVowel = function(word) {
  return(word+"ay");
};


var isConsonant = function(word) {
  var consonantMove = word.split("");
  var consonantWord = [];

  if word.includes('qu') {
    new_array = word.split("")
    for (var index = 0; index < new_array.length; index += 1) {
    new_array[index] = "q" 


    }

  }

  while (! vowel(consonantMove[0])) {
    var letter = consonantMove.shift()
    consonantMove.push(letter)
    var answer = consonantMove.join("")+'ay';
  }
  return answer;
};
