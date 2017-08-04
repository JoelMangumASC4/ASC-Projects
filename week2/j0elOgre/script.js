$(document).ready(setup);
var hp = 100;
var gold = 0;
var slain = 0;

function setup() {
    $("body").append("<h1>Welcome to 0gre fighter<h1>");
    $("body").append("<p>Ogres are attacking your village! When you slay one, they drop 10 gold. The more gold you carry, though, the harder it is to defeat an ogre.</p>");
    $("body").append("<h2>STATS<h2>");
    $("body").append("<p class='stats'></p>");
    $("body").append("<button onclick= attack()>Attack the Ogre</button>");
    $("body").append("<div></>");


}

function stats() {
    $(".stats").text("HP:" + hp + " // Gold:" + gold + " // Slain:" + slain);
}

function attack() {
    if (hp > 0) {
        if (Math.random() * 100 > gold) {
            gold += 10;
            slain += 1;
            $(".orges").prepend("<p style='color:green'>You Won! + 10 gold.</p>");
        } else {
            hp -= 1;
            gold -= 1;
            $(".orges").prepend("<p style='color:red'>You lost! - 1 gold.</p>");

        }
    }else{ $(".orges").prepend("<h1>You DIED</h1>");
}
    stats();
}




    //stats header
    //stats
    //attack button
//display ogre

//Function ogre press(+10 gold if slain, if u are killed u lose 1)
//regardless pic is added