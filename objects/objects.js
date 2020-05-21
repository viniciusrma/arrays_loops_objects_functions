/*
Creating Objects

Objects can be assigned to variables just like any JavaScript type;
We use curly braces {} to designate an object literal;
We fill an object with unordered data. This data is organized into key-value pairs.
*/

let spaceship = {}; // spaceship is an empty object 

let fasterShip = {
    'Fuel Type': 'Turbo Fuel',
    color: 'silver'
}; //The fasterShip object has two keys: Fuel Type and color. Turbo fuel and silver are their respective values.

// Accessing properties with dot notation .

fasterShip.color; // returns 'silver'
fasterShip.'Tank Size'; // Returns undefined


// Accessing properties with bracket notation []

fasterShip['Fuel Type'];//returns 'Turbo Fuel'

/*
We *must* use bracket notation when accessing keys that have numbers, spaces, or special characters in them. 
Without bracket notation in these situations, our code would throw an error.
*/

let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    'Active Mission' : true,
    homePlanet : 'Earth', 
    numCrew: 5
};
  
let propName =  'Active Mission';
  
let isActive = spaceship['Active Mission'];
  
console.log(spaceship[propName], 'Active Mission'); // returns true 'Active Mission'

/*
Property Assignment

We can use either dot notation . or bracket notation [], and the assignment operator = to add new key-value pairs to an object or change an existing property.
*/

let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth',
    color: 'silver',
    'Secret Mission' : 'Discover life outside of Earth.'
};
  
spaceship.color = 'glorious gold'; // changes the color to 'glorious gold';
spaceship.numEngines = 9; // adds the property numEngines with 9 as their value;
delete spaceship['Secret Mission']; // deletes 'Secret Mission' property.


/*
Methods
When the data stored on an object is a function we call that a method. 
A property is what an object has, while a method is what an object does.
*/

const alienShip = {
    invade () {
        console.log('Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.')
    }
};

alienShip.invade(); // Prints 'Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.'



// Nested Objects

const spaceship = {
    crew: { // an object that takes another object as properties
        captain: { 
            name: 'Sandra',
            degree: 'Computer Engineering',
            encourageTeam() { console.log('We got this!') } 
        }
   },
}; 

spaceship.nanoelectronics['back-up'].battery; // Returns 'Lithium'

 
/* 
Pass by reference

Objects are passed by reference. 
This means as a result, functions which change object properties actually mutate the object permanently.
Even when the object is assigned to a const variable.
*/

const spaceship = {
    homePlanet : 'Earth',
    color : 'silver'
};
  
let paintIt = obj => {
    obj.color = 'gold'
};
  
paintIt(spaceship);
  
spaceship.color // Returns 'gold'


// Looping Through Objects

let spaceship = {
    crew: {
    captain: { 
        name: 'Lily', 
        degree: 'Computer Engineering', 
        cheerTeam() { console.log('You got this!') } 
        },
    'chief officer': { 
        name: 'Dan', 
        degree: 'Aerospace Engineering', 
        agree() { console.log('I agree, captain!') } 
        },
    medic: { 
        name: 'Clementine', 
        degree: 'Physics', 
        announce() { console.log(`Jets on!`) } },
    translator: {
        name: 'Shauna', 
        degree: 'Conservation Science', 
        powerFuel() { console.log('The tank is full!') } 
        }
    }
}; 

// for...in method
for (let crewMember in spaceship.crew) {
  console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`)
}; //logs role and name to the console.

