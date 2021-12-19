const classes = {
    guerrier : {
        classe : "war",
        force: 5,
        agilite: 3,
        intelligence : 2
    },
    archer : {
        classe : "archer",
        force: 3,
        agilite: 5,
        intelligence : 3
    },
    mage : {
        classe : "mage",
        force: 2,
        agilite: 3,
        intelligence : 5
    }
}

let p1 = {
    nom: "Tya",
    age: 22,
    ...classes.archer
}
let p2 = {
    nom: "Milo",
    age: 30,
    ...classes.guerrier
}
let p3 = {
    nom: "Toto",
    age: 30,
    ...classes.mage
}
afficherPersos(p1,p2,p3);

function afficherPersos(...persos){
    for(let perso of persos){
        console.log(
            `*************************\n`
            +`Nom : ${perso.nom}\n`
            +`Age : ${perso.age}\n`
            +`Classe : ${perso.classe}\n`
            +`Liste des caractères : \n`
            +`Force : ${perso.force}\n`
            +`Agilite : ${perso.agilite}\n`
            +`Intelligence : ${perso.intelligence}\n`
        );
    }
    
}