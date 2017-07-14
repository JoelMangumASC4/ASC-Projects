var mudkip={
"Attack":"Bubble Beam",
"HP":28,
"Legendary":false,
"Types":["water","ground"]
};


function superHero(realName, power,sidekick,
                   race,gender,hideout,nemisis,universe) {
    this.realName=realName;
    this.power=power;
    this.sidekick=sidekick;
    this.race=race;
    this.gender=gender;
    this.hideout=hideout;
    this.nemisis=nemisis;
    this.universe=universe;
this.talk=function(){
console.log('hello my name is '+this.realName);
}

function pizza(sauce,cheese,topings,size){
    this.sauce=sauce;
    this.sauce=cheese;
    this.topings=topings;
    this.size=size;
this.order=function(){
console.log('you ordered a boneless pizza with '+this.sauce+' sauce, '+this.cheese+'cheese, '+this.topings+' '+this.size)
}
} 




}
var superman= new superHero('Clark Kent','Heat Vision',false,
                            'Kryptonian','male','Barn','Lex','DC');
var batman= new superHero('Bruce Wayne');
