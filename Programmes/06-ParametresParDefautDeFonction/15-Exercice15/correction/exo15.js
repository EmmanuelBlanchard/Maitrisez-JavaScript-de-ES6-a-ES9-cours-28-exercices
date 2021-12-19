afficherTableMultiplication(5);
console.log("*****************");
afficherTableMultiplication(5,7);
console.log("*****************");
afficherTableMultiplication(5,7,9);
console.log("*****************");
afficherTableMultiplication(5,9,7);

// afficherTableMultiplication(7,12,15);

function afficherTableMultiplication(nombre,debut=1,fin=10) {
    if(debut > fin) {
        let tmp = debut
        debut = fin;
        fin = tmp;
    }
    for(let i = debut ; i < fin ; i++) {
        console.log(`${i} * ${nombre} = ${i * nombre}`);
    }
}
