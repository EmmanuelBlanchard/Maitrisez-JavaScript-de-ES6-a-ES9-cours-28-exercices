const inputMot = document.querySelector("#mot");
const btn = document.querySelector(".btn");
const divResultat = document.querySelector("#resultat");

const estPalindome = (mot) => {
    let motToArray = mot.split("");
    let motInverse = motToArray.slice().reverse();

    for(let i = 0 ; i < motToArray.length; i++){
        if(motToArray[i] != motInverse[i]) return false;
    }
    return true;
}

const afficherPalindrome = () => {
    const mot = inputMot.value;
    divResultat.innerHTML = mot + " "+ (estPalindome(mot) ? "est" : "n'est pas" ) + " un palindrome";
}

btn.addEventListener("click", afficherPalindrome);

