const formatageCalcul = (fonctionCalcul,x,y) => {
    console.log("**********************");
    console.log(`Le résultat est : ${fonctionCalcul(x,y)}`);
    console.log("**********************");
}

const additionner = (x,y) => x + y;
const soustraire = (x,y) => x - y;
const multiplier = (x,y) => x * y;
const diviser = (x,y) => x / y;

formatageCalcul(additionner,5,3);
formatageCalcul(soustraire,12,10);
formatageCalcul(multiplier,10,11);
formatageCalcul(diviser,5,3);
