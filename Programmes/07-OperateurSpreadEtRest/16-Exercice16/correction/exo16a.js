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

console.log(p1,p2);
