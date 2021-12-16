// const : Permet de définir une «variable» qui ne change pas au cours du temps10Variable globaleVariable locale
const prenom = "Matthieu";
// variable globale
// var : En JavaScript le mot clef «var» permet de définir une variable sans notion de type.
var age = 20;
// let : Permet de limiter la portée d’une variable à un bloc en particulier. Ce mot clef «remplace» le mot clef «var» et permet de «mieux» coder.
let age = 20;
console.log(age);
age = age + 1;
anniversaire()
console.log(age);


function anniversaire() {
    let nombreAnnee = 0;
    if(age > 18) {
        nombreAnnee = 20;
        age += nombreAnnee;
    } else {
        age++;
    }
    // age++; // age = age + 1
    // variable locale
    console.log(nombreAnnee);
}