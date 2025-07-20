// forEach loop is used to iterate over the elements of an array




const coding = ["js", "ruby", "java", "python", "cpp"]

// how to wirte the forEach loop

 coding.forEach(function (val){ }  )     // the fuction do not have a name here because it is a callback function




// coding.forEach( function (val){
//     console.log(val);
// } )



// type two of forEach loop

// coding.forEach( (item) => {
//     console.log(item);
// } )




// type three of forEach loop

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)









// // forEach loop with index and array


// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )








const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )