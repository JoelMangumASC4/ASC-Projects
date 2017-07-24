function roll(n) {
    var roll = Math.floor(Math.random() * n);
    return roll;
}
function POKEMONMAKER(NAME, TYPE, HP, DEF, ATK, LEGEND, moveset) {
    this.NAME = NAME;
    this.TYPE = TYPE;
    this.HP = HP;
    this.DEF = DEF;
    this.ATK = ATK;
    this.LEGEND = LEGEND;
    this.moveset = moveset;
}
var Charizard = new POKEMONMAKER('Charizard', 'Fire', 200, 120, 150, false, ['fly', 'fire blast', 'rock smash', 'slash']);
var Umbra = new POKEMONMAKER('Umbra', 'Dark', 120, 90, 100, false, ['Tackle', 'Feint Attack', 'Hyper Beam', 'Shadow Ball']);
var Torchic = new POKEMONMAKER('Torchic', 'Fire', 50, 15, 60, false, ['Peck', 'Fire Spin', 'Quick Attack', 'Flame Burst']);
var Swampert = new POKEMONMAKER('Swampert', 'Water', 200, 150, 120, false, ['Giga Impact', 'Stone Edge', 'Bulldoze', 'Rock Slide']);
var Mew = new POKEMONMAKER('Mew', 'Psychic', 100, 90, 90, true, ['Smack Down', 'Thunderbolt', 'Thunder', 'Earthquake']);
var MewTwo = new POKEMONMAKER('MewTwo', 'Psychic', 200, 200, 200, true, ['Solar Beam', 'Thunderbolt', 'Thunder', 'Earthquake']);

var team = [Umbra, Swampert, Torchic, MewTwo, Mew, Charizard];
var pk1 = team[roll(team.length)];
//console.log(pk1);

var pk2 = team[roll(team.length)];
var pk1Damage = 0;
var pk2Damage = 0;

function setup() {

    createCanvas(windowWidth, windowHeight);
    //  background(R(v:0-255), G(v:0-),B(v:0-))
    background('white');
    fill('red');
    rect(112, 602, 105, 105);
    fill('blue');
    rect(604, 153, 105, 105);
    //Pk1 bar 196y:127
    fill('grey');
    rect(428, 557, 300, 50);
    textSize(25);
    fill('black'); text(pk1.NAME, 452, 600);
    rect(428, 557 + 50, 300, 50);
    //Pk2 bar
    fill('grey');
    rect(196, 100, 300, 50);
    fill('black');
    text(pk2.NAME, 210, 130);
    rect(196, 100 + 50, 300, 50);

    // ---------------------------attack menu 
    fill(225);
    rect(780, -10, 800, 800);
    //attack boxes
    var boxX = 810;
    var boxY = 50;
    fill('white');
    for (var i = 0; i < 4; i++) {

        rect(boxX, boxY, 500, 100);
        boxY += 150;
    }
    rect(196, 150, 100, 0);


}


function mousePressed() {
    var damages = [10, 20, 30, 40]
    console.log('x:' + mouseX + 'y:' + mouseY);
    if (mouseX >= 800) {
        if (mouseX >= 812 && mouseX <= 1312) {
            if (mouseY >= 50 && mouseY <= 150) {
                fill('black');
                rect(196, 100 + 50, 300, 50);
                fill('green');//812y:50
                console.log(pk1.moveset[0]);

                pk2Damage += 10;
                  fill('black');
                rect(428, 557 + 50, 300, 50);
                pk1Damage += random(damages);
            }
            if (mouseY >= 199 && mouseY <= 300) {
                fill('black');
                rect(196, 100 + 50, 300, 50);
                fill('green');//812y:50
                pk2Damage += 20;
                  fill('black');
                rect(428, 557 + 50, 300, 50);
                pk1Damage += random(damages);

            }
            if (mouseY >= 350 && mouseY <= 450) {
                fill('black');
                rect(196, 100 + 50, 300, 50);
                fill('green');//812y:50
                pk2Damage += 30;
                  fill('black');
                rect(428, 557 + 50, 300, 50);
                pk1Damage += random(damages);

            }
            if (mouseY >= 500 && mouseY <= 600) {
                fill('black');
                rect(196, 100 + 50, 300, 50);
                fill('green');//812y:50
                pk2Damage += 40;
                fill('black');
                rect(428, 557 + 50, 300, 50);
                pk1Damage += random(damages);
            }



        }
    }
}
function draw() {
    text(pk1.moveset[0] + '     10', 838, 86);
    text(pk1.moveset[1] + '     20', 845, 233);
    text(pk1.moveset[2] + '     30', 879, 394);
    text(pk1.moveset[3] + '     40', 832, 532);


    fill('green');
    rect(428, (557 + 50), 300 - pk1Damage, 50);
    fill('green');
    rect(196, (100 + 50), 300 - pk2Damage, 50);
    if (pk1Damage>=300) {
        pk1Damage=300;
    }
    if (pk2Damage>=300) {
        pk2Damage=300;
    }
}

