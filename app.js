//non-recursive factorial fn
function getFactorial(number) {
    //what would loop look like
    let product = 1
    while (number > 1) {
        product *= number
        number--
    }
    return product
}

console.log("not recursive", getFactorial(5))

//recursive factorial fn:
function getRecursiveFactorial(number) {
    if (number === 1) {
        return number
    }
    return number * getRecursiveFactorial(--number)

}
//How to write recursive functions: 
//establish base case, provide initial state, and fn should call itself
//fn above has no loop, no variables, and a base case 
//=> this is what makes it a functional fn
console.log("recursive", getRecursiveFactorial(5))

//HOFs
//Higher order function: 
//a fn that takes a fn as an argument 
//or returns an fn
//or does both of the above

//examples: event hanlders (e.g., .addEventListener('type', fn); .map(dog => dog); .then(response => response.json()); map, filter, reduce, find)
//async and await are opposite solutions to .then() chains; not HOFs

//What is closure? https://medium.com/@kyle.coberly/how-closures-work-8d895d84320c
//fn below gets cashew as an argument and the almond through closure
//function mug(almond){
//     return function shotGlass(cashew){
//         return darkNut
//     }
// }
const evenNumbers = [2, 4, 6]
[1, 2, 3, 4, 5, 6].filter(getNumberBiggerThan3andEven(evenNumbers))

function getNumberBiggerThan3andEven(evenNumbers) {
    return number => number > 3 && evenNumbers.includes(number)
}

