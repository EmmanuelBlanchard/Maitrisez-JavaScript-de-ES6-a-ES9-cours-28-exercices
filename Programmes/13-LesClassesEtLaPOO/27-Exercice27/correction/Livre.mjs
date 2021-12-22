class Livre {
    constructor(titre,nombreDePages,auteur) {
        this.titre = titre;
        this.nombreDePages = nombreDePages;
        this.auteur = auteur;
    }

    toString = () => `Titre : ${this.nom} - Nombre de Pages : ${this.age} - Auteur : ${this.auteur}`;
}

export default Livre;