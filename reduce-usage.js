/**
 * Purpose of reduce()

--The reduce() method reduces an array to a single value by applying a callback function repeatedly to its elements. It takes two arguments:

---A callback function (accumulator, currentValue).
---An initial value for the accumulator (optional but recommended).
 */

// Calculate the value of an array
const numbers = [1, 2, 3, 4, 5];

// Define a function to sum numbers
function sumNumbers(accumulator, currentValue) {
 return accumulator + currentValue;
}

// Use reduce with the defined function
const sum = numbers.reduce(sumNumbers, 0);

console.log(sum); // Output: 15


//  Find the Largest Number in an Array



// Use reduce to find the largest number

const largest = numbers.reduce((accumulator, currentValue) => {
 return currentValue > accumulator ? currentValue : accumulator;
}, numbers[0]);

console.log(largest); // Output: 80



// Define a function to find the largest number
{
 const numbers = [10, 50, 20, 80, 30];
 function findLargest(accumulator, currentValue) {
  return currentValue > accumulator ? currentValue : accumulator;
 }

 // Use reduce with the defined function
 const largest2 = numbers.reduce(findLargest, numbers[0]);

 console.log(largest2);
} // Output: 80

