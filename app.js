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
console.log("recursive", getRecursiveFactorial(5))