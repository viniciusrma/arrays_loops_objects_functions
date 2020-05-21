/* What happens if we try to change an array inside a function? 
Does the array keep the change after the function call or is it scoped to inside the function? 
Let's take a look!
*/

const flowers = ['peony', 'daffodil', 'marigold'];

function addFlower(arr) {
  arr.push('lily');
}

addFlower(flowers);

console.log(flowers); // Output: ['peony', 'daffodil', 'marigold', 'lily']

/* 
1. The flowers array that has 3 elements.
2. The function addFlower() has a parameter of arr uses .push() to add a 'lily' element into arr.
3. We call addFlower() with an argument of flowers which will execute the code inside addFlower.
4. We check the value of flowers and it now includes the 'lily' element! The array was mutated! 
So when you pass an array into a function, if the array is mutated inside the function, that change will be maintained outside the function as well.
*/

/*
Functions

JavaScript functions behave like any other data type in the language
We can assign functions to variables, and we can reassign them to new variables.

A higher-order function is a function that either accepts functions as parameters, returns a function, or both!
This enables us to build abstractions on other abstractions.
*/

const extremellyBigFunctionName = () => {
  console.log("Wow! This function name is absolutelly ridiculous!");
};

const  okName = extremellyBigFunctionName;

okName(); 

// We called a function that took another function as argument.
