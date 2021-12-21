function monTimer(timer){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve (`${timer}`);
        },1000);
    })
}

async function startTimer(seconde){
    for(let i = seconde; i > 0; i--){
        console.log(await monTimer(i));
    }
    console.log("GO !!!!!!!");
}

startTimer(5);

