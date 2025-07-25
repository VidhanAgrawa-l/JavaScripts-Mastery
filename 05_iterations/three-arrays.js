// for of

// ["", "", ""]
// [{}, {}, {}]


// for of loop is used to iterate over iterable objects like arrays, strings, maps, sets, etc.


const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}





const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}





// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);





for (const [key, value] of map) {     // brackets are used to destructure the key and value from the map
    // console.log(key, ':-', value);
}




// this will not work because map is not iterable in objects
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }