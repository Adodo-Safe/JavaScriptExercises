//exercise1if
let firstName = "Safe";
let lastName = "Soar";
let age = 30;
console.log(`My name is ${lastName} ${firstName}, and i am ${age} years old`);

console.log(`_______________`);

//exercise2
let num1 = 15;
let num2 = 8;

let sum = num1 + num2;
let difference = num1 - num2;
let product = num1 * num2;
let quotient = num1 / num2;

console.log(`The sum of num1 and num2 is ${sum}`);
console.log(`The difference of num1 and num2 is ${difference}`);
console.log(`The product of num1 and num2 is ${product}`);
console.log(`The quotient of num1 and num2 is ${quotient}`);

//exercise3
let temperatute = 22;
if (temperatute < 20) {
    console.log(`It's cold`);
} else {
    console.log(`It's warm`);
}

//exercise4
let price = 50;
let discount = 10;
let finalPrice = price - discount;
console.log(`The final price is ${finalPrice}`);

//exercise5
let number = -10;
if (number > 0) {
    console.log(`${number}, is possitive`);
} else if (number < 0) {
    console.log(`${number}, is negative`);
} else {
    console.log(`Zero`);
}
