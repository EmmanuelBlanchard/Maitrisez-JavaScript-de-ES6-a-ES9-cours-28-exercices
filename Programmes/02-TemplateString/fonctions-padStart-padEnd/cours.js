let nom = "Matthieu";
let nom2 = "Matthieu GASTON";
console.log(nom.padStart(20,"-"));
console.log(nom.padStart(20," "));
console.log(nom.padEnd(20,"-"));
console.log(nom2.padEnd(20,"-"));

console.log(nom.length);
console.log(nom.padStart((nom.length+5),"-"));

let nom3 = "Toto";
let texte = nom3.padStart((nom3.length+5),"-");
let texte2 = texte.padEnd((texte.length+5),"-");
console.log(texte2);
