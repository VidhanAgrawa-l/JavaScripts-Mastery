// This file contains examples of using the `reduce` method in JavaScript


const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (accumulator, currentvalue) {
//     console.log(`acc: ${accumulator} and currval: ${currentvalue}`);
//     return accumulator + currentvalue
// }, 0)


// this will give the result 
// acc: 0 and currval: 1
// acc: 1 and currval: 2
// acc: 3 and currval: 3
// 6



const myTotal = myNums.reduce( (accumulator, currentvalue) => accumulator + currentvalue, 0)

console.log(myTotal);







const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);