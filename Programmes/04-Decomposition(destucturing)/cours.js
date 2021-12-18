/* 
let notes = [5,10,15,20];
let [note1,note2,note3,note4] = notes;

console.log(`${note1} - ${note2} - ${note3} - ${note4}`);
*/

/*
let notes = [5,10,15,20];
let [note1,note2] = notes;

console.log(`${note1} - ${note2}`);
*/

/*
let notes = [5,10,15,20];
let [note1,note2,,note4] = notes;

console.log(`${note1} - ${note2} - ${note4}`);
*/

let perso = {
    nom : "Matthieu",
    age : 30,
    sexe : true
}
// Le nom des variables doit correspondre aux noms des proprietes de l'objet
let {nom,age} = perso;

console.log(`Nom : ${nom}, Age : ${age}`);

/*  Notions

    Décomposition : la décomposition permet d’extraire
    des données d’un tableau ou d’un objet pour obtenir
    des variables utilisables directement

    Décomposition de tableau : la décomposition de
    tableau permet d’extraire les valeurs contenues dans les
    cases pour les placer dans des variables

    Décomposition d’objet : la décomposition d’objet
    permet d’extraire les valeurs contenues dans les
    propriétés pour les placer dans des variables

*/