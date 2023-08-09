/* The function pickIt accepts 1 parameter, arr, which is an array of numbers. 
We need to traverse arr by 
using a for loop. If an element is an odd number, push it to the odd array, 
and if it's an even number, push it to the evenarray.

I've defined two arrays odd and even in the function, and also wrote 
the return statement. Your work is to write a for loop. */

// My solution:

function pickIt(arr){
    let odd=[],even=[];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            even.push(arr[i]);
        }
        else {
            odd.push(arr[i]);
        }
    }
    return [odd,even];
}

// Other Solutions:

function pickIt (arr) {
  
    let odd = []
    let even =[]
        
    for (var x of arr) {
        ((x % 2) ? odd : even).push(x)    
    }
        
    return [odd, even]
  }

  // another solution:

  pickIt = arr => {
    let odd = [], even = [];
    for (let num of arr) num & 1 ? odd.push(num) : even.push(num);
    return [odd,even];
  }