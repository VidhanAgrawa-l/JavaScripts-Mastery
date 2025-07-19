// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();




// ()();    ek parenthesis ke andar function likha aur uske baad ek aur parenthesis laga diya
     
    // unnamed IIFE
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')

