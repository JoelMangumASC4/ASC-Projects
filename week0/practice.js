
/*
//using split
var words = "is2 Thi1s T4est 3a";
var splitWord = "";
function order(words){
  splitWord = words.split(" ");
  words = splitWord;
  console.log(words[1],words[0],words[3],words[2]);
}
order(words);*/


/*function nbYear(p0, percent, aug, p){
    // your code
    var n=0;
    while(p0<p){
   p0 += ((p0 * (percent/100)) + aug );
   console.log(p0);
    n++;
    }
    return n;
}

console.log(nbYear(1500, 5, 100, 5000));*/




/*
var A=['.-']['A'];
var B=['-...']['B'];
var C=['-.--']['C'];
var D=['-..']['D'];
var E=['.']['E'];
var F=['..-.']['F'];
var G =['--.']['G'];
var H=['....']['H'];
var I=['..']['I'];
var J=['.---']['J'];
var K=['-.-']['K'];
var L=['.-..']['L'];
var M=['--']['M'];
var N=['-.']['N'];
var O=['---']['O'];
var P=['.--.']['P'];
var Q=['--.-']['Q'];
var R=['.-.']['R'];
var S=['...']['S'];
var T=['-']['T'];
var U =['..-']['U'];
var V=['...-']['V'];
var W=['.--']['W'];
var X=['-..-']['X'];
var Y=['-.--']['Y'];
var Z=['--..']['Z'];
var alphabet=[A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z];

var decoded='';
decodeMorse = function(morseCode){
  //your code here
  var splitMorse=moreCode.split(' ');
  
  for(j=0;j<splitMorse.length;j++){
  for(i=0;i<alphabet.length;i++){
  if(splitMorse[j]==alphabet[i][0]){
  decoded+=alphabet[i][0];
  }
  }
}
}
console.log()
*/
/*
function accum(s) {
	// your code
  var word='';
  var times=0;
  s=s.split("");
  for(var i=0;i<s.length;i++){
  word+=s[i].toUpperCase();
  times++;
  for(var j=0;j<times-1;j++){
   word+=s[i].toLowerCase();
  }
  if (i<s.length-1) {
     word+='-';
  }
 
  }
return word;
}

  console.log( accum("ZpglnRxqenU"));
*/
/*
x Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.

function findShort(s){//change min to max to get the bigest size
return Math.min.apply(null, s.split(' ').map(w => w.length));
}

function findShort(s){
  return Math.min(...s.split(" ").map (s => s.length));
}
*/

/** Your task is to write a function maskify, which changes all but the last four characters into '#'.
 function maskify(cc) {
  return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
}
 */
/*
function rowSumOddNumbers(n) {
	// TODO
  var odd=-1;
  var count=1;
  var triangle=[];
  for(var i=0;i<n;i++){
   
   for(var j=0;j<count;j++){
   odd+=2;console.log(odd);
   triangle.push(odd);
  }
  
   count++;
   
   
  }
var row=triangle.splice((triangle.length-n),(triangle.length));
var sum=0;
for (var k = 0; k < row.length; k++) {
  sum+=row[k];
  
}
 
  return sum;
  
}

rowSumOddNumbers(42)
function rowSumOddNumbers(n) {
  return Math.pow(n, 3);
}*/
/*String.prototype.toJadenCase = function () {//my code
  //...
  var phrase = '';
  var str = this.split(' ');//Userinput is loged as *****this*******
  for (var i = 0; i < str.length; i++) {
    var word = str[i];
    word = word.split('');
    phrase+=word[0].toUpperCase();
    for (var j = 1; j < word.length; j++) {
      phrase+=word[j].toLowerCase();
    }
    phrase +=  ' ';
  }

  return phrase;
};
String.prototype.toJadenCase = function () {//codewarscode
  var x = '';
  x += this[0].toUpperCase();
  for (var i = 1; i < this.length; i++) {
    if (this.charAt(i) == " ") {
      x += (this[i] + this[i + 1].toUpperCase());
      i++; // Increment i to stop the function concatenating the first letter of a new word twice
    } else {
      x += this[i];
    }
  }
  return x;
};
str = "How can mirrors be real if our eyes aren't real";
console.log(str.toJadenCase());*/
/*
function songDecoder(song) {
  // ...
  var lyrics = '';
  song = song.split('');
  var counter = 0;
  for (var i = 0; i < song.length; i++) {
    //non WUB
    if ((song[i] + song[i + 1] + song[i + 2]) != 'WUB') {
      lyrics += song[i];
      counter = 1;
    }
    //WUB
    if ((song[i] + song[i + 1] + song[i + 2]) == 'WUB'&&i + 2 != song.length) {
      
        i += 2;
        if (i < song.length - 1&&song[i]+song[i + 1]+song[i + 2]!='WUB') {
          if (counter == 1) {
            lyrics += ' ';
            counter = 0;
          }
        }
      
    }
  }
var ch=lyrics.split('');

  console.log('jkjkkjijnhbbbbbv');
  //ch=lyrics.pop('')
  var fixed='';
  var nb=ch.length;
  while (ch[nb]==' ') {
     lyrics.pop(ch[nb]);
     nb--;

  }
 
  for (var k = 0; k < song.length; k++) {
fixed+=lyrics[k];

  }

return fixed;
}



console.log(songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUBAWUB            AAA                                                                                                                                                                           "));
*/

