// Task 1
const arr1 = ["cat", "dog", "bird", "lion"];
const arr2 = [1, 2, 3, 4, 5];
const arr3 = [...arr1, ...arr2];

console.log(arr3);

// Task 2
function multiply (multiplier, ...arguments) {
    const result = arguments.map((x) => x * multiplier);
    return result;
}
console.log(multiply(2, 2, 3, 4, 5));
