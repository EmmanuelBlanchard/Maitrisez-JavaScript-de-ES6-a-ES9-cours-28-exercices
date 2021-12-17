const tableau = [10,20,30,40];

// for(let cpt = 0; cpt < 10 ; cpt++) {
//     console.log(cpt);
// }

// for(let cpt = 0; cpt < tableau.length ; cpt++) {
//     console.log(tableau[cpt]);
// }

// for(let cpt = 0; cpt < tableau.length ; cpt++) {
//     console.log(`Numéro : ${cpt}, Valeur : ${tableau[cpt]}`);
// }

// For in est utilisable sur les objets et est déconseillé sur les tableaux
// si l'ordre des éléments est important
// Pour en savoir plus : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/for...in
// for(let indice in tableau) {
//     console.log(`Numéro : ${indice}, Valeur : ${tableau[indice]}`);
// }

// Exemple for...in avec objets
const perso = {
    nom : "Matthieu",
    age : 31
} 

for(let indice in perso) {
    console.log(`Indice : ${indice}, Valeur : ${perso[indice]}`);
}

// Boucle for of => pas l'affichage des indices
// for(let valeur of tableau) {
//     console.log(valeur);
//     console.log(`Numéro : ${indice}, Valeur : ${tableau[indice]}`);
// }

/*  Notions

for : le mot clef « for » permet de réaliser une boucle et
de répéter des actions un nombre de fois défini à
l’avance. Cette boucle est très utile dans le cadre des
tableaux car nous connaissons le nombre d’éléments
d’un tableau grâce à la propriété length de Array.
Exemple : « tab.length »

for…in : la boucle for…in permet de boucler sur des
éléments énumérables tels que des objets ou des
tableaux (un tableau est un objet de type Array)

for…of : la boucle for…of permet de boucler sur des
tableaux. Cette boucle peut également s’utiliser sur
d’autres types d’éléments comme Map ou String

*/