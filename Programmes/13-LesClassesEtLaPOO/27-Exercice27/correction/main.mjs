import Auteur from "./Auteur.mjs";
import Livre from "./Livre.mjs";

let auteur1 = new Auteur("Milo",31);
let auteur2 = new Auteur("Tya",24);
let livre1 = new Livre("Algorithmique selon H2PROG",200,auteur1);
console.log(auteur1);
console.log(auteur2);
console.log(livre1.toString());