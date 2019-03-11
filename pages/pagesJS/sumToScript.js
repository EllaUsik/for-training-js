'use strict';

var sumButtonByFunction = document.getElementById("button1");
var sumButtonByRecursion = document.getElementById("button2");
var sumButtonByFormula = document.getElementById("button3");
console.log(sumButtonByFunction);

var sum, n;

sumButtonByFunction.addEventListener('click', countSumToByFunction);
sumButtonByRecursion.addEventListener('click', countSumToByRecursion);
sumButtonByFormula.addEventListener('click', countSumToByFormula);

function countSumToByFunction(n) {
  n = +prompt('enter N:', '');
  sum = 0;
  for (var i = 1; i <= n ; i++) {
    sum += i;
  }
  alert ('sum from 1 to N: ' + sum);
}

function countSumToByRecursion(n) {
  n = +prompt('enter N:', '');
   if (n > 0) {
     return n + countSumToByRecursion(n - 1);
   }
   var sumByRecursion = countSumToByRecursion();
   alert(sumByRecursion);
}

function countSumToByFormula(n) {
  n = +prompt('enter N:', '');
  sum = n * (n + 1) / 2;
  alert ('sum from 1 to N: ' + sum);
}