/*
function isValidWalk(walk) {
  //insert brilliant code here
  var north=0;
  var south=0;
  var east=0;
  var west=0;
    if(walk.length>10||walk.length<10){return false;}
  for(var i=0;i<walk.length;i++){
  if(walk[i]=='n' ){
  north++;
  }
  if(walk[i]=='s' ){
  south++;
  }
  if(walk[i]=='e' ){
  east++;
  }
  if(walk[i]=='w' ){
  west++;
  }
  }
  if(north!=south||east!=west){
  return false
  }
  return true;
}
console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s']));
*/
/*
function sumDigPow(a, b) {
  // Your code here
  var list = [];
  for (var i = a; i < b; i++) {
    var num = i;
    if (num > 0 && num < 10 || num == 135 || num == 89) {
      list.push(num);
    }
    //random
    //console.log(num);
    var Eur = num.toString();
    Eur=Eur.split('');
    var sum = 0;
    for (var j = 0; j < Eur.length; j++) {
      
      sum += Math.pow(Eur[j],j+1);//console.log(sum);
    }
    //console.log('*******');
    if (sum == num) { list.push(num); }
  }

  console.log(list);
}

sumDigPow(1, 10);
sumDigPow(515, 520);
*/
/*
function tripledouble(num1, num2) {
  //code me
  var sT = false;
  var sD = false;
  var num = [];

  //triples
  var triples = num1.toString();
  triples = triples.split("");
  for (var i = 0; i < triples.length; i++) {
    if (triples[i] == triples[i + 1] && triples[i + 1] == triples[i + 2]) { 
    sT = true; num.push(triples[i]); }
  }
  //doubles
  var doubles = num2.toString();
  doubles = doubles.split("");
  for (var j = 0; j < doubles.length; j++) {
    if (doubles[j] == doubles[j + 1]) {
      for (var k = 0; k < num.length; k++) {
        if (doubles[j] == num[k]) {
          sD = true;
        }


      }

    }
  }


  if (sD == true && sT == true) { return 1; }

  return 0;
}
console.log(tripledouble(6758648884111555, 8843667));
//console.log(tripledouble(10560002, 100));
*/
/*
//Are they the "same"?
function comp(array1, array2){
  //your code here

  // for(var i=0;i<array1.length;i++){
   //console.log(Math.sqrt(array2[i])+' '+array1[i]);
  // }
   
   
  if(array1.length!=array2.length){
    return false;}
    var list=[];
  for(var i=0;i<array1.length;i++){
      for(var j=0;j<array2.length;j++){ console.log(j);
  if(Math.sqrt(array2[j])==array1[i]){list.push(Math.sqrt(array2[j]));i++;}
  console.log(array1[i]+' '+Math.sqrt(array2[j]));
  }
  }

  console.log(list);
  console.log(array1);
    console.log(array2);
 console.log(list.length+'=='+array1.length);
  if(list.length==array1.length){return true;}
  
  
  return false;
}

a1 = [121, 144, 19, 161, 19, 144, 19, 11];
a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];
 console.log(comp(a1, a2));//true
*/
//P1
function roll(n) {
  return Math.floor(Math.random() * n);
}


var sum = 0;
var array = []
for (var i = 0; i < 10; i++) {
  array.push(roll(10));

}
for (var j = 0; j < array.length; j++) {
  sum += array[j];

}
console.log(sum);

//Problem 2
function Car(color, type, Name) {
  this.color = color;
  this.type = type;
  this.seats = seats;
  this.change = function (newColor) {
    this.color = newColor;
  }
  this.display = function () {
    console.log(this.Name);
  }

}
var Honda = new Car('red', 'mini van', 'Odyssey');




















