var prompt = require('prompt-sync')(/*No Parameter*/);
// 
// get input from the user. 
// 
//var n = prompt('How many more times? ');

var currentMoney = 1000;
var userInv = [];


while (currentMoney > 99) {
    console.log("You have " + currentMoney + " Ruples.");
    console.log("\n Sword=500Ruples,Food=100Ruples");
    var choice = prompt('What do you want to buy?')();

    if (choice == "sword" || choice == "Sword") {
        if (currentMoney >= 500) {
            currentMoney -= 500;
            userInv.push('sword');
        } else {
            console.log("not enough money you zygote");
        }

    } else if (choice == "food" || choice == "Food" && currentMoney >= 100) {
        currentMoney -= 100;
        if (currentMoney >= 100) {
            currentMoney -= 100;
            userInv.push('food');
        } else {
            console.log("not enough money you zygote. I hear air is edible");
        }

    } else {
console.log("Noooooob");

    }
}
console.log("The quest for the Sauce Begins");
var seeInv =prompt("Want to see your inv(y/n)");
if (prompt=="y") {
    console.log(userInv);
}


























