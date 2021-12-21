/* Partie Cours */

let perso = {
    nom : "Tya",
    prenom : "Milo",

    ditBonjour : function() {
        console.log(`Bonjour ${this.nom}!`);
    }
}

// console.log(perso.nom);
// console.log(perso["nom"]);
// perso.age = 31;
// console.log(perso.age);

// perso.ditBonjour();

// for(let info in perso) {
//     console.log(perso[info]);
// }

// Dupliquer un objet, operateur spread (Recent)
// let perso2 = {...perso};

// Dupliquer un objet, fonction  (Ancienne)
// Declarer perso est un objet vide
let perso2 = {};
Object.assign(perso2,perso);
// perso2.sexe = true;

// console.log(perso);
// console.log(perso2);

/*
{ nom: 'Tya', prenom: 'Milo', ditBonjour: [Function: ditBonjour] }
{
  nom: 'Tya',
  prenom: 'Milo',
  ditBonjour: [Function: ditBonjour],
  sexe: true
}
*/

// console.log(Object.keys(perso2));
/*
Dans un tableau, chacune des propriétés présentes
[ 'nom', 'prenom', 'ditBonjour' ]
*/

// console.log(Object.values(perso2));
/*  
Dans un tableau, chacune des valeurs présentes
[ 'Tya', 'Milo', [Function: ditBonjour] ]
*/

// console.log(Object.entries(perso2));
/*
Dans un tableau, chacune des propriétés et valeurs présentes
[
  [ 'nom', 'Tya' ],
  [ 'prenom', 'Milo' ],
  [ 'ditBonjour', [Function: ditBonjour] ]
]
*/

// Taille de notre objet
console.log(Object.keys(perso2).length);

/*
    Notions 

    Objet JavaScript : les objets JavaScript permettent de
    manipuler des informations sous forme de propriétés. Il
    peuvent également contenir des fonctions.

    this : le mot clef « this » permet d’accéder à une
    propriété ou une fonction à l’intérieur même d’un objet.

    Il est possible d’ajouter dynamiquement des propriétés
    à un objet

    Pour accéder aux propriétés d’un objet, deux syntaxes
    sont possibles : objet[« propriete »] ou objet.propriete


    Assign(cible,source) : permet de copier les propriétés
    d’un objet dans un autre. Si une propriété existe dans
    les deux objets, celle de la source sera prise en compte.
    cible est l’objet qui reçoit les valeurs, source est l’objet
    qui envoie les valeurs

    Keys(obj) : permet de retourner les noms des propriétés
    d’un objet sous forme d’un tableau

    Values(obj) : permet de retourner les valeurs des
    propriétés d’un objet sous forme de tableau

    Entries(obj) : permet de retourner le couple
    [nom_propriété , valeur] d’un objet sous forme de
    tableau. Nous avons donc un tableau à 2 dimensions

*/