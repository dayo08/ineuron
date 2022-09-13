// Write a JavaScript program to convert temperatures to and from Celsius,
// Fahrenheit.
// [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in
// Fahrenheit ]
// Expected Output :
// 60°C is 140 °F
// 45°F is 7.222222222222222°C

const C = 60;
const f = 45;

const Celsius = (f - 32) * 0.5555;
console.log(`${Celsius}°C`)

const Fahrenheit = C*9/5+32
console.log(`${Fahrenheit}°F`)

// Expected Output :
// 60°C is 140 °F
// 45°F is 7.2215°C