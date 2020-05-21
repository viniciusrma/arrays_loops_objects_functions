/*
Loops

A loop is a programming tool that repeats a set of instructions until a specified condition, called a stopping condition is reached. 
The generic term 'iterate' is common when referring to loops; 
Iterate simply means “to repeat”.
Below there's an exemple of how important loops are for programming:
*/

const nextTrips = ['London', 'Amsterdam', 'Barcelona'];

console.log(nextTrips[0]);
console.log(nextTrips[1]);
console.log(nextTrips[2]);

/*
Now imagine that the next trip array had 100 places on it — and you had to log each array element to the console?
Loops makes this task easier, and a cleaner code.
/*

/* 
for Loops

The typical for loop includes an iterator variable that usually appears in all three expressions. 
The iterator variable is initialized, checked against the stopping condition, and assigned a new value on each loop iteration. 
*/

for (let counter = 0; counter < 4; counter++) {
  console.log(counter); // outputs: 0 1 2 3
}

/*
A for loop contains three expressions separated by ; inside the parentheses:

1 The initialization is let counter = 0, so the loop will start counting at 0;
2 The stopping condition is counter < 4, meaning the loop will run as long as the iterator variable, counter, is less than 4;
3 The iteration statement is counter++. This means after each loop, the value of counter will increase by 1;
4 The code block is inside of the curly braces {}, console.log(counter) will execute until the condition evaluates to false. 
The condition will be false when counter is greater than or equal to 4.
*/

/*
Looping in Reverse

The loop below loops from 0 to 3:
*/

for (let counter = 3 ; counter >= 0 ; counter--){
  console.log(counter); //outputs: 3 2 1 0
}

/*
1 The initialization is let counter = 3, so the loop will start counting at 3;
2 The stopping condition is counter >= 0, meaning the loop will run as long as the iterator variable, counter, is bigger than or equal to 0;
3 The iteration statement is counter--. This means after each loop, the value of counter will decrease by 1;
4 The code block is inside of the curly braces {}, console.log(counter) will execute until the condition evaluates to false. 
The condition will be false when counter is equal to 0.
*/


/* 
Looping through arrays

To loop through each element in an array, a for loop should use the array’s .length property in its condition.
Check out the example below to see how for loops iterate on arrays:
*/

const animals = ['Bear', 'Monkey', 'Lion'];
for (let i = 0; i < animals.length; i++){
  console.log(animals[i]);
}

/*outputs: 
Grizzly Bear
Sloth
Sea Lion
*/


/* 
Nested Loops

One use for a nested for loop is to compare the elements in two arrays. 
For each round of the outer for loop, the inner for loop will run completely.
Take a look at the example below:
*/

let vinisFriends = ['Alisson', 'Debora', 'Marina', 'Mavi'];
let rebeccasFriends = ['Alisson', 'Debora', 'Bruna', 'Luiza'];
let mutualFriends = [];

for (let i = 0; i < vinisFriends.length; i++) {
  for (let j = 0; j < rebeccasFriends.length; j++) {
    if (vinisFriends[i] === rebeccasFriends[j]) {
      mutualFriends.push(vinisFriends[i]);
    }
  }
}

/*
 For each element in the outer loop array (vinisFriends), the inner loop (rebeccasFriends) will run in its entirety comparing the current element from the 'vinisFriends[i]', to each element in the 'rebeccasFriends[j]'. 
 When it finds a match (if statement condition), it'll push the mutual strings to the 'mutualFriends' array.
*/

/* 
The While Loop
*/
// A for loop that prints 1, 2, and 3
for (let counterOne = 1; counterOne < 4; counterOne++){
  console.log(counterOne);
}

// A while loop that prints 1, 2, and 3
let counterTwo = 1;
while (counterTwo < 4) {
  console.log(counterTwo);
  counterTwo++;
}

/*
1 The counterTwo variable is declared before the loop. We can access it inside our while loop since it’s in the global scope.
2 We start our loop with the keyword 'while' followed by our stopping condition, or test condition (counterTwo < 4). 
3 While the condition evaluates to true, the block will continue to run. Once it evaluates to false the loop will stop.
4 Next, we have our loop’s code block which prints counterTwo to the console and increments counterTwo.
*/

/*
The syntax of a 'for' loop is ideal when we know how many times the loop should run.
In situations when we want a loop to execute an undetermined number of times, 'while' loops are the best choice.
*/

/*
Do...White Loops
In some cases, you want a piece of code to run at least once and then loop based on a specific condition after its initial run. 
This is where the 'do...while' statement comes in.
*/

let cupsOfSugarNeeded = 4;
let cupsAdded = 0;

do {
 cupsAdded++
} while (cupsAdded < cupsOfSugarNeeded);

/*
The Break Keyword
In our code, when we want to stop a loop from continuing to execute even though the original stopping condition we wrote for our loop hasn’t been met, we can use the keyword break.
The break keyword allows programs to “break” out of the loop from within the loop’s block.

Let’s check out the syntax of a break keyword:
*/

const rapperArray = ["Lil' Wayne", "J. Cole", "Drake", "Kendrick Lamar"];

// Write your code below
for (let i = 0; i < rapperArray.length; i++){
  console.log(rapperArray[i]);
  if (rapperArray[i] === 'Drake'){
    break;
  }
}
console.log("She is in love for who i am");


/* outputs: 
Lil' Wayne
J. Cole
Drake
And if you don't know, now you know.
*/