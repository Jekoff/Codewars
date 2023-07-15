/* Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example(Input => Output):
35231 => [1,3,2,5,3]
0 => [0] */

// My solution:

function digitize(n) {
    const nString = n.toString();
    const nArray = nString.split('').reverse();
    return nArray.map(nString => parseInt(nString));
}

// Other solutions :

function digitize(n) {
    return Array.from(String(n), Number).reverse();
  }