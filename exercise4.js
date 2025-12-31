//exercise 16

let character = "A";

if (character >= "A" && character <= "Z") {
    console.log(`Uppercase Letter`);
} else if (character >= "a" && character <= "z") {
    console.log(`Lowercase letter`);
} else {
    console.log(`Neither`);
}

//exercise 17
let ageDrive = 25;
let hasLicense = true;

if (ageDrive >= 18 && hasLicense) {
    console.log(`Can drive`);
} else {
    console.log(`Cannot drive`);
}

//exercise 18
let totalAmount = 1000;
let isMember = true;
let discount;

if (isMember) {
    discount = totalAmount * 0.2;
} else {
    discount = totalAmount * 0.05;
}

let finalAmount = totalAmount - discount;
console.log(finalAmount);

//exercise 19
let number = 15;

for (let i = 1; i <= number; i++) {
    if (i % 3 === 0) {
        console.log();
    }
}

//exercise 20
let hour = 14;

if (hour >= 5 && hour <= 11) {
    console.log(`Good morning`);
} else if (hour >= 12 && hour <= 17) {
    console.log(`Good afternoon`);
} else if (hour >= 18 && hour <= 21) {
    console.log(`Good evening`);
} else {
    console.log(`Good night`);
}
