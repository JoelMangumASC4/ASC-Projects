
function setup() {

    createCanvas(windowWidth, windowHeight);
    //  background(R(v:0-255), G(v:0-),B(v:0-))
    background('grey');
  
}
var score = 0;
var check = true;
var bing0 = ['Blue waves crash.', 'Spicy habanero ranch is spicy.', 'Boneless Pizza is the best.', 'All Star Code is an amazing idea!', 'Imagination goes hand in hand with creation.'];
var change=true;

if(change==true){
s = random(bing0);change=false;
}
var x = 0;

function draw() { directions = "Please Type The Sentence Below";
background('grey');
    textSize(20);
    fill('white');
    text(directions, 100, 50);
    
    console.log(random(bing0));
    text(s, 100, 150);
    var p = 'points: ';
    text(p + score, 100, 450);
 var letters= s.split('');
 console.log(letters[x])
    //console.log('the mouseis at x:'+mouseX+' y:'+mouseY);
}




function keyTyped() {
console.log(letters);
   

if (key === letters[x]) {
       console.log(letters[x]);
    } else {
        check = false;
    }
    x++;
    if (x == letters.length && check == false) {
        background = ('red');

    } else { score += 10; }

}