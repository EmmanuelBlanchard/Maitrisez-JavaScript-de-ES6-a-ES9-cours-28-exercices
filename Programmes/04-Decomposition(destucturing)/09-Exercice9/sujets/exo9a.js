const villes = [
    ["Paris", 48.8534, 2.3488],
    ["Toulouse", 46.6043, 1.4437],
    ["Lyon", 45.75, 4.85],
];

function affichageCoordonnees(ville){
    let affichage = `
    ------- ${ville[0]} -------
    Latitude : ${ville[1]}
    Longitude : ${ville[2]}`;
    console.log(affichage);
}

/*

    A Partir du tableau contenant les villes, et de la fonction << affichageCoordonnées >>
    faire en sorte d'afficher les informations de la ville de Lyon en utilisant la decomposition de tableau

*/