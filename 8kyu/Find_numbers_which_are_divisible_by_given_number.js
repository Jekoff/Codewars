/* Complete the function which takes two arguments and returns 
all numbers which are divisible by the given divisor. 
First argument is an array of numbers and the second is the divisor.*/

// My solution:

function divisibleBy(numbers, divisor) {
    return numbers.filter(number => number % divisor === 0);
}

// Other solutions:

function divisibleBy(numbers, divisor){
    let answer = []
     numbers.map(x => {
     if(x % divisor === 0){
       answer.push(x)}
     } )
     return answer
    }

