const notes1 = [5,10,15,20];
const notes2 = [2,4,6];

const calculMoyenne = notes =>{
    let resultat = 0;
    for(let note of notes){
        resultat += note;
    }
    return resultat / notes.length;
}

const ajout1 = notes => notes.map(n => n+1);

const additionnerTab = (tab1,tab2) =>{
    let taille = tab1.length;
    if(tab1.length < tab2.length) taille = tab2.length;

    let newTab = [];
    for(let i = 0 ; i < taille; i ++){
        let valeur = (tab1[i]) ? tab1[i] : 0;
        valeur += (tab2[i]) ? tab2[i] : 0;
        newTab.push(valeur);
    }
    return newTab;
}

console.log(`La moyenne du tableau 1 est : ${calculMoyenne(notes1)}`);
console.log(`La moyenne du tableau 2 est : ${calculMoyenne(notes2)}`);
const notes3 = ajout1(notes1);
console.log(notes3);
const notes4 = additionnerTab(notes1,notes2);
console.log(`le tableau 4 donne : ${notes4}`);