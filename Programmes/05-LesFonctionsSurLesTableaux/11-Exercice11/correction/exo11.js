const notes = [5, 10, 15, 20];

const notes2 = transformationPuissance(notes);
console.log(notes);
console.log(notes2);

function transformationPuissance(tableau) {
    let nouveauTableau = tableau.map(function(note){
        return note ** 2;
    });
    return nouveauTableau;
}
