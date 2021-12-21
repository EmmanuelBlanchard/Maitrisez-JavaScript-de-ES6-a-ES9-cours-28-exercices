/* Partie Cours */

// const perso1 = {
//     nom: "Tya",
//     age: 31,

//     anniversaire() {
//         this.age++;
//     }
// }

// const perso2 = {
//     nom: "Milo",
//     age: 35,

//     anniversaire() {
//         this.age++;
//     }
// }

class Personne {
    constructor(nom,age) {
        this.nom = nom;
        this.age = age;
    }

    anniversaire() {
        this.age++;
    }

    affichagePersonne() {
        return `Nom : ${this.nom} - Age : ${this.age}`;
    }
}

class Guerrier extends Personne {
    constructor(nom,age,pseudo) {
        super(nom,age);
        this.pseudo = pseudo;
        this.force = 5;
        this.agilite = 2;
        this.intelligence = 2;
    }

    affichagePersonne() {
        let texte = super.affichagePersonne();
        texte += `\nPseudo : ${this.pseudo}\n`;
        texte += `Force : ${this.force}\n`;
        texte += `Agilité : ${this.agilite}\n`;
        texte += `Intelligence : ${this.intelligence}\n`;
        return texte;
    }
}

// let perso1 = new Personne("Tya",31);
let perso1 = new Guerrier("Tya",31,"Wawa");
// let perso2 = new Personne("Milo",35);
let perso2 = new Guerrier("Milo",35,"Wawa2");

console.log(perso1);
console.log(perso2);
perso1.anniversaire();
perso2.anniversaire();
console.log(perso1);
console.log(perso2);
console.log(perso1.affichagePersonne());
console.log(perso2.affichagePersonne());

/*  Notions

    Class : le mot clef « class » permet de créer une classe
    (concept de la Programmation Orientée Objet - POO).

    Classe (POO) : une classe est un « moule » qui permet
    de définir la structure générale d’objets ayant les
    mêmes caractéristiques (attributs / fonctions)

    Constructeur : une classe peut-être instanciée
    (générée), en utilisant le mot clef « new »

    this : le mot clef « this » permet d’accéder à une
    propriété ou une fonction à l’intérieur même d’un objet.

    Héritage : une classe peut utiliser les caractéristiques
    d’une autre classe au travers de l’héritage, mis en
    œuvre avec le mot clef « extends »

    super : le mot clef « super » permet de faire référence à
    un attribut ou une fonction d’une classe mère dont une
    classe hérite.

*/