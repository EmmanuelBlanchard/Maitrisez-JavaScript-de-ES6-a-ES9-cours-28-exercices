/* Partie Cours */

// const notes = [5,10,15,20];
// const notes2 = notes.map( (element) => element ** 2);
// console.log(notes2);


// const notes = [5,10,15,20];
// const notes2 = notes.map(carre);

// function carre(element){
//     return element ** 2;
// }

// console.log(notes2);

// const carre = element => element ** 2;

// const notes = [5,10,15,20];
// const notes2 = notes.map(carre);

// console.log(notes2);

// function calculPar3(x,valeur) {
//     if(valeur === 0) return addition(x,3);
//     else return multiplication(x,3);
// }

// function addition(x,y) {
//     return x + y;
// }

// function multiplication(x,y) {
//     return x * y;
// }

// const calcul = addition(2,3);

// const calcul = calculPar3(2,1);

// console.log(`Le résultat est : ${calcul}`);


const calculPar3 = (x,maFonctionDeRappel) => maFonctionDeRappel(x,3);

const addition = (x,y) => x + y;

const multiplication = (x,y) => x * y;

// Le deuxième paramètre est la fonction de rappel
const calcul1 = calculPar3(2,addition);
// Le deuxième paramètre est la fonction de rappel
const calcul2 = calculPar3(2,multiplication);

console.log(`Le résultat est : ${calcul1}`);
console.log(`Le résultat est : ${calcul2}`);

/* Notions

    Fonction de rappel : « callBack Function » une fonction
    de rappel est une fonction qui est passée en paramètre
    d’une autre fonction.
    
    De nombreuses fonctions préexistante utilisent ce type
    de fonction :
    
        map(fonctionRappel)
        findIndex(fonctionRappel)
        http.createServer(functionRappel (req, res))
        setTimeout(functionRappel,time)

*/