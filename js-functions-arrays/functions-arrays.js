// Task 1
function comparisonFirst(a, b) {
    return compareNumbers =
    a > b 
        ? a
        : b 
}

const result1 = comparisonFirst(7, 4);
console.log("Function Declaration result:", result1);

let comparisonSecond = function(a, b) {
    return compareNumbers =
    a > b 
        ? a
        : b 
};

const result2 = comparisonSecond(10, 2);
console.log("Function Expression result:", result2);

let comparisonThird = (a, b) => {
    return compareNumbers =
    a > b 
        ? a
        : b 
};

var result3 = comparisonThird(2, 3);
console.log("Arrow Function result:", result3);

// Task 2
function valueFunction(value) {
    console.log(value);

    if (value <= 20) {
        valueFunction(value + 1);
    }
}

valueFunction(19);

// Task 3
let nestedArray = [["apple", "banana", "dog"],["cherry", "cat", "elephant"],["red", "green", "cat"]];

function checkCat(nested) {
    for (let i = 0; i < nested.length; i++) {
        for (let j = 0; j < nested[i].length; j++) 
        {
                if (nested[i][j] === "cat") {
                    return true; 
                }
        }
    }
    return false; 
}

let containCat = checkCat(nestedArray);
console.log("Is cat contained in the array?", containCat);

// Task 4
function divideArray(numbers) {
    try {
      if (numbers.length < 2) {
        throw new Error("There must be at least 2 elements in the array.");
      }
  
      const result = [];
      for (let i = 1; i < numbers.length; i++) {
        if (typeof numbers[i - 1] !== 'number' || typeof numbers[i] !== 'number' || numbers[i - 1] === 0) {
          throw new Error("Elements must be numbers, and the previous element cannot be zero.");
        }
        const divisionResult = numbers[i] / numbers[i - 1];
        result.push(divisionResult);
      }
  
      return result;
    } catch (error) {
      console.error("Error:", error.message);
    } finally {
      console.log("The end of the work");
    }
  }
  
  const array1 = [4, 6, 3, 30];
  const array2 = [2, 0, 5, 3];
  const array3 = [1, "animal", 8, 7];
  const array4 = [8];
  
  console.log("Result of the first array:", divideArray(array1));
  console.log("Result of the second array:", divideArray(array2));
  console.log("Result of the third array:", divideArray(array3));
  console.log("Result of the fourth array:", divideArray(array4));

// Task 5
const array = [1, 8, 10, 11, -8, 17, 20, 22, 40, 37, 45, 0, 3, 45, 56];
const oddNumbers = array.filter(number => number % 2 !== 0);
console.log(oddNumbers);

const arrayColors = ["yellow", "green", "apple", "red", "pink"]
const sortedArrayColors = arrayColors.sort((a, b) => a.localeCompare(b))
console.log(sortedArrayColors)

// Task 6
const arrCapitals = ["Berlin", "Dublin", "Madrid", "Rome", "Oslo"]
const arrCounties = ["Germany", "Ireland", "Spain", "Italy", "Norway"]
const capitalsCountries = arrCapitals.concat(arrCounties)
console.log(capitalsCountries)

// Task 7
const arrNumbers = [10, 20, 30, 40, 50]
const sum = arrNumbers.reduce((value, i) => {
    return value + i;
}, 0);
console.log(sum)

