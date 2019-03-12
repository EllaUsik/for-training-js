firstInputValue = document.getElementsByClassName('first') [0].value;
var secondInputValue = document.getElementsByClassName('second') [0].value;

function valueChanging ( prevInputValue, newInputValue) {
  document.getElementsByClassName(prevInputValue) [0].value = newInputValue;
}

valueChanging (firstInputValue, secondInputValue);
valueChanging (secondInputValue, firstInputValue);
