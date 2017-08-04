function setup() {

    createCanvas(windowWidth-50, windowHeight);
    //  background(R(v:0-255), G(v:0-),B(v:0-))
    background('grey');

}

xC = 1;
yC = 1;
x = 20;
y = 20;
x1 = 50;
y1=50;
x2 = 50;
y2=800-55;
w=10;
l=500;
diameter=55;
radius=(55/2)+10;
//neg = false;
function draw() {
    background('grey');
    fill('white');
    ellipse(x, y, 55);
    x += xC;
    y += yC;
  //  console.log(windowHeight);
   // console.log(windowWidth);
    if (y >= windowHeight-radius-10 || y<=20 ) {
        yC *= -1;// console.log('blllaaaaaaaaaaahhhhhhhhhhhhhhhhhhhhhhhhh');
          
    }
    if (x >= windowWidth-radius-10 || x<=20 ) {
     //   console.log('blllaaaaaaaaaaa');
        xC *= -1; 
      /*   if (yC<0) {
                yC-=1;
         }else{
             yC+=1;
        }*/
    }
      
    if (x<=x1+l&&x>=x1&&y<=y1+radius&&y1<=y||x<=x1+l&&x>=x1&&y<=y1+radius&&y1>=y) {
         yC *= -1;
    }
 if (x<=x2+l&&x>=x2&&y2-radius+10<=y) {
         yC *= -1;
    }
 


fill('red');

rect(x1, y1,l ,w );

fill('red');

rect(x2, y2,l ,w );


if(keyIsDown(LEFT_ARROW)){
x1-=10;
}
if(keyIsDown(RIGHT_ARROW)){
x1+=10;

}

if(keyIsDown(65)){
x2-=10;
}
if(keyIsDown(68)){
x2+=10;

}







if (x1>=1400-l) {
    x1=1400-l;
    console.log('blllaaaaaaaaaaa'); 
}

}




