'use strict';

var sumButtonByFunctionElement = document.getElementById("button1");
var sumButtonByRecursionElement = document.getElementById("button2");
var sumButtonByFormulaElement = document.getElementById("button3");

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
    return n + sumRecursive(n - 1); // 3 + 2 + 1 + 0
   }
  return n;
}

function countSumToByRecursion() {
  var n = +prompt('enter N:', '');

  alert(sumRecursive(n));
}


function countSumToByFormula() {
  var n = +prompt('enter N:', '');
  var sum = n * (n + 1) / 2;
  alert ('sum from 1 to N: ' + sum);
}
