let calcul = {
    x : 1,
    y : 1,

    addition : function() {
        return this.x + this.y;
    },

    multiplication : function() {
        return this.x * this.y;
    },

    affichageCalcul : function(signe){
        let resultat = 0;
        switch(signe){
            case "+" : resultat = this.addition();
            break;
            case "x" :
            case "X" :
            case "*" : resultat = this.multiplication();
            break;
            default : resultat = -1;
        }
        console.log(`Le résultat du calcul ${this.x} ${signe} ${this.y} =  ${resultat}`);
    }
}

calcul.x = 5;
calcul.y = 3;

calcul.affichageCalcul("x");
calcul.affichageCalcul("*");
calcul.affichageCalcul("+");
