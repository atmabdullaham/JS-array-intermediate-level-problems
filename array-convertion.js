// 1. Convert a String into an Array Using split()

// The split() method splits a string into an array of substrings based on a specified delimiter.

//  Syntax:

// string.split(separator)

// separator: A character or pattern that determines where the string is split(e.g., space, comma, etc.).

// If no separator is specified, the entire string becomes a single element in the array.


const text = "apple,banana,cherry,date";

// Split the string by commas
const fruits = text.split(",");

console.log(fruits); // Output: ["apple", "banana", "cherry", "date"]


// 2. Convert an Array into a String Using join()

// The join() method combines all elements of an array into a single string, separated by a specified delimiter.

//  Syntax:

// array.join(separator)

// separator: A character to place between array elements in the resulting string(e.g., space, comma, etc.).
// If no separator is specified, elements are joined with a comma(,) by default.

{
 const fruits = ["apple", "banana", "cherry", "date"];

 // Join the array into a string with a hyphen
 const text = fruits.join("-");

 console.log(text); // Output: "apple-banana-cherry-date"
}
console.log(fruits);
console.log(text);