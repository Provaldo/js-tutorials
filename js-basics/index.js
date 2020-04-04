console.log('hola worlda');

//-------------------------------

let user = 'Manos';
console.log(user);

//-------------------------------

let interestRate = 0.3;
interestRate = 1;
console.log(interestRate);

//-------------------------------

const interestRate2 = 0.3;
//interestRate2 = 1; //this line causes an error duo to invalid assignment to constant variable
console.log(interestRate2);

//-------------------------------

let name = 'Manos'; //string literal
let age = 30; //number literal
let isApproved = true; //boolean literal
let firstName; //undefined
let lastName = undefined; //undefined
let middleName = null //null. we use null when we want to explicitly clear the value of the variable

//--------------------------------

//static vs dynamic languages. dynamic: the type of a variable can be changed at runtime

//primitive types: number, string, boolean, undefined, null

console.log(typeof name); //string
name = 99;
console.log(typeof name); //number
age = 30.1;
console.log(typeof age); //number. there is no difference between int and float
console.log(typeof firstName); //undefined. so both its value and its type is undefined? yes
console.log(typeof middleName); //object

//--------------------------------

//reference types: objects, arrays, functions

//object literal
let person = {
    name: 'Manos',
    age: 28
};

console.log(person);

//dot notation
person.name = 'John';
console.log(person.name);

//bracket notation
person['name'] = 'Mike';
console.log(person['name']);

//bracket notation is useful if you want the accessed property at runtime:
let selection = 'age';
console.log(person[selection]);

//bracket notation is also useful when you have special characters or spaces in the property names:
const propertyName= 'center-location';
//person[propertyName] = { x: 1);

//----------------------------

//array literal
let selectedColors = ['red', 'blue'];
console.log(selectedColors);
console.log(selectedColors[0]);
console.log(typeof selectedColors); //onject
selectedColors[2] = 46;             //arrays in js CAN have different types of values stored
console.log(selectedColors);
console.log(typeof selectedColors); //object
console.log(selectedColors.length); //3

//----------------------------------

//function performing a task (showing sth on console)
function greet(name) {
    console.log('Hola chika! The name\'s', name);
}

greet(user);
greet('Escobar');

console.log(greet); //just playing with console

//------------------------------------

//funcion calulating something
function square(number){
    return number * number;
}

console.log(square(2));
