'use strict';

/*var admin;
var name;

name = 'Вася';
admin = name;
console.log(admin);
alert(admin);

var ourPlanetName = 'Erth';
var visitorName = 'Petr';

var userName = prompt('enter your name', 'Ella');
alert(userName);

var officialNameJS = prompt('enter official name of JS', ' ');

if (officialNameJS == 'ECMAScript') {
  alert('Верно!');
}
else {
  alert('Не знаете? «ECMAScript»!');
}

var value = prompt('enter number', ' ');

if (value > 0) {
  alert('this is positiv number');
}
if (value < 0) {
  alert('this is negativ number');
}
else {
  alert('this is 0');
}*/

/*var userLogin = prompt ('enter your login', 'Login');

if (userLogin == 'admin') {
  var userPassword = prompt ('enter your password', 'Password');

  if (userPassword == 'black master') {
    alert('Welcome!');
  }
  else if (userPassword == null) {
    alert('entering canceled');
  }
  else {
    alert('incorect password');
  }
}
else if (userLogin == null) {
  alert('entering canceled');
}
else {
  alert('I do not know you');
}*/

/*var userAge = prompt('enter your age', ' ');

if ((userAge >= 14) && (userAge <= 90)) {
  alert('hello!');
}*/

/*function sum(a, b) {
  var c = +a + b;
  return c;
}

alert(sum(2,3));*/

/*var firstInputValue = document.getElementsByClassName('first') [0].value;
var secondInputValue = document.getElementsByClassName('second') [0].value;
var variable = firstInputValue;

firstInputValue = secondInputValue;
secondInputValue = variable;

console.log(firstInputValue);
console.log(secondInputValue);*/

/*var firstInputValue = document.getElementsByClassName('first') [0].value;
var secondInputValue = document.getElementsByClassName('second') [0].value;

function valueChanging ( prevInputValue, newInputValue) {
  document.getElementsByClassName(prevInputValue) [0].value = newInputValue;
}

valueChanging (firstInputValue, secondInputValue);
valueChanging (secondInputValue, firstInputValue);*/

/*for (var i = 0; i < 3; i++) {
  alert( "номер " + i + "!" );
}

var i = 0;

while (i < 3) {
  alert( "номер " + i + "!" );
  i++;
}*/


/*var enteringNumber = prompt('enter the number more than 100', ' ');

while (enteringNumber < 100 && enteringNumber != null) {
  var newEnteringNumber = prompt('once again enter the number more than 100', '101');
  if (newEnteringNumber > 100 || enteringNumber === null) break;
}*/

/*Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1.

Другими словами, n>1 – простое, если при делении на любое число от 2 до n-1 есть остаток.

Создайте код, который выводит все простые числа из интервала от 2 до 10. Результат должен быть: 2,3,5,7.

*/
/*nextNumber:
for (var n = 2; n <= 10; n++) {
  for (var i = 2; i <= n-1; i++) {
    if (n%i == 0) continue nextNumber;
  }
  alert(n);
}*/
