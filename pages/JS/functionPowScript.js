'use strict';

function pow() {
  var x = +prompt('enter number:', '');
  var n = +prompt('enter degree:', '');

  var res = x;
  for (var i = 1; i < n; i++) {
    res *= x;
  }

  return res;
}

var result = pow();
alert(result);
