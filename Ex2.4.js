// There is an array with some numbers. All numbers are equal except for one. Try to find it!
// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// findUniq([ 0, 4, 0, 0, 0 ]) === 4
// findUniq([ 3, 4, 4, 4, 4 ]) === 3
// It’s guaranteed that array contains at least 3 numbers.

let findUniq = function (uniq) {
 
  if (uniq[0] === uniq[1]) {
    for (let i=2; i<uniq.length; i++) {
      if (uniq[i] !== uniq[0]) {
       return uniq[i];
    }
  }
  } else  if (uniq[2] !== uniq[1]) {
    return uniq[1];
  } else { 
    return uniq[0]
  }
  }
  console.log(findUniq([  0, 4, 0, 0, 0  ]));

