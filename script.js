// Калькулятор 

let action = prompt("What do you want to do? Add/div/sub/mult? ", '');
console.log(action);

while(action === null) {
    action = prompt("What do you want to do? Add/div/sub/mult?", '');
    }

while (action.length === 0) {
    action = prompt("What do you want to do? Add/div/sub/mult?", '');
}


if(isNaN(action) && action === 'add' ||  action === 'div' ||  action === 'sub' ||  action === 'mult') {
    const num1 = +prompt("The first number: " , '');
    const num2 = +prompt("The second number: ", '');
    console.log(action)
    if(action === 'add' ) {
        alert(`Result is: ${num1 + num2}`);
    } else if (action === 'div') {
        alert(`Result is: ${num1 / num2}`);
    } else if ( action === 'sub' ) {
        alert(`Result is: ${num1 - num2}`);
    } else if ( action === 'mult' ) {
        alert(`Result is: ${num1 * num2}`);
    };

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
else {
   alert('Error!');
}

