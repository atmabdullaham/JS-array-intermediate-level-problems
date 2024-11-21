/**
 * Steps to Remove Duplicates Using Set
 * 
Convert the array into a Set using the Set constructor.
Sets automatically remove duplicates.
Convert the Set back to an array using the Array.from() method or the spread operator (...)
 */

const numbers = [1, 2, 2, 3, 4, 4, 5];

// Convert to Set and back to array
const uniqueNumbers = Array.from(new Set(numbers));

console.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5]


{
 const numbers = [1, 2, 2, 3, 4, 4, 5];

 // Convert to Set and back to array using spread operator
 const uniqueNumbers = [...new Set(numbers)];

 console.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5]

}

// Key Points

// Set only stores unique values, so duplicates are automatically removed.
// The Array.from() method and the spread operator are both ways to create a new array from a Set.