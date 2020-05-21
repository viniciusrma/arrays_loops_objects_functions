/*
Arrays can store any kind of data, including other arrays. 
When an array contains another array it is known as a nested array. 
Examine the example below:
*/

const nestedArr = [[1], [2, 3]];

console.log(nestedArr[1]); // Output: [2, 3]
console.log(nestedArr[1][0]); // Output: 2

/*
First it accesses the index 1 of nestedArr, then accesses the index 0. 
It's kind "the index of the index".
*/