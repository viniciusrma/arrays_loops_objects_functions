/*
A block is the code found inside a set of curly braces {}. 
Blocks help us group one or more statements together and serve as an important structural marker for our code.
A block of code could be a function, like this:
*/

const logSkyColor = () => {
    let color = 'blue'; 
    console.log(color); // blue 
};

//Notice that the function body is actually a block of code.

/*Global Scope 
In global scope, variables are declared outside of blocks. These variables are called global variables. 
Because global variables are not bound inside a block, they can be accessed by any code in the program, including code in blocks.
Take a look at an example of global scope:
*/

const color = 'blue'

const returnSkyColor = () => {
  return color; // blue 
};

console.log(returnSkyColor()); // blue

/* 
Even though the color variable is defined outside of the block, it can be accessed in the function block, giving it global scope.
In turn, color can be accessed within the returnSkyColor function block.
*/ 


/*Block Scope
When a variable is defined inside a block, it is only accessible to the code within the curly braces {}. 
We say that variable has block scope because it is only accessible to the lines of code within that block.
Take a look at an example of block scope:
*/

const logSkyColor = () => {
    let color = 'blue'; 
    console.log(color); // blue 
  };
  
  logSkyColor(); // blue 
  console.log(color); // ReferenceError

/*
You’ll notice:

We define a function logSkyColor().
Within the function, the color variable is only available within the curly braces of the function.
If we try to log the same variable outside the function, throws a ReferenceError.
*/

/*Scope Polution
Scope pollution is when we have too many global variables that exist in the global namespace, or when we reuse variables across different scopes. 
It makes difficult to keep track of our different variables and sets us up for potential accidents. 
For example, globally scoped variables can collide with other variables that are more locally scoped, causing unexpected behavior in our code.
Take a look at the example below:
*/

let num = 50;

const logNum = () => {
  num = 100; // Take note of this line of code
  console.log(num);
};

logNum(); // Prints 100
console.log(num); // Prints 100

/*
We have a variable num, taking in the value of 50;
Inside the function body of logNum(), we want to declare a new variable but forgot to use the let keyword.
When we call logNum(), num gets reassigned to 100.
The reassignment inside logNum() affects the global variable num.
Even though the reassignment is allowed and we won’t get an error, if we decided to use num later, we’ll unknowingly use the new value of num.

IMPORTANT! 
If a variable does not need to exist outside a block — it shouldn’t!
*/