'use strict';

function sum(a) {

  var c = a;

  function add(b) {
    c += b;
    return add;
  }

  add.toString = function(){
    return c;
  };
  return add;
}

alert( sum(2)(3) );
