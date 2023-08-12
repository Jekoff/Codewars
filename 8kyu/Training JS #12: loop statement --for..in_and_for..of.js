/* As you can see, the keys are the indices of the array elements. 
Important: When using for..in with an array, the key (index) is 
always a string, not a number. In the example above, the keys 
are "0", "1", and "2". We can't see the quotes because console.log() 
doesn't show them.

Although for..in can be used to traverse the array, this is discouraged 
because in some cases the order may be unexpected. So it's recommended 
that you use another variant for this: for..of (new in ES6). for..of 
can traverse all the values of the array (without accessing them through 
their index). Function showObjectValues() from above can be modified like 
this:  */

// My solution:

function giveMeFive(obj){
    let result = []
    for (let i in obj) {
      if (i.length == 5) {
        result.push(i)
      }
      if (obj[i].length == 5) {
        result.push(obj[i])
      }
    }
    return result
  }


// Other Solutions:

function giveMeFive(obj){
    let arr = []
    for(let key in obj) {
     arr.push(key) && arr.push(obj[key])
    }
    
    return arr.filter( word => word.length === 5)
    
  }