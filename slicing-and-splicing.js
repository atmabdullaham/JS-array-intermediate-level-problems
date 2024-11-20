/**
 * Array Slicing
The slice() method extracts a section of an array without modifying the original array.
 */

// Syntax:
// array.slice(start, end)

// start(optional): The index where extraction begins(inclusive).
//  end(optional): The index where extraction ends(exclusive).

const numbers = [1, 2, 3, 4, 5];
const fruits = ['apple', 'lichi', 'mango', 'jackfruits', 'banana', 'papaya']

// Extract a subarray from index 1 to 4 (not including 4)
const subarray = numbers.slice(0, 4);
const availableFruits = fruits.slice(2, 5);

console.log(subarray); // Output: [2, 3, 4]
console.log(numbers);  // Output: [1, 2, 3, 4, 5] (original array remains unchanged)
console.log(availableFruits);
console.log(fruits);


/**
 * Array Splicing
The splice() method changes the content of an array by removing, replacing, or adding elements.
 */

// Syntax:
// array.splice(start, deleteCount, item1, item2, ...)

// start: The index where changes will begin.
// deleteCount(optional): The number of elements to remove.
// item1, item2, ... (optional): Elements to insert at start.


let fruitss = ['apple', 'banana', 'cherry', 'date'];
console.log(fruitss)

// Insert elements in the middle of the array
fruitss.splice(2, 0, 'blueberry', 'coconut', 'papaya');

console.log(fruitss); // Output: ['apple', 'banana', 'blueberry', 'coconut', 'cherry', 'date']



