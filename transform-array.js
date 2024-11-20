/**
 * Using map() to Double the Values: 
 * 
The map() method creates a new array by applying a callback function to every element of the original array.
 */

// Example: 

const numbers = [1, 2, 3, 4, 5];

// Double each value

const doubled = numbers.map(num => num * 2);

console.log(doubled); // Output: [2, 4, 6, 8, 10]
console.log(numbers); // Output: [1, 2, 3, 4, 5] (original array remains unchanged)

/**
 * Purpose of map()
 * 
--The map() method is used when you want to transform every element in an array and create a new array with the transformed values.

  --It applies a given function to each element in the array.
  --The original array remains unchanged.
  --It’s often used for computations, formatting, or conversions.

  Example Use Case:

   --Doubling the numbers in an array.
   --Formatting strings to uppercase.
   --Extracting a specific property from an array of objects.
 */



/**
 * Using filter() to Extract Even Numbers
 * 
The filter() method creates a new array containing only the elements that satisfy a given condition.
 */



// Extract even numbers
const evens = numbers.filter(num => num % 2 === 0);

console.log(evens); // Output: [2, 4, 6]
console.log(numbers); // Output: [1, 2, 3, 4, 5, 6] (original array remains unchanged)


//  Key Points

//  map() transforms every element of an array.
//  filter() selects elements based on a condition.



/**
 * Purpose of filter()
--The filter() method is used when you want to select specific elements from an array based on a condition and create a new array with only those elements that pass the test.

  --It does not modify the original array.
  --It’s useful for filtering data, such as extracting specific types of values.

  Example Use Case:
  --Extracting even numbers from an array.
  --Filtering out null or undefined values.
  --Selecting objects from an array based on a specific property.
 */