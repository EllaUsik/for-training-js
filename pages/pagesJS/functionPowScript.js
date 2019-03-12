'use strict';

var result;

function pow(x, n) {

  var x = +prompt('enter number:', '');
  var n = +prompt('enter degree:', '');
  var number = x;
  for (var i = 1; i < n; i++) {
    number *= x;
  }
  result = number;
  return result;
}

pow();
alert(result);
