/* 
Advanced Objects 
1 how to use the this keyword;
2 conveying privacy in JavaScript methods;
3 defining getters and setters in objects;
4 creating factory functions;
5 using destructuring techniques.
*/

// How to use the this keyword

const goat = {
    dietType: 'herbivore',
    makeSound() {
        console.log('baaa');
    }
};

goat.makeSound(); // Prints baaa

const goat = {
    dietType: 'herbivore',
    makeSound() {
      console.log('baaa');
    },
    diet() {
      console.log(dietType);
    }
};

goat.diet(); // Output will be "ReferenceError: dietType is not defined"

// That’s because inside the scope of the .diet() method, we don’t automatically have access to other properties of the goat object.

const goat = {
    dietType: 'herbivore',
    makeSound() {
      console.log('baaa');
    },
    diet() {
      console.log(this.dietType);
    }
};
  
goat.diet(); 
// Output: herbivore

/* 
The this keyword references the calling object which provides access to the calling object’s properties. 
In the example above, the calling object is goat and by using this we’re accessing the goat object itself, and then the dietType property of goat by using property dot notation.
*/

// Arrow function and this

const goat = {
    dietType: 'herbivore',
    makeSound() {
      console.log('baaa');
    },
    diet: () => {
      console.log(this.dietType);
    }
};
  
goat.diet(); // Prints undefined

// Arrow functions bind, or tie, an already defined this value to the function itself that is NOT the calling object.

/*
Privacy
Accessing and updating properties is fundamental in working with objects. 
However, there are cases in which we don’t want other code simply accessing and updating an object’s properties. 
JavaScript does not have any privacy built-in for objects 
One common convention is to place an underscore _ before the name of a property to mean that the property should not be altered. 
*/

const bankAccount = {
    _amount: 1000
} 

// In this example the _amount is not intended to be directly manipulated. Even so, it is still possible to be reassigned;

/* Getters
Getters are methods that get and return the internal properties of an object. 
But they can do more than just retrieve the value of a property! 
Take a look at a getter method:
*/

const person = {
    _firstName: 'John',
    _lastName: 'Doe',
    get fullName() {
      if (this._firstName && this._lastName){
        return `${this._firstName} ${this._lastName}`;
      } else {
        return 'Missing a first name or a last name.';
      }
    }
}

person.fullName; // 'John Doe'

/*
1 Getters can perform an action on the data when getting a property;
2 Getters can return different values using conditionals;
3 In a getter, we can access the properties of the calling object using this;
4 The functionality of our code is easier for other developers to understand. 
*/

/*
Setters
Setter methods reassign values of existing properties within an object. 
Take a look at the example below.
*/

const person = {
    _age: 37,
    set age(newAge){
      if (typeof newAge === 'number'){
        this._age = newAge;
      } else {
        console.log('You must assign a number to age');
      }
    }
};

person.age = 40;
console.log(person._age); // Logs: 40
person.age = '40'; // Logs: You must assign a number to age

/*
1 We can perform a check for what value is being assigned to this._age.
2 When we use the setter method, only values that are numbers will reassign this._age
3 There are different outputs depending on what values are used to reassign this._age. 
*/

/*
Factory Functions
A real world factory manufactures multiple copies of an item quickly and on a massive scale. 
A factory function is a function that returns an object and can be reused to make multiple object instances.
*/

const beerFactory = (name, _nacionality, type) => {
    return {
        name: name,
        _nacionality: _nacionality,
        type: type,
    };
};

const getDrunkWith = beerFactory('Heineken', dutch, lager);


/*
Property Value Shorthand
ES6 introduced some new shortcuts for assigning properties to variables known as destructuring.

*/

const beerFactory = (name, _nacionality, type) => {
    return {
        name,
        _nacionality,
        type,
    };
};

// Notice that we don’t have to repeat ourselves for property assignments!

/*
Destructured Assignment
We often want to extract key-value pairs from objects and save them as variables. 
Take for example the following object: 
*/

const vampire = {
    name: 'Dracula',
    residence: 'Transylvania',
    preferences: {
      day: 'stay inside',
      night: 'satisfy appetite'
    }
};

// If we wanted to extract the residence property as a variable, we could using the following code:

const residence = vampire.residence; 
console.log(residence); // Prints 'Transylvania' 

const { residence } = vampire; 
console.log(residence); // Prints 'Transylvania' in the destructured way assignment.

