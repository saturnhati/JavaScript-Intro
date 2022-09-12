alert('Sto studiando JS!');
//var 1 pet_preferito = 'gatto';
//console.log(1 pet_preferito);

/*var pet = 'gatto';
var Pet = 'cane';*/
var petPreferito = 'criceto';
var PetPreferito = 'coniglio';

var $pet = 'giraffa';
console.log($pet);
var _pet = 'leone';
console.log(_pet);
var _pet2 = 'pantera';
// document.write(_pet2);
//var 12 = 'numero';



// PROVA SOMMA IN INPUT

// Dichiaro e assegno le variabibili degli input
let primoNumero = document.getElementById("primoNumero");
let secondoNumero = document.getElementById("secondoNumero");

function addsNumbers(){
    // se la somma non un numero, dà errore
    if(isNaN(parseInt(primoNumero.value) + parseInt(secondoNumero.value))){
    console.log('errore');
    // document.getElementById("results").innerHTML = "errore"
    alert("ERROREEEEE!!!!")
    }
    // se la somma è un numero, scrivi il risultato in un div con id "results"
    else{
    let results = document.getElementById("results")
    results.innerHTML = parseInt(primoNumero.value) + parseInt(secondoNumero.value);
    }
    results.classList.add("zoom")
}