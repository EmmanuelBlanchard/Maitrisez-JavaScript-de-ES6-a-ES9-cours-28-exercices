let randoms = [];
for(let i = 0; i < 10; i++){
    randoms.push(Math.floor(Math.random()*2));
}

let nbPile = 0;
let nbFace = 0;
for(let valeur of randoms){
    if(valeur === 0) nbPile++;
    else nbFace++;
}

console.log(`Le nombre de piles est de : ${nbPile}, \
le nombre de face est de : ${nbFace}, \
le nombre de faces représente : ${(nbFace/(nbPile+nbFace))*100}%`);