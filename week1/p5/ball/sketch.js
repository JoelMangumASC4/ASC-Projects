function setup() {

    createCanvas(windowWidth, windowHeight);
    //  background(R(v:0-255), G(v:0-),B(v:0-))
    background('grey');
  
}
xC=1;
yC=1;
x=0;
y=0;
function draw() {
     background('grey');
ellipse(x, y, 55);
x+=xC;
y+=yC;
if(y==windowHeight||y==0){yC*=-1;xC++;yC++;}
if (x==windowWidth||x==0) {
    xC*=-1;xC++;yC++;
}
}