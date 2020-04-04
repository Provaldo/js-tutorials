console.log('Heyyy seniorita! wake me up from my siesta');

const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    draw: function() {
        console.log('draw');
    }
};

circle.draw();

//the above way of designing objects is ok when the objects don't have many methods.
//when they do, they are described as having "behaviour". in that case we use the 
//way of designing objects shown below:

//-----------------------------

//factory function or object literal syntax
function createCircle(radius, xAxis, yAxis) {
    return {
        radius, //this is equivalent to-> radius: radius
        location: {
            x: xAxis,
            y: yAxis
        },
        draw: function() {
            console.log('draw', this.radius);
        }
    };
}

const circle2 = createCircle(3, 5, 6);
circle2.draw();
circle1 = circle2;
console.log('this is circle 1: ', circle1);
circle1.radius = 28;
console.log('this is the radius from circle2: ', circle2.radius);

//-----------------------------

//constructor function
function Circle(rad) {
    console.log('this', this);
    this.radius = rad;
    this.draw = function() {
        console.log('draw from constructor', this.radius);
    }
}

const anotherCircle = new Circle(5);
anotherCircle.draw();

//-------------------------------

//constructor properties
console.log(anotherCircle.constructor);
console.log(circle2.constructor);

//when we write:
let a = {};
//js translates it to sth like this:
//let x = new Object();

//we have these possibilities:
new String(); //but instead we use '' or "" or `` because it's shorter and cleaner. similarly:
new Boolean(); //true, false
new Number(); // number literals: 2,4,6...

//---------------------------------

console.log(Circle.length); //1 <- this is the number of arguments

console.log(Circle.constructor); //function Function()

//so functions are objects that are constructed using the Function() constructor
const Circle2 = new Function('rad', `
console.log('this', this);
this.radius = rad;
this.draw = function() {
    console.log('draw from constructor', this.radius);
}
`);

const circle3 = new Circle2(9);

//also these two are equivalent: Circle.call({},1); == new Circle(1);
//also these are equivalent: Circle.call(window, 1); == Circle(1);

//also we can pass the arguments in an array if we already have that: for example if we have 3 args:
//Circle.apply({}, [1,2,3])

//----------------------------------

// how objects behave
let x = 10;
let y = x;

x = 20;

console.log('x =', x, '\ny =', y); //x = 20, y = 10 <-here we see that x and y are independent

//but if we do this:
let b = { value: 10};
let c = b;

b.value = 20;

console.log('b =', b, '\nc =', c); //both are objects with value: 20

//  PRIMITIVES ARE COPIED BY VALUE != REFERENCE TYPES OR OBJECTS ARE COPIED BY THEIR REFERENCE

let  number = 10;

function increase(number) {
    number++;
}

increase(number);
console.log(number); // obviously we see 10. 

//but:

let objectNumber = { value: 10 };

function increaseObject(objectNumber) {
    objectNumber.value++;
}

increaseObject(objectNumber);
console.log(objectNumber.value);

//--------------------------------

//add or remove properties
//in js you can create extra properties to objects even after they are created. for example:

anotherCircle.location = {x: 1, y: 3};
console.log('anotherCircle object: ', anotherCircle);
//this is useful when you get an object from the user's client app and you add a token or a
//location or sth

//you can also delete a property which is useful for example when you access an object on your
//database and you want to return it to the client without all its properties:
delete anotherCircle.location;
console.log(anotherCircle); //location is missing from properties now.

//---------------------------------

//enumerate properties
for (let key in anotherCircle) {
    console.log('here', key, anotherCircle[key]);
}

//if we want only the properties and not the methods:
console.log('-------------------------------------\n');
for (let key in anotherCircle) {
    if (typeof anotherCircle[key] != 'function') {
        console.log(key, anotherCircle[key]);
    }
}

//another way of getting all the elements of an object is this:
const keys = Object.keys(anotherCircle);
console.log(keys);

//if you want to know if an object has a given property:
if ('radius' in anotherCircle) {
    console.log('anotherCircle has a radius');
}

//----------------------------------

//abstraction

function Square(side) {
    this.side = side;
    
    this.defaultLocation = { x: 0, y: 0};

    this.computeOptimumLocation = function(){
        //some magic
        console.log('blabla');
    };

    this.draw = function() {
        this.computeOptimumLocation();

        console.log('draw a square of size: ', this.side);
    };
}

const square = new Square(10);
square.draw();
square.computeOptimumLocation();
//what if the we shouldn't access the computeOptimumLocation from outside like this
//square.computeOptimumLocation() = false; <- this would mess up the data when the
//call to square.draw(); happened. so we need to make computeOptimumLocation inaccessible.
//So we transform this.defaultLocation and this.computeOptimumLocation to private elements
//to the Square function like this:

function Square2(side) {
    this.side = side;

    let defaultLocation = {x: 3, y: 3};
    
    let computeOptimumLocation = function() {
        //some magic
        console.log('I\'m a happy tree friend', defaultLocation);
    };

    this.draw = function() {
        computeOptimumLocation();

        console.log('draw a square the size of a house with side: ', this.side);
    };
}

const square2 = new Square2(20);

square2.draw();
//square2.computeOptimumLocation(); 
//error: compute optimum location is not a function. so perfect!

//----------------------------------

//setters and getters   

//what if we need to see the default location from the previous square object. not modify, just 
//display:

function Square3(side) {
    this.side = side;

    let defaultLocation = {x: 3, y: 3};
    
    this.getDefaultLocation = function() {
        return defaultLocation;
    };

    this.draw = function() {
        console.log('draw a square the size of a house with side: ', this.side);
    };
}

const square3 = new Square3(20);
console.log('default lovation of square3 is: ', square3.getDefaultLocation());

//but even this doesn't look realy nice. it would be better maybe if we could
//access the defaultLocation as a property like this square3.defaultLocation 
//with the restriction that we couldn't alter it, only read it. so we do this:

function Square4(side) {
    this.side = side;

    let defaultLocation = {x: 4, y: 4};

    this.draw = function() {
        console.log('draw a square the size of a house with side: ', this.side);
    };

    Object.defineProperty(this, 'defaultLocation', {
        get: function() {
            return defaultLocation;
        },
        set: function(value) {
            if (!value.x || !value.y)
                throw new Error('Invalid location.');

            defaultLocation = value;
        }
    });
}

//the first argument to Object.defineProperty() is the object that you want to add a new
//property to. the second arg is the name of the property. the third arg is an object with
// a key-value pair. the key is get: which is a special keyword, and the value is a function.
//So when we access square4.defaultLocation, that function will be called.

const square4 = new Square4(40);
console.log('default location of square4 is: ',square4.defaultLocation);

//the set: function() is used to apply validation on the user's input and not let them
//set faulty values for defaultLocation. so we give access outside of the object with
//restrictions.

//square4.defaultLocation = 1; //this results in an error
square4.defaultLocation = { x: 6, y: 6}; //this will not throw an error
console.log('default location of square4 is: ',square4.defaultLocation);

square4.defaultLocation = { x: 'nani', y: 'porca'}; //this doesn't throw error but is stupid logic
//which shows how you need to make strict validation rules.
console.log('default location of square4 is: ',square4.defaultLocation);

console.log([4,2].map(x => (x**3)));
//[4^3, 2^3]

console.log([4, 6, 8].reduce( (x, y) => (x +y) ) );
//4+6, 10+8, final result = 18