function speakSomething(what = "Default speech", howMany = 10) {
  for (var i = 0; i < howMany; i += 1) {
    console.log(what + " (" + i + ")");
  }
}

function speak({what = "default checkers", howMany = 5} = {}){
  for (let i = 0; i < howMany; i++){
    console.log(what + " (" + i + ")");
  }
}

function randomizer(limit) {
  randomNum =  Math.floor(Math.random() * limit) + 1
  let myNum = randomNum
  console.log("Local mynum: ", myNum)
  console.log("global Mynum: ", global.myNum)
}

function randomGlobal(limit) {
  randomNum =  Math.floor(Math.random() * limit) + 1
  myNum = randomNum
  console.log("Local mynum: ", myNum)
  console.log("global Mynum: ", global.myNum)
}


speakSomething("Good morning", 5);
speakSomething("Good morning");
speakSomething();

function addingMachine() {
  // initialize the total we'll be returning
  var total = 0;

  for (var i = 0; i < arguments.length; i += 1) {
    // grab the next number
    var number = arguments[i];

    // check if the argument is a number.
    // if so, add it to the running total
    if (typeof number === "number") {
      total += number;
    }
  }

  // done - return the total
  return total;
}

addingMachine(1, 2, 3);
addingMachine(1, 2, 3, 4, 5, 6, 7, 8, 9, 1204910249014);

// More info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function