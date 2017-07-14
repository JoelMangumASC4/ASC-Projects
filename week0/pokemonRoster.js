var pokemon1 = ['Charizard', 'Fire', 200, 120, 150, false];
var pokemon2 = ['Umbra', 'Dark', 120, 90, 100, false];
var pokemon3 = ['Torchic', 'Fire', 50, 15, 60, false];
var pokemon4 = ['Swampert', 'Water', 200, 150, 120, false];
var pokemon5 = ['Mew', 'Psychic', 100, 90, 90, true];
var pokemon6 = ['MewTwo', 'Psychic', 200, 200, 200, true];
var pokemons = [pokemon1, pokemon2, pokemon3, pokemon4, pokemon5, pokemon6];
var pokemon7=[,,,,,];


for (var i = 0; i < pokemons.length; i++) {
    for (var j = 0; j < 6; j++) {

        console.log(pokemons[i][j]);
    }
    console.log('*****************************************************');
}

function newArray() {
    var name=prompt('What is the new Pokemon?');
    var type=prompt('What is the new Pokemons type?');
    var hp=prompt('What is the new Pokemons hp? ');
    var atk=prompt('What is the new Pokemons atk?');
    var def=prompt('What is the new Pokemons def?');
    var legend=prompt('Is the new Pokemons a legend?');

    pokemon7=[name,type,hp,atk,def,legend];

}/**/









