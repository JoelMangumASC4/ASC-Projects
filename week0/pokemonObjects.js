//NAME, TYPE, HP, DEF, ATK, LEGEND
var prompt = require('prompt-sync')();
function roll(n) {
    var side = Math.floor(Math.random() * n);
    return side;
}



function POKEMONMAKER(NAME, TYPE, HP, DEF, ATK, LEGEND) {
    this.NAME = NAME;
    this.TYPE = TYPE;
    this.HP = HP;
    this.DEF = DEF;
    this.ATK = ATK;
    this.LEGEND = LEGEND;
}
var Charizard = new POKEMONMAKER('Charizard', 'Fire', 200, 120, 150, false);
var Umbra = new POKEMONMAKER('Umbra', 'Dark', 120, 90, 100, false);
var Torchic = new POKEMONMAKER('Torchic', 'Fire', 50, 15, 60, false);
var Swampert = new POKEMONMAKER('Swampert', 'Water', 200, 150, 120, false);
var Mew = new POKEMONMAKER('Mew', 'Psychic', 100, 90, 90, true);
var MewTwo = new POKEMONMAKER('MewTwo', 'Psychic', 200, 200, 200, true);

var team = [Umbra, Swampert, Torchic, MewTwo, Mew, Charizard];


function printRoster(team) {
    for (var i = 0; i < team.length; i++) {
        console.log(team[i]);
    }
}

function pokemonAttacked(team) {
    for (var i = 0; i < team.length; i++) {
        team[i].HP -= 10;
    }
    printRoster(team);
}

function eightBall(team) {//Create a new function that takes user input to subtract HP from a random Pokemon in your roster
    var damage = prompt('How much damage do you want to deal?');
    var hand0fD3aTh = roll(team.length);
    team[hand0fD3aTh].HP -= damage;
    console.log('You dealt ' + damage + 'damage to' + team[hand0fD3aTh].NAME);
}


function p0ck3tM0nsterMak3r(team) {
    //Create a new function that takes user input to create a new Pokemon object in your array
    var n3wNAME = prompt('New Name');
    var n3wTYPE = prompt('New Type');
    var n3wHP = prompt('New Hp');
    var n3wDEF = prompt('New Def');
    var n3wATK = prompt('New Atk');
    var n3wLEGEND = prompt('Is it legendary?true or false');
    var n3wPK = new POKEMONMAKER[n3wNAME, n3wTYPE, n3wHP, n3wDEF, n3wATK, n3wLEGEND];
    team.push(n3wPK);
    console.log(team[team.length]);
}

function D3aThN0t3(team) {//Create a new function that removes a random Pokemon from your array of objects
    var bingo = roll(team.length);
    console.log('All traces of ' + team[bingo].NAME + ' have been erased');
    team.pop(team[bingo]);
}
function pkBattle(team) {
    var pk1 = team[roll(team.length)];
    var pk2 = team[roll(team.length)];
    console.log(pk1.NAME + " vs. " + pk2.NAME);
    /*Modify the pokemonBattle() function so that it compares the stats of the 2 randomly 
    selected Pokemon from #4. It should return and log whichever Pokemon has the best stats as the winner. */
    var pk1P01ntS=0;
    var pk2P01ntS=0;
    
    if (pk1.LEGEND==true) {
        pk1P01ntS++;
        console.log(pk1.NAME+' is a Legendary and starts with a point');
    }
    if (pk2.LEGEND==true) {
        pk2P01ntS++;
         console.log(pk2.NAME+' is a Legendary and starts with a point');
    }
    //Health Battle
    if (pk1.HP > pk2.HP) {
        console.log(pk1.NAME + " won the Health Stat battle");
        pk1P01ntS++;
    } else if (pk2.HP > pk1.HP) {
        console.log(pk2.NAME + " won the Health Stat battle");
        pk2P01ntS++;
    } else {
        console.log("Amazing they tied!!!");
    }
  //Defence Battle
if (pk1.DEF > pk2.DEF) {
        console.log(pk1.NAME + " won the Defence Stat battle");
        pk1P01ntS++;
    } else if (pk2.DEF > pk1.DEF) {
        console.log(pk2.NAME + " won the Defence Stat battle");
        pk2P01ntS++;
    } else {
        console.log("Amazing they tied!!!");
 }
 //Attack Battle
if (pk1.ATK > pk2.ATK) {
        console.log(pk1.NAME + " won the Attack Stat battle");
        pk1P01ntS++;
    } else if (pk2.ATK > pk1.ATK) {
        console.log(pk2.NAME + " won the Attack Stat battle");
        pk2P01ntS++;
    } else {
        console.log("Amazing they tied!!!");
      }
//Final Count
console.log(pk1P01ntS+' '+pk2P01ntS);
if (pk1P01ntS > pk2P01ntS) {
        console.log(pk1.NAME + " won the fight");
    } else if (pk1P01ntS < pk2P01ntS) {
        console.log(pk2.NAME + "won the fight");
    } if(pk1P01ntS == pk2P01ntS) {
        console.log("Amazing they tied!!!");
    } /**/
}





//printRoster(team);
//eightBall(team);
//p0ck3tM0nsterMak3r(team);
 pkBattle(team);




