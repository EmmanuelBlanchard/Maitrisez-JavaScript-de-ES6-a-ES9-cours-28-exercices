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

// console.log("étape 1");
// setTimeout(() => console.log("étape 2"),2000);
// console.log("étape 3");

/* Partie Cours - Les Promesses */

// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise

// https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Using_promises

// const promesse = new Promise(function() {
//     console.log("étape 1");
// });

// promesse.then(console.log("étape 2"));


// const promesse = new Promise(function(ok) {
//     console.log("étape 1");
//     ok("coucou");
//     console.log("étape 3");
// });

// promesse.then(function(valeur) {
//     console.log("étape 2");
//     console.log(valeur);
// });


// const promesse = new Promise(function(ok) {
//     console.log("étape 1");
//     setTimeout(() => {
//         ok("coucou");
//     },2000);
//     console.log("étape 3");
// });
// promesse.then(function(valeur) {
//     console.log("étape 2");
//     console.log(valeur);
// });


// const promesse = new Promise(function(ok,reject) {
//     console.log("étape 1");
//     setTimeout(() => {
//         reject("coucou");
//     },2000);
//     console.log("étape 3");
// });
// promesse.then(function(valeur) {
//     console.log("étape 2");
//     console.log(valeur);
// });
// promesse.catch(function(valeur) {
//     console.log("Erreur");
//     console.log(valeur);
// });


// const promesse = new Promise(function(resolve,reject) {
//     console.log("étape 1");
//     setTimeout(() => {
//         resolve("coucou");
//     },2000);
//     console.log("étape 3");
// });
// promesse.then(function(valeur) {
//     console.log("étape 2");
//     console.log(valeur);
// });
// promesse.catch(function(valeur) {
//     console.log("Erreur");
//     console.log(valeur);
// });


// function tempo() {
//     return new Promise(function(resolve) {
//         console.log("étape 1");
//         setTimeout(() => {
//             resolve("coucou");
//         },2000);
//         console.log("étape 3");
//     });
// };

// tempo().then(function(valeur) {
//     console.log("étape 2");
//     console.log(valeur);
// });


// function tempo() {
//     return new Promise(function(resolve) {
//         console.log("étape 1");
//         setTimeout(() => {
//             resolve("coucou");
//         },2000);
//         console.log("étape 3");
//     });
// };

// function ditBonjour() {
//     tempo().then(function(valeur) {
//         console.log("étape 2");
//         console.log(valeur);
//     });
// }

// ditBonjour();

// ES8
function tempo() {
        return new Promise(function(resolve) {
            console.log("étape 1");
            setTimeout(() => {
                resolve("coucou");
            },2000);
            console.log("étape 3");
        });
    };
    
async function ditBonjour() {
    console.log("Debut du programme");
    const affichageBonjour = await tempo();
    console.log(affichageBonjour);

    // tempo().then(function(valeur) {
    //     console.log("étape 2");
    //     console.log(valeur);
    // });
    console.log("Fin du programme");
}

ditBonjour();

/* Notions 

    Fonction asynchrone : c’est une fonction qui se déroule de façon asynchrone et utilisant le système de «promesse»
    
    Synchrone : Le programme se met en attente d’une tâche synchrone qui se termine pour continuer son déroulement
    
    Asynchrone: Le programme continue sont déroulement sans attendre la fin de la tâche asynchrone.
    
    Promesse: les promesses permettent de réaliser des traitements asynchrones, par l’intermédiaire de la fonction «then()». Les fonctions «catch» et «finally» sont également disponibles. ES9
    
    «async» : Permet d’indiquer qu’une fonction est asynchrone. ES8

    «await» : permet de mettre en attente le retour d’une fonction. ES8

*/