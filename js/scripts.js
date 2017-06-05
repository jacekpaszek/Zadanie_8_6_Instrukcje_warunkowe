var a = prompt('Enter value a'),
	b = prompt('Enter value b');

var value = (a * a) + (2 * a * b) - (b * b); //equation calculation

console.log('Wartosc rownania dla a = ' + a + ' i b = ' + b + ' wynosi: ' + value);
if (value > 0) {
	console.log('Wynik jest dodatni')
} else if (value < 0) {
	console.log('Wynik jest ujemny')
} else {
	console.log('Wynik jest równy 0')
}

