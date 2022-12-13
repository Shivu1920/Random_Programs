// javascript
//check to see whether the input from the user is a valid hex color

//1. #000000 or 000000
//2. check the length- should be either 3 or 6

const hexInput = document.getElementById('hexInput');
const inputColor = document.getElementById('inputColor');
const alteredColor = document.getElementById('alteredColor');
const alteredColorText = document.getElementById('alteredColorText');
const sliderText = document.getElementById('sliderText');
const slider = document.getElementById('slider');

hexInput.addEventListener('keyup', () => {
    const hex = hexInput.value;
    if(!isValidHex(hex)) return ;

    const strippedHex = hex.replace('#', ''); 
    
    inputColor.style.backgroundColor = hex;
}
)

const isValidHex = (hex) => {
    if(!hex) return false;

    const strippedHex = hex.replace('#', '');
    return strippedHex.length === 3 || strippedHex.length === 6;

}
// converting hex values to rgb
const convertHexToRGB = (hex) => {
    if(!isValidHex(hex)) return null;
    
    let strippedHex = hex.replace('#','');
    
    if(strippedHex.length === 3) {
      strippedHex = strippedHex[0] + strippedHex[0]
      + strippedHex[1] + strippedHex[1]
      + strippedHex[2] + strippedHex[2];
    }
    const r = parseInt(strippedHex.substring(0,2),16);
    const g = parseInt(strippedHex.substring(2,4),16);
    const b = parseInt(strippedHex.substring(4,6),16);

    return {r,g,b}
  }
  //console.log(convertHexToRGB("ffe"));

  // convert rgb value to hex
  const convertRGBToHex = (r,g,b) => {
    const firstPair = ("0" + r.toString(16)).slice(-2);
    const secondPair = ("0" + g.toString(16)).slice(-2);
    const thirdPair = ("0" + b.toString(16)).slice(-2);

    const hex = "#" + firstPair + secondPair + thirdPair;
    return hex;

  }
  //  console.log(convertRGBToHex(0,0,0));

const increaseWithin0T0255 = (hex, amount) => {
  // const newHex = hex + amount;
  // if (newHex > 255) return 255;
  // if (newHex < 0) return 0;
  return Math.min(255, Math.max(0,hex+amount));
}
// altering the color : subtracing from color => darker
// adding to the color => lighter
const alterColor = (hex, percentage) => {
  const {r,g,b} = convertHexToRGB(hex);

  const amount = Math.floor((percentage/100) * 255);

  const newR = increaseWithin0T0255(r,amount) ;
  const newG = increaseWithin0T0255(g,amount);
  const newB = increaseWithin0T0255(b,amount);
  //console.log(newR, newG, newB) 
  return convertRGBToHex(newR, newG, newB);
}

 //console.log(alterColor('fff', 10));


// displaying the percentage
  slider.addEventListener('input' , () => {
    if(!isValidHex(hexInput.value)) return ;

    sliderText.textContent = `${slider.value}%`;

    const alteredHex = alterColor(hexInput.value, slider.value);
    alteredColor.style.backgroundColor = alteredHex;
    alteredColorText.innerText = "Altered Color " +  alteredHex;
  })

  /* 
console.log(isValidHex("#000000")) //true
console.log(isValidHex("#0000000")) //false
console.log(isValidHex("#ffffff")) //true
console.log(isValidHex("#fff")) //true
console.log(isValidHex("ac")) //false
console.log(isValidHex("fff")) //true
*/