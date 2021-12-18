// const notes = [5,10,15,20];

// Suppression d'un element à la fin du tableau
// notes.pop();
// console.log(notes);
// [ 5, 10, 15 ]

// Ajout d'un element à la fin du tableau
// notes.push(25,30);
// console.log(notes);
// [ 5, 10, 15, 25, 30 ]

// La fonction slice
// const personnes = ["Mina","Milo","Tya","Lili","Felicia"];
// const tab = personnes.slice();
// console.log(tab);
// [ 'Mina', 'Milo', 'Tya', 'Lili', 'Felicia' ]
// const tab2 = personnes.slice(2);
// console.log(tab2);
// [ 'Tya', 'Lili', 'Felicia' ]
// const tab3 = personnes.slice(2,4);
// console.log(tab3);
// [ 'Tya', 'Lili' ]

// La fonction map va permettre de recuperer un tableau et d'apporter une modification sur celui ci en retournant un nouveau tableau auquel on va apporter une transformation
// const notes2 = notes.map(function(note){
    // return note * 100;
    // return Math.pow(note,2);
    // Nouvelle syntaxe ES8
    // return note ** 2;
// });
// console.log(notes);
// console.log(notes2);
// Avec return note * 100;
// [ 5, 10, 15, 25, 30 ]
// [ 500, 1000, 1500, 2500, 3000 ]
// Avec return Math.pow(note,2);
// [ 5, 10, 15, 25, 30 ]
// [ 25, 100, 225, 625, 900 ]
// Avec return note ** 2;
// [ 5, 10, 15, 25, 30 ]
// [ 25, 100, 225, 625, 900 ]

// La fonction findIndex va permettre de recuperer la position d'un element dans un tableau
// const index = notes.findIndex(function(note){
//     return note === 15;
// });
// console.log(index);
// const notes = [5,10,15,20];
// Valeur de console.log(index); => 2

// La fonction find va permettre de recuperer la valeur d'un element dans un tableau
// const persos = [
//     ["Tya",5,10,15],
//     ["Toto",10,12,14],
//     ["Milo",6,8,10],
// ]
// const valeur = persos.find(function(perso){
//     return perso[0]==="Toto";
// });
// console.log(valeur);
// Valeur de console.log(valeur); => [ 'Toto', 10, 12, 14 ]

// La fonction entries

// const notes = [5,10,15,20];
// let notesEntries = notes.entries();
// console.log(notesEntries);
// Valeur de console.log(notesEntries); => Object [Array Iterator] {}

// const notes = [5,10,15,20];
// let notesEntries = notes.entries();
// console.log(notesEntries.next());
// Valeur de console.log(notesEntries.next()); => { value: [ 0, 5 ], done: false }
// retourne tableau clé/valeur

// const notes = [5,10,15,20];
// for(let [indice,note] of notes.entries()) {
//     console.log(`Note ${indice} : ${note}`);
// }

const persos = ["Tya","Titi","Milo"];
console.log(persos.includes("Titi"));

/*  Notions

    push / pop : permet d’ajouter / supprimer un élément à
    la fin du tableau.

    slice(x,y): permet de créer une copie du tableau. x et y
    sont optionnels et représentent respectivement l’indice
    de début (inclus) et l’indice de fin (exclu).

    map : permet de créer un nouveau tableau à partir des
    données d’un tableau initial, auquel on a appliqué une
    fonction modifiant toutes les valeurs

    findIndex : permet de renvoyer le premier index d’une
    case d’un tableau qui correspondant au résultat d’une
    fonction de vérification

    entries : permet de renvoyer un élément de type
    « iterator » contenant l’association index / valeur. Pour
    parcourir cet élément il faut utiliser une boucle for…of

    Includes : permet de tester si un tableau contient une
    valeur et renvoi vrai ou faux. => ES7

*/