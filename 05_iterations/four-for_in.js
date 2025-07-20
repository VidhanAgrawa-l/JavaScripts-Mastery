// "for in" loop is used to iterate over the properties of an object


const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}


for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}





const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(programming[key]);         // this will give the index of the array
}








// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {                // this will not work because map is not iterable in "for in" loop
//     console.log(key);
// }