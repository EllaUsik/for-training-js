'use strict';

var sumButtonByFunctionElement = document.getElementById("button1");
var sumButtonByRecursionElement = document.getElementById("button2");
var sumButtonByFormulaElement = document.getElementById("button3");
console.log(sumButtonByFunction);

sumButtonByFunctionElement.addEventListener('click', countSumToByFunction);
sumButtonByRecursionElement.addEventListener('click', countSumToByRecursion);
sumButtonByFormulaElement.addEventListener('click', countSumToByFormula);

function countSumToByFunction() {
  var n = +prompt('enter N:', '');
  var sum = 0;
  for (var i = 1; i <= n ; i++) {
    sum += i;
  }
  alert ('sum from 1 to N: ' + sum);
}

function sumRecursive(n) {
  if (n > 0) {
    return n + sumRecursive(n - 1);
   }
  var sumByRecursion = sumRecursive();
}

function countSumToByRecursion() {
  var n = +prompt('enter N:', '');

  alert(sumRecursive(n));
}
// TODO: doesn't show the result

function countSumToByFormula() {
  var n = +prompt('enter N:', '');
  var sum = n * (n + 1) / 2;
  alert ('sum from 1 to N: ' + sum);
}
