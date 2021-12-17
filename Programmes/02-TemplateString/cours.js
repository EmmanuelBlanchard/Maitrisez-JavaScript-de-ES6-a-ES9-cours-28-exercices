// const : Permet de définir une «variable» qui ne change pas au cours du temps10Variable globaleVariable locale
const prenom = "Matthieu";
const age = 30;

console.log(prenom + " " + age);
console.log("Prenom : " + prenom + " Age : " + age);
console.log("Prenom : " + prenom + " Age : " + (age+5));
console.log("Prenom : %s, Age :  %d ",prenom, (age+5));

// Concaténation
let texte = "Prenom : " + prenom + " Age : " + (age+5);
// bactricks quotes inversés
let texte2 = `Prenom : ${prenom} Age : ${(age+5)}`;
let texte3 = `Prenom : ${prenom} Age : ${Math.pow(age,2)}`;

console.log(texte);
console.log(texte2);
console.log(texte3);

/*  Notions

Chaine de caractères : Aussi appelé « String », les
chaînes de caractères sont une suite de caractères mis
bout à bout. Il est possible d’assembler des chaînes de
caractères et des variables par l’intermédiaire du
concept de « Concaténation »

Template String : les Templates de chaîne de caractères
permettent de préparer des « String » en insérant des
variables évaluables à l’intérieur. Le symbole utilisé pour
créer des Template String est le backtick : `
 
Variables évaluables : pour qu’une variable soit
interprétée dans un Template String, il suffit de
l’encadrer par des accolades et la précéder du symbole
dollar : ${var}

*/