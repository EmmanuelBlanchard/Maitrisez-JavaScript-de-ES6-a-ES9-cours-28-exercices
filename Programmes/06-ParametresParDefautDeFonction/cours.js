let montantHT = 10;
// let montantTTC = calculPrixTTC(montantHT);

// Taux TVA 5%, remise 10%
let montantTTC1 = calculPrixTTC(montantHT,5,10);
// Taux TVA 5%, remise 1%
let montantTTC2 = calculPrixTTC(montantHT,5);
// Taux TVA 20%, remise 1%
let montantTTC3 = calculPrixTTC(montantHT);

// Les paramètres par defaut de fonction se mettent le plus à droite possible
// function calculPrixTTC(montant,tauxTVA = 20) {
//     return montant + montant * tauxTVA / 100;
// }

// Les paramètres par defaut de fonction se mettent le plus à droite possible
function calculPrixTTC(montant,tauxTVA = 20,remise = 1) {
    let montantTTC = montant + montant * tauxTVA / 100;
    return montantTTC - montantTTC * remise / 100;
}

console.log(`Le montant TTC est : ${montantTTC1}`);
console.log(`Le montant TTC est : ${montantTTC2}`);
console.log(`Le montant TTC est : ${montantTTC3}`);

/*
    Notions

    Paramètre de fonctions : Lors de la définition d’une
    fonction, le développeur peut prévoir qu’une fonction
    prenne des paramètres, c’est-à-dire des valeurs qui sont
    nécessaires au bon fonctionnement de celle-ci.

    Paramètre par défaut : Il est possible de rendre certains
    paramètres de fonction non obligatoires en leur
    ajoutant une valeur par défaut dans la définition de la
    fonction.
    Lors de l’appel de la fonction, le paramètre ne sera pas
    obligatoirement renseigné.

*/