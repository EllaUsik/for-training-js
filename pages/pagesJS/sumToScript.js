'use strict';

var sumButtonByFunction = document.getElementById("button1");
var sumButtonByRecursion = document.getElementById("button2");
var sumButtonByFormula = document.getElementById("button3");
console.log(sumButtonByFunction);

var sum, n;
sumButtonByFunction.addEventListener('click', sumToByFunction);
sumButtonByRecursion.addEventListener('click', sumToByRecursion);
sumButtonByFormula.addEventListener('click', sumToByFormula);

function sumToByFunction(n) {
  n = +prompt('enter N:', '');
  sum = 0;
  for (var i = 1; i <= n ; i++) {
    sum += i;
  }
  return sum;
}
console.log(sum);

function sumToByRecursion(n) {

}

function sumToByFormula(n) {

}

alert ('sum from 1 to N: ' + sum);
