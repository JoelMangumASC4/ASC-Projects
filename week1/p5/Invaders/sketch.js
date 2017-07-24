function setup() {

    createCanvas(windowWidth, windowHeight);
    //  background(R(v:0-255), G(v:0-),B(v:0-))
    background('grey');

}
//ball variables
x = 0;
y = 0;
xC = 10;
yC = 100;
//player variables
x1 = 0;
y1 = 745;
//ammo variables
aX = 100;
aY = 100;
shoot = false;


function enemy(width,height,x,y,visible) {
    this.width=width;
    this.height=height;
    this.x=x;
    this.y=y;
    this.visible=visible;
}
enemyArray=[];




function draw() {
    background('grey');
    //ball movement

   

rect(x, y, 55, 55);
    


    
   
   
   
   
   
    x += xC;
    
    
    if (x >= 800 || x <= 0) {
        y += 55; console.log(y);
    }
    //if(y==windowHeight||y==0){yC*=-1;}
    if (x == 800 || x == 0) {
        xC *= -1;
    }
    //





    rect(x1, y1, 200, 50);
    //ammo

    ellipse(aX, aY, 30, 30);
    if (keyIsDown(LEFT_ARROW) && x1 > 0) {
        x1 -= 5;
    }
    if (keyIsDown(RIGHT_ARROW) && x1 < 600) {
        x1 += 5;
    }
    if (keyIsPressed === 'a') {
        y1 -= 1; aX = x1 + 100; aY = y1; shoot = true;
        console.log('hhhhhhhhhhh');
    }
    if (shoot == true) {
        aY -= 3; console.log('hhhhhhhhhhh');
    }
    if (shoot == false) {
        aX = -10;
        aY = 0;
    }
    if (aY <= 0) {
        shoot = false;



    }
    // console.log('x:'+aX+' y:'+aY);
}
function keyTyped() {
    if (key === 'a') {
        aX = x1 + 100; aY = y1; shoot = true;
        console.log('hhhhhhhhhhh');
        return 0;
    }





}




