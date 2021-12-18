const villes = {
    paris : {nom: "Paris", lat : 48.8534, long : 2.3488},
    toulouse : {nom: "Toulouse",lat : 46.6043, long : 1.4437},
    lyon : {nom: "Lyon",lat : 45.75, long : 4.85}
};

let {lyon} = villes;

// function affichageCoordonnees(nom,latitude,longitude){
//     let affichage = `
//     ------- ${nom} -------
//     Latitude : ${latitude}
//     Longitude : ${longitude}`;
//     console.log(affichage);
// }

// affichageCoordonnees(lyon.nom,lyon.lat,lyon.long);

// function affichageCoordonnees(ville){
//     let affichage = `
//     ------- ${ville.nom} -------
//     Latitude : ${ville.lat}
//     Longitude : ${ville.long}`;
//     console.log(affichage);
// }

affichageCoordonnees(lyon);

function affichageCoordonnees(ville){
    let {nom,lat,long} = ville;
    let affichage = `
    ------- ${nom} -------
    Latitude : ${lat}
    Longitude : ${long}`;
    console.log(affichage);
}

/*

    A Partir de la liste des villes, et de la fonction << affichageCoordonnées >>
    faire en sorte d'afficher les informations de la ville de Lyon en utilisant la decomposition d'objets.

*/
