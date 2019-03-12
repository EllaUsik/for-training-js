'use strict';

var minNumber;

function min(a, b) {
  a = +prompt('enter number "a"', ' ');
  b = +prompt('enter number "b"', ' ');

  if (a < b) {
    minNumber = a;
    return  minNumber;
  }
  else {
    minNumber = b;
    return minNumber;
  }
}

min();

alert(minNumber);
console.log(minNumber);
