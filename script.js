function tryWord(word, base) {
  if (word === base) {
    return true;
  }
  return false;
}
// console.log(tryWord("hello", "hello"));

function lettersAtCorrectPosition(word, base) {
  let wellPlaced = [];

  let arrayBase = base.split("");
  let arrayWord = word.split("");

  for (let i = 0; i < arrayBase.length; i++) {
    if (arrayBase[i] === arrayWord[i]) {
      wellPlaced.push(arrayWord[i]);
    }
  }

  return wellPlaced;
}

// console.log(lettersAtCorrectPosition("help", "hello"));

function lettersAtWrongPosition(word, base) {
  let missplaced = [];

  let arrayBase = base.split("");
  let arrayWord = word.split("");

  for (let i = 0; i < arrayBase.length; i++) {
    if (arrayBase[i] === arrayWord[i]) {
      missplaced.push(arrayWord[i]);
    }
  }
  return missplaced;
}

// console.log(lettersAtWrongPosition("hello", "helu"));

function lettersNotInBase(word, base) {
  let notInWord = [];

  for (const char of word) {
    if (!base.includes(char)) {
      notInWord.push(char);
    }
  }
  return notInWord;
}

// console.log(lettersNotInBase("help me", "hello"));

function gamePlay(word, base) {
  base = "champagne";
  word = document.getElementById("word").value;
  let result = {
    resultWord : tryWord(word,base),
    wellPlaced:lettersAtCorrectPosition(word,base),
    missplaced : lettersAtWrongPosition(word,base),
    notInWord : lettersNotInBase(word,base)
}
    
  document.getElementById("word").value = "";
  document.getElementById("try").innerHTML = word;
  document.getElementById("well").innerHTML =
    "Bien placé: " + result.wellPlaced.join(", ");
  document.getElementById("miss").innerHTML =
    "Mal placé: " + result.missplaced.join(", ");
  document.getElementById("not").innerHTML =
    "Pas dans le mot: " + result.notInWord.join(", ");
  if (result.wellPlaced.length === base.length) {
    document.getElementById("win").innerHTML = "Vous avez gagné";

    //     return `
    // ${tryWord(word,base)}
    // ${lettersAtCorrectPosition(word,base)}
    // ${lettersAtWrongPosition(word,base)}
    // ${lettersNotInBase(word,base)}
    // `
    // }
  }
}

gamePlay();

