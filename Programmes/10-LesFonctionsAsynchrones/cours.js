/* Partie Cours */

// console.log("étape 1");
// console.log("étape 2");
// console.log("étape 3");

// SetTimeout => Lancer une fonctionnalité après un certain temps
// Traitement asynchrone

// console.log("étape 1");
// setTimeout(function() {
//     console.log("étape 2");
// },2000);
// setTimeout(function() {
//     console.log("étape 3");
// },1000);
// console.log("étape 4");

// console.log("étape 1");
// setTimeout(function() {
//     console.log("étape 2");
//     setTimeout(function() {
//         console.log("étape 3");
//     },1000);
// },2000);
// console.log("étape 4");

// console.log("étape 1");
// setTimeout(() => {
//     console.log("étape 2");
// },2000);
// console.log("étape 3");

// console.log("étape 1");
// setTimeout(etape2,2000);
// console.log("étape 3");

// function etape2() {
//     console.log("étape 2");
// }


// const etape2 = () => console.log("étape 2");

// console.log("étape 1");
// setTimeout(etape2,2000);
// console.log("étape 3");

console.log("étape 1");
setTimeout(() => console.log("étape 2"),2000);
console.log("étape 3");