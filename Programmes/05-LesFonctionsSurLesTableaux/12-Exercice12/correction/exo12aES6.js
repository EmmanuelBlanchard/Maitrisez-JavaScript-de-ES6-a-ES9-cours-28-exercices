let tab = [
    { nom : "Tya",age : 25 },
    { nom : "Toto",age : 22 },
    { nom : "Milo",age : 32 },
    { nom : "Mina",age : 32 },
]

// const indexMilo = tab.findIndex(function(perso) {
//     return perso.nom === "Milo";
// });

// console.log(indexMilo);
// console.log(tab[indexMilo]);

// tab.splice(indexMilo,1);
// console.log(tab);

// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/splice


const retourneIndexPersonne = nom => tab.findIndex( perso => perso.nom === nom);

tab.splice(retourneIndexPersonne("Toto"),1);
console.log(tab);