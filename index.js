// Code your solutions in this file
function writeCards(args) {
    for (let i = 0; i < args.length; i++) {
        args[i] = `Thank you, ${args[i]}, for the wonderful surprise gift!`;
    }

    return args;
}

function countDown(num) {
    while (num > 0) {
        console.log(num)
        num--
    }
    console.log( num );
}