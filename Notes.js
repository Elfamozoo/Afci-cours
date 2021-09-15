
"use strict";

//insctructions de bases:
alert("alerte violette!")
console.log('megalol') 

//déclaration de variables 
let a = 2; // let a une portée locale 
var b = 3; // var a une portée globale
const c = 5;

a = 4;

let maVariable = 'b12', variable2= 'c12';

//nomenclature: $variable, maVariable 

console.log(typeof maVariable, typeof variable2);// quels sont les types des variables maVariable et variable2

//on peut changer les types des variables à la volée

maVariable = 12;

// maVariable était une chaîne de caractères (string) 'b12', elle est maintenant un chiffre(number): 12

//on peut également declarer des booléens : true/false

let $condition = true;

let d; // variable indefinie 'undefined'

let variable3 = 7n; // notation des bigInt (gros entiers)

//déclaration d'un tableau (object):
let tableau= [a,b,c,d];


e = parseInt("2"); // convertit une chaine de caractère en number



//les conditions (if)

let y = true;
let x = false;

if(x){ //si x est vrai (true)
    console.log("bonjour");
}
else if (y){ // si x n'est pas vrai mais que y est vrai
    console.log("bonsoir");
}
else { // si x et y sont faux
    console.log("bonne nuit");
}

// autre exemple

let z = 2; 

if (z==3){
    console.log("z vaut 3");
}
else if(z>3){
    console.log("z est supérieur à trois");
}
else {
    console.log("z est strictement inferieur à trois");
}

// autre opérateur:
//      != 
//      !==

if (x == true & !y & z == 2){ // si x est vrai ET y est faux ET z = 2
    console.log("hum")
}

if (x | !y) { // si x est vrai OU y est faux
    console.log("pouet pouet")
}



// le switch

switch(x){
    case 2:
        console.log(" x vaut 2");
        break;
    case 3:
        console.log("x vaut 3");
        break;
    default:
        console.log(" x ne vaut ni 2 ni 3");
}


// les boucles (plusieurs exemples)

let i,j,k,l,m = 0;


while (i<5){
    console.log("je m'affiche "+i+"fois");
    i++;
}

//

for(let j=0; j == 3; j++){ //on déclare la variable dans l'instruction
    console.log("coucou hibou coucou");
}

//

while(k<5){
    k++;
    if(k%2 ==0){
        console.log(k+"est pair");
        continue;
    }
    console.log(k+"est impair")
}

//

do{
    l++;
    console.log("boucle numéro"+l);
}while(l<5)

//

let tableau = ["orange", "pomme", "banane", "fraise"]

for(let m in tableau){
    console.log(tableau[m]+"est à la position" + m)
}

/////////////////////////////////////////////////////////
//bibliotheque Math

console.log(Math.PI);

console.log(Math.random());

//


let valeur = prompt("quel est ton nom?");
alert('ton nom est'+valeur);

//


//Comment créer une fonction

function multi(arg1, arg2){
    return arg1 * arg2;
}

//

let carre = function(arg){return arg*arg;}

// prévoir une erreur

try{
    console.log(carre(2));

}
catch(err)
{
    console.log(err);
}