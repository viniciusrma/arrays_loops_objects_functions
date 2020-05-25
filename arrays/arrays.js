/*
Arrays are JavaScript’s way of making lists. 
Arrays can store any data types (including strings, numbers, and booleans). 
Like lists, arrays are ordered, meaning each item has a numbered position.
*/

/*Create an Array - Array Literal
An array literal creates an array by wrapping items in square brackets []. 
Take a look at the exemple below:
*/

const arrayLiteral = ['trance', 10, true];

/*
1. The array is represented by the square brackets [] and the content inside;
2. Each content item inside an array is called an element;
3. There are three different elements inside this array;
4. Each element inside the array is a different data type.
5. We can also save an array to a variable, as the example below:
*/

const example = ['trance', 10, true];

/* Accessing Elements
Each element in an array has a numbered position known as its index.
We can access individual items using their index, which is similar to referencing an item in a list based on the item’s position.
Arrays in JavaScript are zero-indexed, meaning the positions start counting from 0. 
Let’s see how we could access an element in an array:
*/

let cities = ['New York', 'Tokyo', 'São Paulo'];
cities[1]; 

//it acessesses the index ¹ from the 'cities' array, which is "Tokyo".

/*
You can also access individual characters in a string using bracket notation and the index. 
For instance, you can write:
*/

const hello = 'Hello World';
console.log(hello[6]) 

// The console will display 'W' since it is the character that is at index 6.

/*Updating Elements
Once you have access to an element in an array, you can update its value. 
*/

let seasons = ['Winter', 'Spring', 'Summer', 'Fall'];

seasons[3] = 'Autumn';
console.log(seasons); 

//Output: ['Winter', 'Spring', 'Summer', 'Autumn']

/*Variables declared with the const keyword cannot be reassigned. 
However, elements in an array declared with const remain mutable. 
It means that we can change the contents of a const array, but cannot reassign a new array or a different value. 
You are not going to reassign the value of the array, only it's index.
*/

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];
utensils[3] = 'Spoon';
console.log(utensils); 

// It would return ['Fork', 'Knife', 'Chopsticks', 'Spoon'], changing only the ³ index.

/*
Nested arrays
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