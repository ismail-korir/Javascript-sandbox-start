// Challenge 1
const arr = [1,2,3,4,5];

// arr.reverse();
// arr.push(0);
// arr.unshift(6);

arr.push(6);
arr.unshift(0);
arr.reverse();


// Challenge 2

const arr1 = [1,2,3,4,5];
const arr2 = [5,6,7,8,9,10];

// Solution 1]
const arr3 = arr1.slice(0, 4).concat(arr2);

console.log(arr3)