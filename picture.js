
let action_birth = prompt('When is your birthday?', '');

console.log(action_birth);


if (action_birth === null) {
    alert(`it's a pity that u're ain't want to write date of birth`);
} else if (action_birth) {
    alert(`your birthday on ${action_birth}`);
} else if (action_birth.length === 0) {
    action_birth = prompt('Empty string is wrong. When is your birthday?', '');
}

let action_city = prompt('Where do you live?', '');

console.log(action_city);

if (action_city === null) {
    alert(`it's a pity that u're ain't want to write placement`);
} else if (!isNaN(action_city)) {
    action_city = prompt('Type the letters please. Where do you live?', '');
} else if (action_city.length === 0) {
    action_city = prompt('Empty string is wrong. Where do you live?', '');
} else { 
    if (action_city === 'Kyiv' || action_city === 'Washington' ||  action_city === 'London' ) {
    alert(`You live in capital ${action_city}`);
}   else if(action_city ) {
    alert(`You live in ${action_city}`);
}};


let action_sport = prompt('What kind of sport fo you prefer?', '');

console.log(action_sport);

if (action_sport === null) {
    alert(`it's a pity that u're ain't want to write your idol`);
} else if (!isNaN(action_sport)) {
    action_sport = prompt('Type the letters please. What kind of sport do u like?', '');
} else if (action_sport === 0) {
    action_sport = prompt('Empty string is wrong. What kind of sport do u like?', '');
} else {
   if(action_sport === 'Football') {
   alert(`Cool! So, you want to become a Cristiano Ronaldo?`);
} else if(action_sport === 'Basketball') {
    alert(`Cool! So, you want to become a Myles Morales?`);
} else if (action_sport === 'Swimming' ) {
    alert(`Cool! So, you want to become a Mario Bananas?`)
} else if (action_sport) {
    alert('This sport does not available');
}
}