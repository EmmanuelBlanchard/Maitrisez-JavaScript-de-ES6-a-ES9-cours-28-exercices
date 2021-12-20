/* Partie Cours */

// function ditBonjour() {
//     console.log("coucou");
// }

// ditBonjour();

// const ditBonjour = function() {
//     console.log("coucou");
// }

// ditBonjour();

// 1ère fonction fléchée
// const ditBonjour = () => {
//     console.log("coucou");
// }

// ditBonjour();

// const ditBonjour = () => console.log("coucou");

// ditBonjour();

// const ditBonjour = () => {
//     return "coucou";
// }

// console.log(ditBonjour());

// const ditBonjour = () => "coucou";

// console.log(ditBonjour());

// const ditBonjour = (x) => {
//     console.log("coucou");
//     console.log(x);
// }

// ditBonjour(5);

// const calcul = x => x * 2;

// console.log(calcul(5));

// const multiplication = (x,y) => {
//     return x * y;
// }

// console.log(multiplication(5,7));

const multiplication = (x,y) => x * y;

console.log(multiplication(5,7));

/* Notions 

    Fonctions fléchées : Elles correspondent à une syntaxe
    plus rapide de l’écriture d’une fonction et permettent
    de résoudre les problématiques rencontrées par
    certains mot clefs tel que « this » ou « super »

    Nombre d’arguments : Plusieurs écritures sont possibles
    en fonction du nombre d’arguments :

    0 argument : () => {}
    1 argument : arg => {}
    N arguments : (arg1,arg2,…) => {}

    Nombre de ligne de retour : Si la fonction ne retourne
    qu’une ligne de code, alors les accolades sont
    optionnelles

*/