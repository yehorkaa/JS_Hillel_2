const action = +prompt("Type the quantity oh hours ",'')
console.log(action);

while(action === null) {
    action = prompt("Type the quantity oh hours", '');
    }

while (action.length === 0) {
    action = prompt("Type the quantity oh hours", '');
}

if( isNaN(action) ) {
    alert('Error!');
} else {
    let result = action * 3600;
    alert(`The result is ${result}`);       
    const action_2 = +prompt('Well, how would you estimate my hw? In scale 1-100 ', '');
    if (action_2 >= 1 && action_2 < 90) {
        prompt('Its a pity, how can i correct my work?');
        alert('Understood, i will do everything in my power to complete your decrees :) ');
    } else if (action_2 >= 90 && action_2 <= 100) {
        alert('THANK YOU!');
    } else {
        alert('try again please')
    };
}
