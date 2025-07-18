//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

// write about heap and stack memory for preimitive and non primitive?
// Primitive types are stored in stack memory, while non-primitive types (like objects and arrays) are stored in heap memory.
// Primitive types are immutable, meaning their values cannot be changed once created, while non-primitive types can be modified.
// Primitive types are compared by value, while non-primitive types are compared by reference.
// give me a diagram of stack and heap memory?
// Stack memory is used for static memory allocation, while heap memory is used for dynamic memory allocation.
// Stack memory is faster than heap memory because it uses a last-in, first-out (LIFO) structure, while heap memory uses a more complex structure for dynamic allocation.
// Stack memory has a fixed size, while heap memory can grow and shrink as needed.
// Stack memory is automatically managed by the system, while heap memory requires manual management (allocation and deallocation) by the programmer.
