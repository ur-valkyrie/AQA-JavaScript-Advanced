// Task 1
let age = 23
let allowedAge = age >= 18
console.log("Can person get driver license? " + allowedAge)

// Task 2
let nameFirstPerson = "Jessica"
let nameSecondPerson = "Daniel"
let greeting = "Hello " + nameFirstPerson + " and " + nameSecondPerson + "!"
console.log(greeting)
let templateGreeting = `Hello ${nameFirstPerson} and ${nameSecondPerson}!`
console.log(templateGreeting)

// Task 3
let variableStr = "5.489"
let variableFloat = Number.parseFloat(variableStr)
let variableNaN = Number.isNaN(variableFloat)
let variableRounded = variableFloat.toFixed(1)
let variableNum = variableRounded.toString()

console.log("Float variable: " + variableFloat)
console.log("Variable is NaN: " + variableNaN)
console.log("Variable after rounding is: " + variableRounded)
console.log("String variable: " + variableNum)

// Task 4
let description = "Wikipedia is a free online encyclopedia, created and edited by volunteers around the world and hosted by the Wikipedia Foundation."
console.log(description.length)
console.log(description.replaceAll("Wikipedia", "Amazon"))
console.log(description.includes("world"))
console.log(description.endsWith("foundation"))

// Task 5
let radius = 10
let areaCircle = Math.PI * radius**2
console.log(areaCircle.toFixed(2))

let length = 5
let width = 4
let areaSquare = length * width
console.log(areaSquare.toFixed(2))

let height = 7
let volumeCylinder = Math.PI * radius**2 * height
console.log(volumeCylinder.toFixed(2))