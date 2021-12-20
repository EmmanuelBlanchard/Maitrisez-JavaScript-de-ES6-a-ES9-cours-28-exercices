const notes = [5,10,15,20];

const calculMoyenne = () => {
    let resultat = 0;
    for(let valeur of notes){
        resultat += valeur;
    }
    return (resultat /= notes.length);
}
const calculMoyenne2 = () => {
    let resultat = 0;
    for(let indice in notes){
        resultat += notes[indice];
    }
    return (resultat /= notes.length);
}
console.log(`La moyenne est de ${calculMoyenne()}`);
console.log(`La moyenne est de ${calculMoyenne2()}`);

const calculMoyenne3 = () => {
    let resultat = 0;
    for(let i = 0 ; i < notes.length ; i++){
        resultat += notes[i];
    }
    return (resultat /= notes.length);
}
console.log(`La moyenne est de ${calculMoyenne3()}`);