//1

const limit = 30;
for(let i = 20 ; i <= limit;i+=0.5) {
    console.log(i);
}



//2

const limit1 = 100;
const usd = 40;
for(let i = 10; i <= limit1; i+=10) {
    console.log(i*usd);
}


//3


const limit3 = 100;
const count_quadrat = (num) => {

    for(let i = 1; i < limit3; i++) {
        console.log(i**2);
        if(i === num ) {
            break;
        } 
    }   
}
count_quadrat(16);






//4


for (let number = 2; number <= 30; number++) {
    let isPrime = true;
    for (let i = 2; i <= number - 1; i++) {
      if (number % i === 0) {
        isPrime = false;
        continue;
      }
    }
    if (isPrime) console.log(number);
  }




//5 

let num = 81;
for(let i = 1; 3**i <= num; i++) {
  
  if(3**i !== num ) {    
    continue;
  } else {
    console.log('The possible num can be: ' + 3**i);
  }

}

