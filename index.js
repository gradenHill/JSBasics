const pi = 3.14;
let happy = true;
let name;

console.log(typeof(name));

let dog = {
    name: 'Millie',
    age: 0,
    isGoodGirl: true
};

dog.age = 1;
console.log(dog.name + ": " + dog.age);

let favoriteColors = ['yellow', 'purple'];
console.log(favoriteColors);

// Performing a task
function greet(name, lastName) {
    console.log('Hello ' + name + ' ' + lastName);
}

greet('John', 'Smith');

// Calculating a value
function square(number) {
    return number * number;
}

console.log('Square of 4 is: ' + square(4));