var selectElementsStartingWithA = function (array) {
  function startingWithA(word) {
    return word.charAt(0) === 'a';
  };

  return array.filter(startingWithA);
};

var selectElementsStartingWithVowel = function (array) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  function startWithVowel(word) {
    return vowels.indexOf(word.charAt(0)) !== -1;
  }

  return array.filter(startWithVowel);
};

var removeNullElements = function (array) {
  function removeNull(word) {
    return word !== null;
  };

  return array.filter(removeNull);
};

var removeNullAndFalseElements = function (array) {
  function removeNullFalse(word) {
    return word !== null && word !== false;
  };

  return array.filter(removeNullFalse);
};

var reverseWordsInArray = function (array) {
  function reverseLetter(word) {
    return word.split('').reverse().join('');
  };

  return array.map(reverseLetter);
};

var everyPossiblePair = function (array) {
  var result = [];
  var duplicate = array.slice().reverse();
  for (var student1 of array) {
    duplicate.pop();
    for (var student2 of duplicate) {
      result.push([student1, student2].sort());
    }
  };

  return result.sort();
};

var allElementsExceptFirstThree = function (array) {
  return array.slice(3);
};

var addElementToBeginning = function (array, element) {
  array.unshift(element);
  return array;
};

var sortByLastLetter = function (array) {
  array.sort(function (word1, word2) {
    return word1.slice(-1) > word2.slice(-1);
  });

  return array;
};

var getFirstHalf = function (string) {
  var half = (string.length + 1) / 2;
  return string.slice(0, half);
};

var makeNegative = function (number) {
  return -Math.abs(number);
};

var numberOfPalindromes = function (array) {
  var result = [];
  array.forEach(function (word) {
    if (word === word.split('').reverse().join(''))
    result.push(word);
  });

  return result.length;
};

var shortestWord = function (array) {
  array.sort(function (word1, word2) {
    return word1.length > word2.length;
  });

  return array.shift();
};

var longestWord = function (array) {
  array.sort(function (word1, word2) {
    return word1.length < word2.length;
  });

  return array.shift();
};

var sumNumbers = function (array) {
  return array.reduce(function (a, b) {
    return a + b;
  });
};

var repeatElements = function (array) {
  var repeat = array.slice(0);
  return array.concat(repeat);
};

var stringToNumber = function (string) {
  return Math.abs(string);
};

var calculateAverage = function (array) {
  var sum = array.reduce(function (a, b) {
    return a + b;
  });

  return (sum / array.length);
};

var getElementsUntilGreaterThanFive = function (array) {
  var biggerThanFive = function (num) {
    return num > 5;
  };

  var i = array.findIndex(biggerThanFive);
  return array.slice(0, i);
};

var convertArrayToObject = function (array) {
  var object = {};
  for (var i = 0; i < array.length; i += 2) {
    object[array[i]] = array[i + 1];
  };

  return object;
};

var getAllLetters = function (array) {
  var result = [];
  array.forEach(function (word) {
    result.push(word.split(''));
  });

  var result = [].concat.apply([], result).sort();
  var result = result.filter(function (element, i, array) {
    return array.indexOf(element) == i;
  });

  return result;
};

var swapKeysAndValues = function (object) {
  var newObject = {};
  var newK = Object.values(object);
  var newV = Object.keys(object);
  for (var i = 0; i < newK.length; i++) {
    newObject[newK[i]] = newV[i];
  };

  return newObject;
};

var sumKeysAndValues = function (object) {
  var array = Object.values(object).concat(Object.keys(object));
  var result = [];
  array.forEach(function (num) {
    return result.push(parseInt(num));
  });

  var sum = result.reduce(function (a, b) {
      return a + b;
    });

  return sum;
};

var removeCapitals = function (string) {
  var letter = string.split('');
  var result = [];
  for (i = 0; i < letter.length; i++) {
    if (letter[i] == letter[i].toLowerCase()) {
      result.push(letter[i]);
    };
  };

  return result.join('');
};

var roundUp = function (number) {
  return Math.ceil(number);
};

var formatDateNicely = function (date) {
  var day = date.getDate();
  if (day < 10) {
    var day = '0' + day;
  };

  var month = date.getMonth() + 1;
  if (month < 10) {
    var month = '0' + month;
  };

  var year = date.getFullYear();
  var final = day + '/' + month + '/' + year;
  return final;
};

var getDomainName = function (string) {
  var start = string.indexOf('@');
  return string.slice(start + 1, string.length - 4);
};

var checkForSpecialCharacters = function (string) {
  return escape(string).toString() !== string;
};

var squareRoot = function (number) {
  return Math.sqrt(number);
};

var factorial = function (number) {
  for (var i = number - 1; i > 0; i--) {
    sum = (number *= i);
  };

  return sum;
};

var findAnagrams = function (string) {
  var letters = string.split('');
  var result = [];
  letters.forEach(function (letter) {
    remainder = letters.filter(function (element) {
      return element != letter;
    });

    result.push(letter + remainder.join(''), letter + (remainder.reverse()).join(''));
  });

  return result.sort();
};

var convertToCelsius = function (number) {
  var result = (number - 32) * 0.5556;
  return Math.round(result);
};

var letterPosition = function (array) {
  function alphabetIndex(letter) {
    var alphabets = '_abcdefghijklmnopqrstuvwxyz';
    return alphabets.indexOf(letter.toLowerCase());
  }
  return array.map(function(element) {
    return alphabetIndex(element);
  })
};
