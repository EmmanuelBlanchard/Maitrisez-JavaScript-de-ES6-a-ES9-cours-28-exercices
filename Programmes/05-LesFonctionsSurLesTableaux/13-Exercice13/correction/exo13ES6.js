const mots = ["clou","flou","bijou","genou","trou"];
const exceptions = ["bijou","caillou","chou","genou","hibou","joujou","pou"];
let motsPluriels = [];

motsPluriels = mots.map( mot => mot+ (exceptions.includes(mot) ? "x" : "s"));

console.log(motsPluriels);