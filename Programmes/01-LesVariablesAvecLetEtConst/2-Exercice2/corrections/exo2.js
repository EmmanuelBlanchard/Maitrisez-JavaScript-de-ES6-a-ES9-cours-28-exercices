const nombre = 5;
// 1 * 2 * 3 * 4 * 5
let resultat = 1;
for(let i = 1; i <= nombre ; i++){
    resultat = resultat * i;
}
console.log("Factorielle " + nombre + " = " + resultat);