
const numOrStr = prompt("input number or string");

console.log(numOrStr);

switch (numOrStr && numOrStr.trim() && String(+numOrStr)) {
  case null:
    console.log("ви скасували");
    break;
  case "":
    console.log("Empty String");
    break;
  case 'NaN':
    console.log("number is Ba_NaN");
    break;
  default:
    console.log("OK!");
}



// let numOrStr = prompt('input number or string');
// console.log(numOrStr)

// if(numOrStr === null) {
// console.log('ви скасували')
// } else if( numOrStr.trim() === '' ) {
// console.log('Empty String');
// } else if ( isNaN( +numOrStr ) ) {
// console.log(' number is Ba_NaN')
// } else {
// console.log('OK!')
// }

// const strOrNum = prompt('input str or number')
// const result = +strOrNum || strOrNum
// console.log(typeof result);