var a = prompt('Enter value a'),
    b = prompt('Enter value b');

if (isNaN(a) || isNaN(b)) {
  console.log('Equation parameters are wrong'); //equation parameters checking
} else {
  var value = (a * a) + (2 * a * b) - (b * b); //equation calculation
  console.log(value === 0 ? 'Wynik jest równy zero' : (value < 0 ? 'Wynik jest ujemny' 
  	: 'Wynik jest dodatni'));
}