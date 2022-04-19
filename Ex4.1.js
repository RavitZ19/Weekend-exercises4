// Fibonacci

let FibonacciFor = function (num) {
  let firstNum = 0;
  let secondNum = 1;
  let nextNum;

  for (let i = 2; i <= num; i ++){

     nextNum = firstNum;
     firstNum = firstNum + secondNum;
     firstNum = nextNum
     num--;

    }
}
console.log(firstNum(10));

