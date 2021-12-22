class Cercle {
    constructor(rayon) {
        this.rayon = rayon;
    }

    perimetre = () => this.rayon * 2 * Math.PI;
    aire = () => this.rayon ** 2 * Math.PI;
    toString = () => `Cercle de rayon ${this.rayon} - Périmètre : ${this.perimetre()} - Aire : ${this.aire()}`;
}