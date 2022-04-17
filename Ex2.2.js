// Given an array of ones and zeroes, convert the equivalent binary value to an integer

let arrayIntoBinary = [1,0,0,1];

let num = 0;

for (let i=0; i<arrayIntoBinary.length; i ++) {
  num = num * 2;
  num += arrayIntoBinary[i];
}
console.log(num);

