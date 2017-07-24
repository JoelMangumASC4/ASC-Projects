var grid = [[], [], [], []];

function traits(color,ship,xV,yV) {
    this.color=color;
    this.ship = ship;
    this.xV=xV;
     this.yV=yV;
}

function setup() {
    
    createCanvas(windowWidth, windowHeight);
    //  background(R(v:0-255), G(v:0-),B(v:0-))
    background('grey');
    
}
var points = [[],[],[],[],[],[],[],[]];
var x = 0;
var y = 0;
var w = 100;
function draw() {
for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
 points[i][j]=new traits('white',false,x,y);grid.push(points[i][j]);
            strokeWeight(5);
            stroke('black');
            fill(points[i][j].color);
            rect(x, y, w, w);
            x += w;
        }
        y += w;
        x = 0;
    } console.log(points[0][1].ship);
if (ship==true) {
    
}



y=0;
x=0;
  }
















