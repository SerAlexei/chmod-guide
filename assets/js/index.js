'use strict';

let result = prompt('Enter a number from 0 to 7:');

switch (result){
    case '0' :
        console.log(`The number ${result} you entered corresponds to the following access level: ---`);
        break;
    case '1' :
        console.log(`The number ${result} you entered corresponds to the following access level: --x`);
        break;
    case '2' :
        console.log(`The number ${result} you entered corresponds to the following access level: -w-`);
        break;
    case '3' :
        console.log(`The number ${result} you entered corresponds to the following access level: -wx`);
        break;
    case '4' :
        console.log(`The number ${result} you entered corresponds to the following access level: r--`);
        break;
    case '5' :
        console.log(`The number ${result} you entered corresponds to the following access level: r-x`);
        break;
    case '6' :
        console.log(`The number ${result} you entered corresponds to the following access level: rw-`);
        break;
    case '7' :
        console.log(`The number ${result} you entered corresponds to the following access level: rwx`);
        break;
    default:
        console.log(`The number ${result} you entered does not match`);
}
