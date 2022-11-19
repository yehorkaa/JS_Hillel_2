

function main(word, callback) {
    console.log(`hello i am ${word}, my surname`); 
    callback();
};


function second(letter) {
    console.log(`popkov ${letter}`);
};


main("yehor", second);

second('let')