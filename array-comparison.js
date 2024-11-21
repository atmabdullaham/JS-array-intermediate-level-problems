/**
 * To compare two arrays for equality, you need to check:

---If they have the same length.
---If every element at the corresponding index is equal.

You can achieve this using:

 --A simple loop.
 --The every() method.
 --JSON.stringify() (if order and data types are guaranteed to match)

 */

// Method: 1 Using Loop

function areArraysEqual(arr1, arr2) {
 if (arr1.length !== arr2.length) {
  return false; // Arrays are not the same length
 }

 for (let i = 0; i < arr1.length; i++) {
  if (arr1[i] !== arr2[i]) {
   return false; // Mismatched elements
  }
 }

 return true; // Arrays are equal
}

const array1 = [1, 2, 3];
const array2 = [1, 2, 3];
console.log(areArraysEqual(array1, array2)); // Output: true

//Method 2: Using every()

{
 function areArraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
   return false;
  }

  return arr1.every((value, index) => value === arr2[index]);
 }

 const array1 = [1, 2, 3];
 const array2 = [1, 2, 3];
 console.log(areArraysEqual(array1, array2)); // Output: true

}

/**
 * Method 3: Using JSON.stringify()
 * 
This works if:

--The arrays are sorted (if order matters).
--Data types are consistent.
 */

{
 function areArraysEqual(arr1, arr2) {
  return JSON.stringify(arr1) === JSON.stringify(arr2);
 }

 const array1 = [1, 2, 3];
 const array2 = [1, 2, 3];
 console.log(areArraysEqual(array1, array2)); // Output: true

}
