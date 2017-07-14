var prompt = require('prompt-sync')(/*No Parameter*/);

var playagain='y';
var mashArray = ['Greenlands', 'Dreamland', 'Castle', 'Pikmin Planet'];
var firstQuestion = [1, 2, 3, 4];
var secondQuestion = ['Kirby', 'Peach', "Bowser", "Bayonetta"];

function roll(n) {
    var roll = Math.floor(Math.random() * n);
    return roll;
}

function action() {
    console.log(secondQuestion);
    var target = prompt("Who will you choose to fight?");
    secondQuestion.push(target);


    var strikeAmount = prompt("How many times will you strike?")
    firstQuestion.push(strikeAmount);
}

function displayAnswers() {
    var stage = mashArray[roll(mashArray.length)];
    var hits = firstQuestion[roll(firstQuestion.length)];
    var enemy = secondQuestion[roll(secondQuestion.length)];



    console.log("You fought " + enemy + " in the " + stage + " you hit them " + hits + " times");

    mashArray.pop(stage);
    firstQuestion.pop(hits);
    secondQuestion.pop(enemy);
}

while (playagain=='y'){
    while ((mashArray.length) > 0) {

        action();
        displayAnswers();




    }
     playagain = prompt('wana fight again.(y/n)');
}

















