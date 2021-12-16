var p1 = 10;
const p2;
var moyenne = calculMoyenne();
console.log("P1 : "+ p1 + " P2 : " + p2 + " P3 : " + p3);
console.log("La somme est de : "+somme);
console.log("La moyenne est de : "+moyenne);

function calculMoyenne(){
    p1 = p1+5;
    p2 = 6;
    var p3 = 12;
    let somme = p1 + p2 + p3;
    const resultat = somme / 3;
    return resultat;
}
