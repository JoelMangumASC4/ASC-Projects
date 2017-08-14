//Set database object
var database = firebase.database().ref();

function updateDB(name) {
    console.log(name + " : " + score);
    var data = {
        NAME: name,
        SCORE: score
    }
    //Update database here

    database.push(data);
}
var done = false;
var play = true;
var losses = 0;
var score = 0;

function roll(id) {
    var choices = ["rock", "paper", "scissor"];

    if (play == true) {
        var cpu = choices[Math.floor(Math.random() * 3)];

        if (id == "rock" && cpu == "rock") { $('.results').append("<p>Rock vs. Rock</p><p>Tie</p>"); }
        if (id == "rock" && cpu == "paper") { $('.results').append("<p>Rock vs. Paper</p><p>You Lost</p>"); losses++; }
        if (id == "rock" && cpu == "scissor") { $('.results').append("<p>Rock vs. Scissor</p><p>You Won</p>"); score++; }

        if (id == "paper" && cpu == "rock") { $('.results').append("<p>Paper vs. Rock</p><p>You Won</p>"); score++; }
        if (id == "paper" && cpu == "paper") { $('.results').append("<p>Paper vs. Paper</p><p>Tie</p>"); }
        if (id == "paper" && cpu == "scissor") { $('.results').append("<p>Paper vs. Scissor</p><p>You Lost</p>"); losses++; }

        if (id == "scissor" && cpu == "rock") { $('.results').append("<p>Scissor vs. Rock</p><p>You Lost</p>"); losses++; }
        if (id == "scissor" && cpu == "paper") { $('.results').append("<p>Scissor vs. Paper</p><p>You Won</p>"); score++; }
        if (id == "scissor" && cpu == "scissor") { $('.results').append("<p>Scissor vs. Scissor</p><p>Tie</p>"); }

    }
    if (losses == 3 && done == false) {
        play = false;
        var name = window.prompt("Type Your Name", "Name");
        console.log(name);
        done = true;
        updateDB(name);
    }
    $(".allMessages").text(score);
}

database.on("child_added", function (rowData) {
    var row = rowData.val();
    var name = row.NAME;
    var score = row.SCORE;
    $(".textContainer").append(fullText);


})



//button executes this function
