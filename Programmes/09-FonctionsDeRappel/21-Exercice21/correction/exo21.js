function pile(nb){
    console.log(`Vous avez obtenu un pile : ${nb} `);
}

function pile2(nb){
    console.log("*************");
    console.log(`Vous avez obtenu un pile : ${nb} `);
}

function face(nb){
    console.log(`Vous avez obtenu une face : ${nb} `);
}

function randomFonction(ok,ko){
    let random = Math.floor(Math.random() * 2);
    if(random === 1) ok(random);
    else ko(random);
}
randomFonction(pile,face);