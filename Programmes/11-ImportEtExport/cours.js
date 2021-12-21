/* Partie Cours */

import player from "./utile.mjs";
player.ditBonjour();
console.log(`Je suis ${player.prenom} ${player.nom} `);

/* Notions 

    Export : Permet d’exporter des éléments d’un fichier qui
    sont ensuite utilisables dans un autre à l’aide d’un
    import.

    Import : Permet de récupérer des éléments provenant
    d’un autre fichier.

    Sur Node.js : il faut une version récente de node.js pour
    pouvoir utiliser ce système de module, et créer des
    fichiers avec l’extension « mjs »

    Sur un navigateur : il faut importer le fichier javascript
    principal en rajoutant la propriété « type=‘module’ », et
    passer par un serveur !

*/