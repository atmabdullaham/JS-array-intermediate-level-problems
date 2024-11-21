// Use find() to Locate the First Even Number

// The find() method returns the first element in an array that satisfies the given condition.

// It stops searching as soon as it finds a match.

// Returns undefined if no element matches the condition.

const numbers = [1, 3, 7, 11, 10, 15];

// Find the first even number
const firstEven = numbers.find(num => num % 2 === 0);

console.log(firstEven); // Output: 8


// Use filter() to Find All Strings Longer than 3 Characters

// The filter() method creates a new array with all elements that satisfy the given condition.

// Unlike find(), it doesn’t stop after finding one match and includes all matching elements.

const words = ["cat", "apple", "dog", "banana"];

// Find all strings longer than 3 characters
const longWords = words.filter(word => word.length > 3);

console.log(longWords); // Output: ["apple", "banana"]

// Key Differences Between find() and filter()

/* Feature  	           find()	                              filter()

 Output               	First matching element              	Array of all matching elements
 Stops                 Searching	After the first match	     Goes through the entire array
 Result for No Match	   undefined	                           Empty array[]       */
