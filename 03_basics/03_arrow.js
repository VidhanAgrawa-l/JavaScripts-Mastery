const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);       // this is used to refer to the previously defined object
        console.log(this);
    }

}

// user.welcomeMessage()             // this will give hitesh, welcome to website
// user.username = "sam"
// user.welcomeMessage()             // this will give sam, because this refers to the user object

// console.log(this);      // this will give the global object in browser and undefined in node.js









// function chai(){
//     let username = "hitesh"
//     console.log(this.username);         // this will give undefined because this do not work in normal functions
// }

// chai()









// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);       // this will give undefined because this do not work in normal functions
// }






// arrow functions do not have their own this, they inherit it from the parent scope

const chai =  () => {
    let username = "hitesh"
    console.log(this);
}
// chai()






// more about arrow functions



// first way to write arrow function
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// second way to write arrow function
// const addTwo = (num1, num2) =>  num1 + num2

// third way to write arrow function
// const addTwo = (num1, num2) => ( num1 + num2 )


const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()