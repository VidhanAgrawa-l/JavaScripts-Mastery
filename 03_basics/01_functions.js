
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}
// sayMyName  -> this is a function declaration or reference
// sayMyName() -> this is a function call or execution






// function addTwoNumbers(number1, number2){  ->"""number1 and number2 are parameters"""

//     console.log(number1 + number2);
// }
// addTwoNumbers(3, 5) // -> this is a function call with arguments 3 and 5






function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result

    // or simply
    return number1 + number2
}



const result = addTwoNumbers(3, 5)
// this result will be 8 if we return the result from the function and undefined if we don't return anything because in JavaScript, if a function does not explicitly return a value, it returns undefined by default.
// console.log("Result: ", result);





function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))






function calculateCartPrice(val1, val2, ...num1){   // ...num1 is the rest parameter, it collects all remaining arguments into an array
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))   // this will return [500, 2000] because val1 and val2 are not included in the rest parameter num1







const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}






// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));