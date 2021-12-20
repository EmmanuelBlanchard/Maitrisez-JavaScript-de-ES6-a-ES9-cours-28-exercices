const notes = [5, 10, 15, 20];

const transformationPuissance = (tableau) => tableau.map(note => note ** 2);

const notes2 = transformationPuissance(notes);
console.log(notes);
console.log(notes2);
