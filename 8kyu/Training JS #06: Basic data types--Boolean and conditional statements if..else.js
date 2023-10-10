/* Coding in function trueOrFalse, function accept 1 parameters:val, try to use the conditional statement if...else, if val value is false (val==false or it can convert to false), should return a string "false", if not, return a string "true".

When you have finished the work, click "Run Tests" to see if your code is working properly.

In the end, click "Submit" to submit your code pass this kata. */

// MY SOLUTION:

function trueOrFalse(val){
    if (val == false || val == undefined || val == null || )
    return "false"
    else return "true"
}

// OTHER SOLUTIONS:

function trueOrFalse(val){
    return val ? true : false;             
  }

  // Another one:

function trueOrFalse(val){
    return Boolean(val).toString();
  }
  
  // Another one:

  true0rFalse = val = val => {
    if (val) return 'true';
    return 'false';
  } 

