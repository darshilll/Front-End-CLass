const firstName = prompt("Enter your first name: ");
console.log(firstName);
const age = prompt("Enter your age: ");
console.log(age);
const futureYear = prompt("Enter future year: ");
console.log(futureYear);
const currentYear = 2023;
const birthYear = currentYear - age;
console.log(birthYear);
const futureAge = futureYear - birthYear;
console.log(futureAge);
alert(`${firstName} , your age in ${futureYear} will be ${futureAge} and your birth year is ${birthYear}.`)
const genZ = 1997;
const trueFalse = genZ <= birthYear;
console.log(trueFalse);
