/*
const notes = [5,10,15,20];
const notes2 = [...notes];
notes2.push(25,30);

console.log(notes);
console.log(notes2);
[ 5, 10, 15, 20 ]
[ 5, 10, 15, 20, 25, 30 ] 
*/

/*
const notes = [5,10,15,20];
const notes2 = [0,...notes,35];
notes2.push(25,30);
console.log(notes);
console.log(notes2);

[ 5, 10, 15, 20 ]
[
   0,  5, 10, 15,
  20, 35, 25, 30
]
*/

/*
const perso = {
    nom : "Milo",
    age : 31
}

const persoGuerrier = {
    ...perso,
    type : "Guerrier",
    force : 5
}

console.log(perso);
console.log(persoGuerrier);
{ nom: 'Milo', age: 31 }
{ nom: 'Milo', age: 31, type: 'Guerrier', force: 5 }

*/

/*
let perso = {
    nom : "wawa",
    classe : "Guerrier",
    force : 5,
    agilité : 3,
    intelligence : 2
}

Spread + destructuring =>
let {nom,classe,...caract} = perso;

console.log(`Nom : ${nom} Classe : ${classe}`)
console.log(caract);

Affichage => 
Nom : wawa Classe : Guerrier
{ force: 5, 'agilité': 3, intelligence: 2 }

*/

const perso1={nom:"Milo",age:31};
const perso2={nom:"Tya",age:25};
const perso3={nom:"Lili",age:20};
const perso4={nom:"Toto",age:25};

afficherPersonnages(perso1,perso2,perso3,perso4);

function afficherPersonnages(...persos){
    console.log(persos);
}

// persos est un tableau de perso 
// [
//     { nom: 'Milo', age: 31 },
//     { nom: 'Tya', age: 25 },
//     { nom: 'Lili', age: 20 },
//     { nom: 'Toto', age: 25 }
//   ]

/* 

    Notions 

    L’opérateur utilisé pour ces deux fonctionnalités est « … »

    Spread : Permet de séparer et récupérer les éléments
    d’un tableau ou d’un objet.

    Un tableau et un objet ne peuvent pas être dupliqués
    directement. En effet cela reviendrait à faire une copie de
    référence (pointeur).

    Il est possible de combiner le « Destructuring » et
    l’opérateur « Spread »

    Rest : permet de regrouper une liste d’arguments passée
    en paramètre de fonction dans un tableau unique et
    d’utiliser les fonctions disponibles sur les tableaux.

*/