//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    var c = 30 // var is function scoped, so it will be accessible outside the block no we don't need to use var here
    console.log("INNER: ", a);
    
}


// console.log(a);
// console.log(b);
// console.log(c);




// scope in nested functions
// parent function and child function
// child function can access parent function variables but not vice versa

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()






if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++
// in javascript, functions can can even be stored in variables


// function hoisting 
console.log(addone(5))  // this will work because of hoisting and we have declared the function before calling it

function addone(num){
    return num + 1
}



addTwo(5)  // this will not work because of hoisting, we have declared the function after calling it and function is assigned to a variable
// console.log(addTwo(5)); // this will give an error
const addTwo = function(num){
    return num + 2
}
