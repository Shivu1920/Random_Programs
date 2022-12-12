// javascript
//check to see whether the input from the user is a valid hex color

//1. #000000 or 000000
//2. check the length- should be either 3 or 6

const isValidHex = (hex) => {
    if(!hex) return false;

    const strippedHex = hex.replace('#', '');
    return strippedHex.length === 3 || strippedHex.length === 6;

}

/* 
console.log(isValidHex("#000000")) //true
console.log(isValidHex("#0000000")) //false
console.log(isValidHex("#ffffff")) //true
console.log(isValidHex("#fff")) //true
console.log(isValidHex("ac")) //false
console.log(isValidHex("fff")) //true
*/
