const calculator = require('../modules/calculator.js');

//La primera prueba para suma
test('La suma de dos numero y el valor resultante', () => {
    expect(calculator.sum(10, 20)).toBe(30);
});

//La segunda prueba para resta
test('La resta de dos numero y el valor resultante', () => {
    expect(calculator.substract(10, 20)).toBe(-10);
});
