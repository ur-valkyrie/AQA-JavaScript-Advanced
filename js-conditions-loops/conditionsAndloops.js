// Task 1
let yearsOfExperience = 3
let salary = 0
let bonusSalary = 0

if (yearsOfExperience < 0.5) {
    console.log("Your salary: " + salary)
    console.log("Your bonus: " + bonusSalary)
} else if (yearsOfExperience >= 0.5 && yearsOfExperience < 1) {
    salary = 100 
    bonusSalary = (salary * 1)/100
    console.log("Your salary: " + salary)
    console.log("Your bonus: " + bonusSalary)
} else if (yearsOfExperience >= 1 && yearsOfExperience < 2) {
    salary = 333 
    bonusSalary = (salary * 3)/100
    console.log("Your salary: " + salary)
    console.log("Your bonus: " + bonusSalary)
} else if (yearsOfExperience >= 2 && yearsOfExperience < 4) {
    salary = 555 
    bonusSalary = (salary * 4)/100
    console.log("Your salary: " + salary)
    console.log("Your bonus: " + bonusSalary)
} else if (yearsOfExperience >= 4) {
    salary = 666
    bonusSalary = (salary * yearsOfExperience)/100
    console.log("Your salary: " + salary)
    console.log("Your bonus: " + bonusSalary)
} else {
    console.log("You don't work enough")
}


// Task 2
let monthNumber = 12

switch (monthNumber) {
    case 1:
        console.log("January")
        break;
    case 2:
        console.log("February")
        break;
    case 3:
        console.log("March")
        break;
    case 4:
        console.log("April")
        break;
    case 5:
        console.log("May")
        break;
    case 6:
        console.log("June")
        break;
    case 7:
        console.log("July")
        break;
    case 8:
        console.log("August")
        break;
    case 9:
        console.log("September")
        break;
    case 10:
        console.log("October")
        break;
    case 11:
        console.log("November")
        break;
    case 12:
        console.log("December")
        break;
    default:
        console.log("Not correct number of a month")
}


// Task 3
const number = 30

for(let i = 0; i < number; i++) {
    if (i % 2 != 0) {
        continue;
    } 
    if (i === 0) {
        continue;
    } 
    if (i === 22) {
        continue;
    }
    console.log(i)
}


// Task 4
let numberA = 3000
let numberB = 2000

const compareNumbers =
    numberA > numberB 
        ? console.log(numberA)
        : console.log(numberB)


// Task 5
let str = "Javascript is fun"
let i = 0

while (i < str.length) {
    let strChar = str[i];
    if (strChar === "a") {
        i++
        continue;
    } else if (strChar === "n") {
        break;
    }
    console.log(strChar);
    i++
}