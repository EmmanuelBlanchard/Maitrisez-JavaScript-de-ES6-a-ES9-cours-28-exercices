const notes = [5,10,15,20];

// for(let [indice,note] of notes.entries()) {
//     console.log(`Note numéro ${indice} : ${note}`);
// }

// Recuperer les notes avec valeurs paires
for(let [indice,note] of notes.entries()) {
    if(note % 2 === 0) {
        console.log(`Note numéro ${indice} : ${note}`);
    }
}

/* Sujet 

    A partir du tableau de l'exercice 6, utiliser une boucle for...of et la fonction entries()

    const notes = [5,10,15,20];

    =>  
        Note numéro 0 : 5
        Note numéro 1 : 10
        Note numéro 2 : 15
        Note numéro 3 : 20
*/

