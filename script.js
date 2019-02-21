'use strict';

var admin;
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
}
