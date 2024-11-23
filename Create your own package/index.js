// index.js

// 1. Find the Maximum Value in an Array
function findMax(arr) {
    return Math.max(...arr);
  }
  
  // 2. Find the Minimum Value in an Array
  function findMin(arr) {
    return Math.min(...arr);
  }
  
  // 3. Sum of All Elements in an Array
  function sumArray(arr) {
    return arr.reduce((acc, num) => acc + num, 0);
  }
  
  // 4. Reverse an Array
  function reverseArray(arr) {
    return arr.reverse();
  }
  
  // 5. Find the Index of an Element in an Array
  function findIndex(arr, element) {
    return arr.indexOf(element);
  }
  
  // 6. Check if an Array Contains a Specific Element
  function contains(arr, element) {
    return arr.includes(element);
  }
  
  // 7. Remove Duplicates from an Array
  function removeDuplicates(arr) {
    return [...new Set(arr)];
  }
  
  // 8. Sort an Array in Ascending Order
  function sortArray(arr) {
    return arr.sort((a, b) => a - b);
  }
  
  // 9. Merge Two Arrays
  function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
  }
  
  // 10. Check if an Array is Empty
  function isArrayEmpty(arr) {
    return arr.length === 0;
  }
  
  // Exporting the functions for external use
  module.exports = {
    findMax,
    findMin,
    sumArray,
    reverseArray,
    findIndex,
    contains,
    removeDuplicates,
    sortArray,
    mergeArrays,
    isArrayEmpty
  };
  