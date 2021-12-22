class Auteur {
    constructor(nom,age) {
        this.nom = nom;
        this.age = age;
    }
    toString = () => `Nom : ${this.nom} - Age : ${this.age}`;
}

export default Auteur;