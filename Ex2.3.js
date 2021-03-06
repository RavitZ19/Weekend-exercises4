// Complete the findNextSquare method that finds the next integral perfect square after the one
// passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is
// also an integer.
// If the parameter is itself not a perfect square then -1 should be returned. You may assume the
// parameter is positive.
// Examples:
// findNextSquare(121) --> returns 144
// findNextSquare(625) --> returns 676
// findNextSquare(114) --> returns -1 since 114 is not a perfec

const perfectSquare = function(num) {
  let sqrt = Math.sqrt(num);
  if (Number.isInteger(sqrt)) {
     return (sqrt+1) * (sqrt+1);
  } else {
    return -1
  }
}

console.log(perfectSquare(25));