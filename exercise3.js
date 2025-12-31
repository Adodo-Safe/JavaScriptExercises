//exercise 11
let marks = 85;

if (marks >= 90) {
    console.log(`A`);
} else if (marks >= 80) {
    console.log(`B`);
} else if (marks >= 70) {
    console.log(`C`);
} else if (marks >= 60) {
    console.log(`D`);
} else {
    console.log(`F`);
}

//exercise 12
let length = 5;
let width = 10;

let area = length * width;
let perimeter = 2 * (length + width);

console.log(area);
console.log(perimeter);

//exercise 13
let year = 2024;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(`Leap year`);
} else {
    console.log(`Not a leap year`);
}

//exercise 14
let numberCheck = 47;

if (numberCheck % 3 === 0 && numberCheck % 5 === 0) {
    console.log(`Divisible by both 3 and 5`);
} else if (numberCheck % 3 === 0) {
    Console.log(`Divisible by 3`);
} else if (numberCheck % 5 === 0) {
    console.log(`Divisible by 5`);
} else {
    console.log(`Divisible by neither`);
}

//wxercise 15
let subject1 = 78;
let subject2 = 85;
let subject3 = 92;

let averageScore = (subject1 + subject2 + subject3) / 3;

if (averageScore >= 90) {
    console.log(`Excellent`);
} else if (averageScore >= 75) {
    console.log(`Good`);
} else if (average >= 60) {
    console.log(`Average`);
} else {
    console.log(`Needs improvement`);
}
