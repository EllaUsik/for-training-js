'use strict';

/*function factorial(n) {
  var f = 1;
  for (var i = 1; i <= n; ++i) {
    f *= i;
  }
  console.log(f);
}
factorial(3);*/

function factorial(n) {
  if (n > 1) {
    return n * factorial(n - 1);  // 3 * 2 * 1
  }
  return n;
}

console.log(factorial(4));
