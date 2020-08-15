/* The .length property
One of an array’s built-in properties is .length and it returns the number of items in the array. 
We access the .length property just like we do with strings. Check the example below:
*/

const activitiesAtHome = ['Do the homework', 'Wash the dishes'];

console.log(activitiesAtHome.length);
// Output: 2

//Notice that .length is NOT the same as the number of indexes.


/* The .push() Method
.push() allows us to add items to the end of an array. Here is an example of how this is used:
*/

const brazilWorldCups = [1958, 1962, 1970, 1994];

brazilWorldCups.push(2002);

console.log(brazilWorldCups); 
// Output: [1958, 1962, 1970, 1994, 2002];

//.push() can take a single argument or multiple arguments separated by commas. 


/* The .pop() Method
.pop(), removes the last item of an array.
See the example below:
*/

const brazilWorldCups2 = [1958, 1962, 1970, 1994, 2002];

const removed = brazilWorldCups2.pop(); // we stored the returned value in a new variable called 'removed' for a later use.

console.log(brazilWorldCups2); 
// Output: [1958, 1962, 1970, 1994]
console.log(removed);
// Output: 2002

// .pop() and .push() mutate the array on which they’re called, removing and adding from the end, respectively.


/* The .shift() method.
It removes the first element from an array and returns that removed element. 
This method changes the length of the array.
Take a look at the example below:
*/

const arrExample1 = [1, 2, 3];

const firstElement = arrExample1.shift(); // We've stored the value obtained in a new variable.

console.log(arrExample1);
// output: Array [2, 3]

console.log(firstElement);
// output: 1


/* The .unshift() method 
It adds one or more elements to the beginning of an array and returns the new length of the array. 
Take a look at the example below:
*/

const arrExample2 = [1, 2, 3];

console.log(arrExample2.unshift(10, 20));
// expected output: 5. First it adds the new elements in the array, and then it returns the number of elements within the array.

console.log(arrExample2);
// expected output: Array [10, 20, 1, 2, 3]. Here we just print the modified array.

//Shift and Unshift mutate the array on which they’re called, removing and adding at the beggining, respectively.


/* 
The .slice() method 
returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included) where begin and end represent the index of items in that array. 
The original array will not be modified. 
Take a look at the example below:
*/

const farmAnimals = ['dog', 'goat', 'duck', 'chicken', 'cow'];

console.log(farmAnimals.slice(2));
// expected output: Array ['duck', 'chicken', 'cow']. It've cutted off the first two elements of the array;

console.log(farmAnimals.slice(2, 4));
// expected output: Array ["duck", "chicken"]. It've cutted off the fisrt two elements and then cuts off the fourth element.

console.log(farmAnimals.slice(1, 5));
// expected output: Array ['goat', 'duck', 'chicken', 'cow']. It've cutted off the fisrt element and then don't cut off the fifth element because it doesn't exist!


/* The .indexOf() method returns the first index at which a given element can be found in the array (index position)
Take a look at the example below:
*/

const forestAnimals = ['cheetah', 'rhyno', 'gorilla', 'fox', 'snake'];

console.log(forestAnimals.indexOf('rhyno'));
// expected output: 1

// start from index 2 - It will find the element in the same index as before, but it will consider it as started at position 3.
console.log(forestAnimals.indexOf('rhyno', 2));
// expected output: 4

console.log(forestAnimals.indexOf('giraffe'));
// expected output: -1 - 

// To return the number of the index in the console you should store the value of the 

/* 
Iterators

Iterators are methods called on arrays to manipulate elements and return values.

The .forEach() Method

.forEach() will execute the same code for each element of an array.
Take a look at the example below:
*/

const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

fruits.forEach(fruit => console.log(`I want to eat a ${fruit}.`))


/* 
outputs: 

I want to eat a mango.
I want to eat a papaya.
I want to eat a pineapple.
I want to eat a apple.

1 fruits.forEach() calls the forEach method on the fruits array; 
2 .forEach() takes an argument of callback function named 'fruit';
3 .forEach() loops through the array and executes the callback function for each element, logging to the console
4 The return value for .forEach() will always be undefined.
*/

/* 
The .map() Method

When .map() is called on an array, it takes an argument of a callback function and returns a new array! 
Take a look at an example of calling .map():
*/

const numbers = [1, 2, 3, 4, 5]; 

const bigNumbers = numbers.map(number => {
  return number * 10;
});

/*
1 numbers is an array of numbers;
2 bigNumbers will store the return value of calling .map() on numbers;
3 numbers.map will iterate through each element in the numbers array and pass the element into the callback function (number);
4 return number * 10 will save each value from the numbers array, multiplied by 10, to a new array.
*/

/*
The .filter() Method

.filter() returns an new array of elements after filtering out certain elements from the original array. 
The callback function for the .filter() method should return true or false depending on the element that is passed to it. 
The elements that cause the callback function to return true are added to the new array. 
Take a look at the following example:
*/

const allmembers = ['chair', 'music', 'pillow', 'brick', 'pen', 'door']; 

const members = allmembers.filter(member => {
  return member;
});

/*
1 words is an array that contains string elements;
2 const shortWords = declares a new variable that will store the returned array from invoking .filter();
3 Each element in the words array will be passed to this function as an argument;
4 word.length < 6; is the condition in the callback function. Any word from the words array that has fewer than 6 characters will be added to the shortWords array. 
*/

console.log(words); // Output: ['chair', 'music', 'pillow', 'brick', 'pen', 'door']; 
console.log(shortWords); // Output: ['chair', 'music', 'brick', 'pen', 'door'].

/*
The .findIndex() Method

Calling .findIndex() on an array will return the index of the first element that evaluates to true in the callback function.
Take a look at the example below:
*/

const aleatoryNums = [123, 25, 78, 5, 9]; 

const lessThanTen = aleatoryNums.findIndex(num => {
  return num < 10;
});

/*
1 aleatoryNums is an array that contains elements that are numbers;
2 const lessThanTen = declares a new variable that stores the returned index number from invoking .findIndex();
3 Each element in the aleatoryNums array will be passed to this function as an argument;
4 num < 10; is the condition that elements are checked against. .findIndex() will return the index of the first element which evaluates to true for that condition.
*/

console.log(lessThanTen); // Output: 3 
console.log(jumbledNums[3]); // Output: 5

/*
The .reduce() Method

The .reduce() method returns a single value after iterating through the elements of an array, thereby reducing the array.
Take a look at the example below:
*/

const numbers = [1, 2, 4, 10];

const summedNums = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
})

console.log(summedNums) // Output: 17

/*
1 numbers is an array that contains numbers;
2 summedNums is a variable that stores the returned value of invoking .reduce() on numbers;
3 numbers.reduce() calls the .reduce() method on the numbers array and takes in a callback function as argument. 
4 The callback function has two parameters, accumulator and currentValue. The value of accumulator starts off as the value of the first element in the array and the currentValue starts as the second element.
5 As .reduce() iterates through the array, the return value of the callback function becomes the accumulator value for the next iteration
*/