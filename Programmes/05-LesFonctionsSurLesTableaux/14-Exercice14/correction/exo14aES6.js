const mot = "bonjour";

const estPalindome = (mot) => {
    let motToArray = mot.split("");
    let motInverse = motToArray.slice().reverse();

    for(let i = 0 ; i < motToArray.length; i++){
        if(motToArray[i] != motInverse[i]) return false;
    }
    return true;
}

console.log(mot + " " + (estPalindome(mot) ? "est" : "n'est pas" ) + " un palindrome");
