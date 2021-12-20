const additionner = (...nombres) => {
    let resultat = 0;
    for(let valeur of nombres){
        resultat += valeur;
    }
    return resultat;
}

const multiplier = (...nombres) => {
    let resultat = 1;
    for(let valeur of nombres){
        resultat *= valeur;
    }
    return resultat;
}
console.log("Le résultat est : " + additionner(1,5,10,15,20,50,17,25));
console.log("Le résultat est : " + multiplier(1,5,10,15,20,50,17,25));